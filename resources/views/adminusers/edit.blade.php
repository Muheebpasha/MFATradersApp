@extends('layouts.app')
@section('title', 'Edit Admin User')
@section('content')
<div class="content-wrapper">
<section class="content-header">
   <div class="container-fluid">
      <div class="row mb-2">
         <div class="col-sm-6">
            <h1>Edit Admin User</h1>
         </div>
         <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
               <li class="breadcrumb-item"><a href="{{ custom_route('/home') }}">Home</a></li>
               <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers') }}">Admin User</a></li>
               <li class="breadcrumb-item active">Edit Admin User</li>
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
             <div class="card card-primary">
             
                 <form id="updateUserForm">
                     @csrf
                     <div class="card card-primary">
                         <div class="card-header">
                             <h3 class="card-title">Edit Admin User</h3>
                         </div>
                         <div class="card-body">
                             <div class="row">
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="first_name">First Name</label>
                                     <input type="text" class="form-control" maxlength="100" name="first_name"
                                         id="first_name" placeholder="First Name" value="{{$user->first_name}}">
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="last_name">Last Name</label>
                                     <input type="text" class="form-control" maxlength="100" name="last_name"
                                         id="last_name" placeholder="Last Name" value="{{ $user->last_name }}">
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="email_id">Email Id:</label>
                                     <input type="email" class="form-control" id="email_id" name="email_id" value="{{ $user->email_id }}"
                                         placeholder="Email Id" >
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="telephone">Telephone:</label>
                                     <input type="tel" class="form-control" id="telephone" name="telephone" value="{{ $user->telephone }}" placeholder="Telephone">
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="dob">Date of Birth:</label>
                                     <input type="date" class="form-control" id="dob" name="dob" value="{{ $user->dob }}" placeholder="Date of Birth">
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="company">Company:</label>
                                     <input type="text" class="form-control" id="company" value="{{ $user->company }}" name="company" placeholder="Company">
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="nationality">Nationality:</label>
                                     <input type="text" class="form-control" id="nationality" name="nationality" value="{{ $user->nationality }}" placeholder="Nationality">
                                     </div>
                                 </div>
                               
                                 <div class="col-sm-6">
                                     <label for="Status">Status </label>
                                     <div class="form-group clearfix">
                                     <div class="icheck-primary d-inline">
                                         <input type="radio" id="Active" name="status" value="1" {{ $user->status == 1 ? 'checked' : '' }}>
                                         <label for="Active"> Active
                                         </label>
                                     </div>
                                     <div class="icheck-primary d-inline">
                                         <input type="radio" id="InActive" name="status" value="0" {{ $user->status == 0 ? 'checked' : '' }}>
                                         <label for="InActive"> InActive
                                         </label>
                                     </div>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="admin">User Role:</label>
                                     <select class="form-control select2" name="admin" id="admin"
                                         style="width: 100%;">
                                         <option disabled>--Select User Role--</option>
                                         <option value="0" {{ $user->admin == 0 ? 'selected' : '' }}>Normal User</option>
                                         <option value="1" {{ $user->admin == 1 ? 'selected' : '' }}>Admin User</option>
                                     </select>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="type">Type:</label>
                                     <select class="form-control select2" name="type" id="type" style="width: 100%;">
                                         <option  disabled>--Type--</option>
                                         <option value="1" {{ $user->admin == 1 ? 'selected' : '' }}>Writer</option>
                                         <option value="2" {{ $user->admin == 2 ? 'selected' : '' }}>Translator</option>
                                     </select>
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
         </div>
     </div>
 </div>
</section>   
</div>
<script>
   $('#updateUserForm').submit(function (e) {
       e.preventDefault(); 
       var formData = $(this).serialize() + '&_method=PUT'; // Add _method=PUT
       var csrfToken = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            type: 'PUT',
            url: '{{ custom_route('/adminusers/update/') }}{{$user->id}}',
            data: formData,
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
            success: function(response) {
                  console.log(response);
                  $('#json-container').append('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>');
                  setTimeout(function() {
                     window.location.href = '{{ route('adminusers.index') }}'; // Replace with your actual route
                  }, 3000);
            },
            error: function(xhr) {
                  if (xhr.status === 422) {
                     var errors = xhr.responseJSON.errors;
                     for (var key in errors) {
                        if (errors.hasOwnProperty(key)) {
                           // alert(errors[key][0]); // Display the first error for each field
                              $('#json-container').append('<div class="card text-white bg-danger p-3 mb-3">' + errors[key][0] + '</div>');
                        }
                     }
                  } else {
                     console.error(xhr.responseJSON.error);
                  }
            }
         });
   });    
</script>
@endsection