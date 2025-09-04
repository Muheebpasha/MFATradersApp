@extends('layouts.app')
@section('title', 'Change Password')
@section('content')
<div class="content-wrapper">
<section class="content-header">
   <div class="container-fluid">
      <div class="row mb-2">
         <div class="col-sm-6">
            <h1>Change Password</h1>
         </div>
         <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
               <li class="breadcrumb-item"><a href="{{ custom_route('/home') }}">Home</a></li>
               <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers') }}">Admin User</a></li>
               <li class="breadcrumb-item active">Change Password</li>
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
             
                 <form id="ChangePasswordForm">
                     @csrf
                     <div class="card card-primary">
                         <div class="card-header">
                             <h3 class="card-title">Change Password</h3>
                         </div>
                         <div class="card-body">
                             <div class="row">
                                 <div class="col-md-6">
                                     <div class="form-group">
                                     <label for="email_id">Email Id:</label>
                                     <input type="email" class="form-control" id="email_id" name="email_id" value="{{ $user->email_id }}"
                                         placeholder="Email Id" readonly>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="password">New Password:</label>
                                        <input type="password" class="form-control" id="password" name="password" value=""
                                            placeholder="New Password" >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label for="password_confirmation">Confirm Password:</label>
                                        <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password">
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
   $('#ChangePasswordForm').submit(function (e) {
       e.preventDefault(); 
       var formData = $(this).serialize() + '&_method=PATCH'; // Add _method=PATCH
       var csrfToken = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            type: 'PATCH',
            url: '{{ custom_route('/adminusers/update-password/') }}{{$user->id}}',
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