<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Menu;
use App\Models\AdminUserPermission;
use App\Http\Requests\StoreUserPermissionRequest;
use App\Http\Requests\UpdateUserPermissionRequest;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class AdminUserController extends Controller
{

    public function adminModules()
    {
        return view('adminusers.adminModules');
    }

    public function moduleList(Request $request)
    {
        try {
            $page = $request->input('page', 1);
            $limit = 25; // Default pagination limit
            $offset = ($page - 1) * $limit;
            $query = Menu::select('id','module_name','is_parent');

            if ($request->filled('search_name')) {
                $query->where('module_name', 'LIKE', '%' .$request->input('search_name') . '%');
            }

            $totalItems = $query->count();
            $items = $query->orderBy('updated_at', 'desc')->skip($offset)->take($limit)->get();
            
            if ($items->isEmpty()) {
                return response()->json(['success' => 'No data found'], 200);
            }
            $totalPages = ceil($totalItems / $limit);

            return response()->json([
                'items' => $items,
                'totalItems' => $totalItems,
                'currentPage' => $page,
                'itemsPerPage' => $limit,
                'totalPages' => $totalPages,
                'success' => 'Data Found'
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong. Please try again later.','message'=>$e->getMessage()], 500);
        }
    }

    public function addModule()
    {
        $parentModules = Menu::where('is_parent', 1)->get(['id','module_name']);
        return view('adminusers.addModule',compact('parentModules'));
    }

    public function saveModule(StoreMenuRequest $request)
    {
        try {
            $data = $request->all();

            if ($data['is_parent'] == 1) {
                $data['parent_id'] = 0;
            }

            Menu::create($data);

            return response()->json([
                'status' => 'success',
                'message' => 'New Module is Saved Successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function editModule($id)
    {
        $module = Menu::with('parentModule')->findOrFail($id);
        $parentModules = Menu::where('is_parent', 1)->get(['id', 'module_name']);

        // parent_name is accessible via relation
        $module->parent_name = optional($module->parentModule)->module_name;

        return view('adminusers.editModule', compact('parentModules', 'module','domains'));
    }


    public function updateModule(UpdateMenuRequest $request, $id)
    {
        try {
            $module = Menu::findOrFail($id);
            $data = $request->all();

            if ($data['is_parent'] == 1) {
                $data['parent_id'] = 0;
            }

            $module->update($data);

            return response()->json([
                'status' => 'success',
                'message' => 'Module is Updated Successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
    public function deleteModule($id)
    {
        try {
            $module = Menu::findOrFail($id);
            $module->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Module deleted successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function modulesPermission()
    {
        return view('adminusers.modulepermission');
    }

    public function userPermissionList(Request $request)
    {
        try {
            $page = $request->input('page', 1);
            $limit = 25; // Default pagination limit
            $offset = ($page - 1) * $limit;
            $query = AdminUserPermission::select('id','admin_email','module_list');

            if ($request->filled('search_name')) {
                $query->where('admin_email', 'LIKE', '%' .$request->input('search_name') . '%');
            }

            $totalItems = $query->count();
            $items = $query->skip($offset)->take($limit)->get();
            
            if ($items->isEmpty()) {
                return response()->json(['success' => 'No data found'], 200);
            }
            $totalPages = ceil($totalItems / $limit);

            return response()->json([
                'items' => $items,
                'totalItems' => $totalItems,
                'currentPage' => $page,
                'itemsPerPage' => $limit,
                'totalPages' => $totalPages,
                'success' => 'Data Found'
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong. Please try again later.','message'=>$e->getMessage()], 500);
        }
    }

    public function removeUserModule(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:admin_user_permissions,id',
            'module_name' => 'required|string'
        ]);

        $permission = AdminUserPermission::findOrFail($request->id);

        $modules = explode(',', $permission->module_list);
        $modules = array_filter($modules, fn($m) => trim($m) !== $request->module_name);

        $permission->module_list = implode(',', $modules);
        $permission->save();

        return response()->json(['message' => 'Module removed successfully']);
    }

    public function editUserPermission($id)
    {
        // Fetch the permission record
        $permission = AdminUserPermission::findOrFail($id);

        // Get the current user ID linked to this permission
        $currentUserId = $permission->admin_user_id;

        // Get users who don't already have a permission OR are the current one being edited
        $users = User::whereDoesntHave('adminPermission')
                        ->orWhere('id', $currentUserId)
                        ->orderBy('email_id', 'ASC')
                        ->get(['id', 'email_id']);

        // Get all parent modules and add a dynamic slug
        $adminModules = Menu::where('is_parent', 1)
            ->get(['module_name'])
            ->map(function ($module) {
                $module->slug = Str::slug($module->module_name);
                return $module;
            });

        // Convert stored comma-separated modules to array
        $selectedModules = explode(',', $permission->module_list);

        return view('adminusers.editUserPermission', compact('permission', 'users', 'adminModules', 'selectedModules'));
    }
    
    public function addUserPermission()
    {
        // Only get users who do NOT already have a permission assigned
        $users = User::whereDoesntHave('adminPermission')
                        ->orderBy('email_id', 'ASC')
                        ->get(['id', 'email_id']);

        // Get parent modules and add dynamic slug
        $adminModules = Menu::where('is_parent', 1)
                        ->get(['id', 'module_name'])
                        ->map(function ($module) {
                            $module->slug = Str::slug($module->module_name);
                            return $module;
                        });

        return view('adminusers.addUserPermission', compact('users', 'adminModules'));
    }


    public function storeUserPermission(StoreUserPermissionRequest $request)
    {
        try {
            $adminUserId = $request->admin_user_id;
            $adminEmail = $request->admin_email;
            $modulesString = implode(',', $request->module_list); // Convert array to comma-separated string

            AdminUserPermission::create([
                'admin_user_id' => $adminUserId,
                'admin_email' => $adminEmail,
                'module_list' => $modulesString,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'User permission saved successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function updateUserPermission(UpdateUserPermissionRequest $request, $id)
    {
        // Try to find the permission record based on the given ID
        $permission = AdminUserPermission::findOrFail($id);

        // Get the modules array
        $modulesArray = $request->module_list;

        // Convert the array of modules into a comma-separated string
        $modulesString = implode(',', $modulesArray);

        // Update the record in the database
        $permission->update([
            'admin_user_id' => $request->admin_user_id,
            'admin_email' => $request->admin_email, 
            'module_list' => $modulesString
        ]);

        // Return a success message (this can be returned as JSON for AJAX)
        return response()->json([
            'message' => 'User permission updated successfully.',
        ]);
    }

    public function deleteUserPermission($id)
    {
        // Try to find the permission by ID
        $permission = AdminUserPermission::find($id);

        if ($permission) {
            // Delete the permission
            $permission->delete();

            // Return a success response
            return response()->json([
                'message' => 'User permission deleted successfully.',
            ]);
        }

        // If permission not found, return error
        return response()->json([
            'error' => 'User permission not found.',
        ], 404);
    }

    public function index()
    {
       
        $users = User::orderBy('id', 'desc')->paginate(10);

        return view('adminusers.index',compact('users'));
    }

   
    public function create()
    {
        return view('adminusers.create');
    }

 
    public function store(Request $request)
    {

        try {
            $validatedData = $request->validate([
                'email_id' => 'required|email',
                'first_name' => 'required|max:255',
                'last_name' => 'nullable|max:255',
                'telephone' => 'nullable|max:13',
                'dob' => 'nullable',
                'company' => 'nullable|max:255',
                'nationality' => 'nullable|max:255',
                'status' => 'required',
                'admin' => 'required',
                'type' => 'required',
                'password' => 'required|min:6|confirmed',
            ]);
            $validatedData['password'] = md5(trim($validatedData['password']));
            User::create($validatedData);
            return response()->json(['message' => 'User created successfully'], JsonResponse::HTTP_CREATED);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        } catch (\Exception $e) {
            //Log::error('Error: ' . $e->getMessage());
            return response()->json(['error' => 'An unexpected error occurred','message'=>$e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    
    public function edit($id)
    {
        try {
            // Retrieve the user with the given ID
            $user = User::findOrFail($id);
            
            // Pass the user data to the view for editing
            return view('adminusers.edit', compact('user'));
        } catch (Exception $e) {
        // Handle the case when the user is not found, e.g., redirect or show an error
            return redirect()->route('users.index')->with('error', 'Item not found');
        }
    }

    public function update(Request $request, $id)
    {
        try {
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'email_id' => 'required|email',
            'first_name' => 'required|max:255',
            'last_name' => 'nullable|max:255',
            'telephone' => 'nullable|max:13',
            'dob' => 'nullable',
            'company' => 'nullable|max:255',
            'nationality' => 'nullable|max:255',
            'status' => 'required',
            'admin' => 'required',
            'type' => 'required',
        ]);

        $user->update($validatedData);

        return response()->json(['message' => 'Item updated successfully']);
    } catch (ValidationException $e) {
        return response()->json(['errors' => $e->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
    }

    }

    public function changePassword($id)
    {
        $user = User::findOrFail($id);
        return view('adminusers.changePassword',compact('user'));
    }

    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::findOrFail($id);
        $user->password = md5(trim($request->password));
        $user->save();

        return response()->json([
            'message' => 'Password updated successfully.'
        ]);
    }

    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            return response()->json(['message' => 'Item deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
        
    }
    
    public function updateStatus($id)
    {
        $user = User::findOrFail($id);
        $user->status = ($user->status == '1') ? '0' : '1';
        $user->save();
    
        return response()->json(['status' => $user->status,'message' => 'Item changed successfully']);
    }


    public function autosuggestion(Request $request)
    {
        try {
            $query = User::query();
            if ($request->filled('txt')) {
                $txt = $request->input('txt');
                $query->where('first_name', 'LIKE', $txt . '%')
                        ->orWhere('last_name', 'LIKE', $txt . '%');
            }
            $query->select('id', 'first_name', 'last_name');
            $results = $query->get();
            if ($results->isEmpty()) {
                return response()->json(['success' => 'No results found.'], 200);
            }
            return response()->json(['success' => 'Data Found','items'=>$results]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong. Please try again later.'], 500);
        }
    }
 
}
