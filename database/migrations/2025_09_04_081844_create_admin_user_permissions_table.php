<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admin_user_permissions', function (Blueprint $table) {
            $table->id(); // Primary key (int, auto increment)
            $table->unsignedBigInteger('admin_user_id')->index();
            $table->string('admin_email', 50);
            $table->text('module_list')->nullable();
            $table->timestamps(); // created_at, updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('admin_user_permissions');
    }
};
