<?php

namespace App\Http\Controllers;

use App\Models\AdminUserPermission;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $features = [];

        if (Auth::check()) {
            $adminUserId = Auth::user()->id;       // logged in user ID
            $adminEmailId = Auth::user()->email;   // logged in user email

            $userPermissions = AdminUserPermission::where(function ($query) use ($adminUserId, $adminEmailId) {
                $query->where('admin_user_id', $adminUserId)
                      ->orWhere('admin_email', $adminEmailId);
            })->first(); // assuming one permission row per user

            if ($userPermissions) {
                $allowedModules = array_map('trim', explode(',', $userPermissions->module_list)); 

                $modules = Menu::where('active', 1)
                                               ->whereIn('module_name', $allowedModules)
                                               ->orderBy('module_name', 'ASC')
                                               ->get();

                foreach($modules as $item) {
                    $features[] = [
                        'route' => url($item->url_string),
                        'label' => $item->module_name,
                        'font-awesome' => $item->icon ?: 'fas fa-list',
                    ];
                }
            }
        }

        return view('adminModule.home', compact('features'));
    }
}
