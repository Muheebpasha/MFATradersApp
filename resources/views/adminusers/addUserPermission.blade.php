@extends('layouts.app')
@section('title', 'Add User Permission')
@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Add Admin User Permission</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ custom_route('/home') }}">Home</a></li>
                        <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers') }}">Admin User</a></li>
                        <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers/module-permission') }}">Module
                                Permission</a></li>
                        <li class="breadcrumb-item active">Add Admin User Permission</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div id="json-container"></div>
            <div class="row">
                <div class="col-12">
                    <form id="saveForm">
                        @csrf
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add Admin User Permission</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <!-- Email Select -->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="admin_email">Email Id:</label>
                                            <input type="hidden" name="admin_user_id" id="admin_user_id">
                                            <select class="form-control select2" name="admin_email" id="admin_email"
                                                style="width: 100%;">
                                                <option selected disabled>--Email ID--</option>
                                                @foreach($users as $user)
                                                <option value="{{ $user->email_id }}" data-id="{{ $user->id }}">{{
                                                    $user->email_id }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Module Checkboxes -->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="module_list">Module List:</label>
                                            <div class="d-flex flex-wrap">
                                                @foreach($adminModules as $module)
                                                <div class="form-check mr-3 mb-2">
                                                    <input class="form-check-input" type="checkbox" name="module_list[]"
                                                        value="{{ $module->module_name }}" id="mod_{{ $module->slug }}">
                                                    <label class="form-check-label" for="mod_{{ $module->slug }}">
                                                        {{ $module->module_name }}
                                                    </label>
                                                </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary float-right">Submit</button>
                            </div>
                        </div>
                    </form>

                </div>
    </section>
</div>
<script>
    $('#admin_email').select2({
        placeholder: 'Email ID'
    });
    $('#admin_email').on('change', function () {
        var selectedId = $('#admin_email option:selected').data('id');
        $('#admin_user_id').val(selectedId);
    });
    $('#saveForm').submit(function (e) {
        e.preventDefault(); 
        var formData = $(this).serialize();
        var csrfToken = $('meta[name="csrf-token"]').attr('content');
        
        $.ajax({
            url: "{{ custom_route('/adminusers/store-user-permission') }}",
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                },   
                data: formData,
                success: function(response) {
                    $('#json-container').append('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>');
                    setTimeout(function() {
                        window.location.href = "{{ custom_route('/adminusers/module-permission') }}";
                    }, 3000);
            },
            error: function(xhr) {
                if (xhr.status === 422) {
                    var errors = xhr.responseJSON.errors;
                    for (var key in errors) {
                        if (errors.hasOwnProperty(key)) {
                            $('#json-container').append('<div class="card text-white bg-danger p-3 mb-3">' + errors[key][0] + '</div>');
                            }
                        }
                    } else {
                        $('#json-container').append('<div class="card text-white bg-danger p-3 mb-3">Something Went Wrong!</div>');
                    }
                }
            });
    });    
</script>
@endsection