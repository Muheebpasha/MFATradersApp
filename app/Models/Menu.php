<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = ['label', 'route', 'icon', 'parent_id', 'order', 'active'];

    public function submenus()
    {
        return $this->hasMany(Menu::class, 'parent_id')->orderBy('order');
    }
}
