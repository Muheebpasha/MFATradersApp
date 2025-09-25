<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Menu;
use App\Models\AdminUserPermission;

class MenuServiceProvider extends ServiceProvider
{
    public function boot()
    {
        View::composer('*', function ($view) {
            $menuItems = [];

            if (Auth::check()) {
                $adminUserId  = Auth::user()->id;     
                $adminEmailId = Auth::user()->email;  

                // Get user permissions
                $userPermissions = AdminUserPermission::where(function ($query) use ($adminUserId, $adminEmailId) {
                    $query->where('admin_user_id', $adminUserId)
                          ->orWhere('admin_email', $adminEmailId);
                })->first();

                if ($userPermissions) {
                    $allowedModules = array_map('trim', explode(',', $userPermissions->module_list));

                    // Fetch only parent menus that are allowed
                    $parentModules = Menu::where('is_parent', 1)
                        ->whereIn('module_name', $allowedModules)
                        ->orderByRaw("CASE WHEN module_name = 'Dashboard' THEN 0 ELSE 1 END")
                        ->orderBy('module_name', 'ASC')
                        ->get();

                    foreach ($parentModules as $parent) {
                        $menuItem = [
                            'label'    => $parent->module_name,
                            'route'    => url($parent->url_string),
                            'icon'     => $parent->icon,
                            'active'   => Route::is($parent->route_name), 
                            'submenus' => []
                        ];

                        // Fetch children that are also allowed
                        $children = Menu::where('parent_id', $parent->id)
                                        ->whereIn('module_name', $allowedModules)
                                        ->get();

                        foreach ($children as $child) {
                            $menuItem['submenus'][] = [
                                'label'  => $child->module_name,
                                'route'  => url($child->url_string),
                                'active' => Route::is($child->route_name),
                            ];
                        }

                        $menuItems[] = $menuItem;
                    }
                }
            }

            $view->with('menuItems', $menuItems);
        });
    }

    public function register()
    {
        //
    }
}
