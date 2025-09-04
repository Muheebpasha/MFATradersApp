<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use App\Models\Menu;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // ✅ Skip DB logic when running artisan commands
        if ($this->app->runningInConsole()) {
            return;
        }

        view()->composer('*', function ($view) {
            $menus = Menu::whereNull('parent_id')
                ->orderBy('module_name','ASC')
                ->get();

            $view->with('menus', $menus);
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
}
