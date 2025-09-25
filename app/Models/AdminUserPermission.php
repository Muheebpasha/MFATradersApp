<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminUserPermission extends Model
{
    use HasFactory;

    protected $table = 'admin_user_permissions';

    protected $fillable = [
        'admin_user_id',
        'admin_email',
        'module_list',
    ];
}
