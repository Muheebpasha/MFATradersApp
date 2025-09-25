@extends('layouts.app')
@section('title', 'Add Module')
@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Add Module</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ custom_route('/home') }}">Home</a></li>
                        <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers') }}">Admin User</a></li>
                        <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers/modules') }}">Module List</a></li>
                        <li class="breadcrumb-item active">Add Module</li>
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
                                <h3 class="card-title">Add Module</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="domain_name">Domain Name:</label>
                                            <select class="form-control select2" name="domain_name" id="domain_name" style="width: 100%;">
                                                <option selected disabled>Select Domain</option>
                                                @foreach($domains as $item)
                                                    <option value="{{ $item }}">{{ $item }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="module_name">Module Name:</label>
                                            <input type="text" class="form-control" name="module_name" id="module_name" placeholder="Module Name" >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="url_string">URL String:</label>
                                            <input type="text" class="form-control" name="url_string" id="url_string" placeholder="URL String" >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="route_name">Route Name:</label>
                                            <input type="text" class="form-control" name="route_name" id="route_name" placeholder="Route Name" >
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="is_parent">Is Parent </label>
                                        <div class="form-group clearfix">
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="yes" name="is_parent" value="1">
                                            <label for="yes"> Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="no" name="is_parent" value="0" checked>
                                            <label for="no"> No
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6" id="parentName">
                                        <div class="form-group">
                                            <label for="parent_id">Parent Module:</label>
                                            <select class="form-control select2" name="parent_id" id="parent_id" style="width: 100%;">
                                                <option selected disabled>Select Parent Module</option>
                                                @foreach($parentModules as $parent)
                                                    <option value="{{ $parent->id }}">{{ $parent->module_name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6" id="fontawesome">
                                        <div class="form-group">
                                            <label for="icon">Font Awesome Icon:</label>
                                            <input type="text" class="form-control" name="icon" id="icon" placeholder="Font Awesome Icon">
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="status">Show In Homepage </label>
                                        <div class="form-group clearfix">
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="Yes" name="status" value="1" checked>
                                            <label for="Yes"> Yes
                                            </label>
                                        </div>
                                        <div class="icheck-primary d-inline">
                                            <input type="radio" id="No" name="status" value="0">
                                            <label for="No"> No
                                            </label>
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
    $('#parent_id').select2({
        placeholder: 'Parent Module Name'
    });
    function toggleParentFields() {
        const isParent = $('input[name="is_parent"]:checked').val();
        if (isParent == '0') {
            $('#parentName').show();
            $('#fontawesome').hide();
        } else {
            $('#parentName').hide();
            $('#fontawesome').show();
        }
    }

    // Initial check on page load
    toggleParentFields();

    // Listen to change event
    $('input[name="is_parent"]').on('change', toggleParentFields);
    $('#saveForm').submit(function (e) {
        e.preventDefault(); 
        var formData = $(this).serialize();
        var csrfToken = $('meta[name="csrf-token"]').attr('content');
        
        $.ajax({
            url: "{{ custom_route('/adminusers/save-module') }}",
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                },   
                data: formData,
                success: function(response) {
                    $('#json-container').append('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>');
                    setTimeout(function() {
                        window.location.href = "{{ custom_route('/adminusers/modules') }}";
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