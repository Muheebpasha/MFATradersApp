@extends('layouts.app')
@section('content')
<div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Admin Users Lists</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{ url('/home') }}">Home</a></li>
              <li class="breadcrumb-item active">Admin Users Lists</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <form id="search_frm" method="GET">
              <div class="card card-default">
                  <div class="card-header">
                      <h3 class="card-title">Search User</h3>
                      <div class="card-tools">
                          <button type="button" id="toggleButton" class="btn btn-tool">
                              <i class="fas fa-plus"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-body hidden" id="content">
                      <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <label for="search_name">Search :</label>
                                  <div class="input-group input-group">
                                      <input type="text" class="form-control" name="search_name" id="search_name" maxlength="100" placeholder="Entity Search" onkeyup="getSearchResult(this.value)" autoComplete="off">
                                      <span class="input-group-append">
                                          <button type="submit" class="btn btn-info btn-flat">Go!</button>
                                      </span>
                                  </div>
                                <div id="div_suggestions" style="display:none;"></div>
                              </div>
                              <p class="text-danger" id="search_frm_msg"></p>
                          </div>
                      </div>
                  </div>
              </div>
      </form>
      <div id="json-container"></div>
        <div class="row">
          @if(session('error'))
          <div class="alert alert-danger">
              {{ session('error') }}
          </div>
          @endif
          
        <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Admin Users Lists</h3>
                <a href="{{ url('/adminusers/create') }}" class="float-right btn btn-primary">Add Admin User</a>
              </div>
              <div class="card-body p-0">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Email</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Telephone</th>
                      <th>Date of Birth</th>
                      <th>Company</th>
                      <th>Nationality</th>
                      <th style="width: 210px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  @foreach ($users as $key => $user)
                    <tr>
                      <td>{{ $key + 1 }}.</td>
                      <td>{{ $user->email_id }}</td>
                      <td>{{ $user->first_name }}</td>
                      <td>{{ $user->last_name }}</td>
                      <td>{{ $user->telephone }}</td>
                      <td>{{ $user->dob }}</td>
                      <td>{{ $user->company }}</td>
                      <td>{{ $user->nationality }}</td>
                      <td>
                      <a href="{{ url('/adminusers/change-password/') }}{{ $user->id }}" class="btn btn-warning btn-sm"> <i
                              class="fa fa-key"></i></a> 
                      <a href="javascript:void(0);" class="btn btn-sm {{ $user->status == '1' ? 'btn-success' : 'btn-danger' }} status-toggle" data-user-id="{{ $user->id }}">
                          <i class="fas fa-dot-circle"></i>
                      </a>
                      <a href="{{ url('/adminusers/edit/') }}{{ $user->id }}" class="btn btn-primary btn-sm"> <i
                              class="far fa-edit"></i></a> 
                      <a href="javascript:void(0);" class="btn btn-danger btn-sm  delete-user" data-user-id="{{ $user->id }}"> <i
                            class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
               <div class="card-footer clearfix">
                  {{ $users->links()}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
    <a href="{{ url('/adminusers/create') }}" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
    <i class="fa fa-plus my-float"></i>
  </a>
  </div>
    
    <script src="{{ url('js/toggleContent.js') }}"></script>

  <script>
  $(document).ready(function() {
      var csrfToken = $('meta[name="csrf-token"]').attr('content');
      $('.status-toggle').click(function() {
          var userId = $(this).data('user-id');
          var url = "{{ url('/adminusers/updateStatus') }}/" + userId;
          
          $.ajax({
              type: 'PUT',
              url: url,
                headers: {
                  'X-CSRF-TOKEN': csrfToken
              },
              success: function(response) {
                  console.log(response);
                  $('#json-container').append('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>');
                  setTimeout(function() {
                      location.reload();
                  }, 3000);
              },
              error: function(xhr) {
                  console.error(xhr.responseJSON.error);
              }
          });
      });
      $('.delete-user').click(function() {
          var userId = $(this).data('user-id');
          if (confirm('Are you sure you want to delete this item?')) {
              deleteUser(userId);
          }
      });
      

    function deleteUser(userId) {
        $.ajax({
            type: 'DELETE',
            url: "{{ url('/adminusers', ['id' => '']) }}/" + userId,
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
            success: function(response) {
                // Handle success response
                console.log(response);
                
                $('#json-container').append('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>');
                // You can update the UI as needed, e.g., remove the deleted user from the list
                setTimeout(function() {
                    location.reload();
                }, 3000);
            },
            error: function(xhr) {
                // Handle errors
                console.error(xhr.responseJSON.error);
            }
        });
    }
});
$("#div_suggestions").on("click", ".autocomplete-item", function() {
    var value = $(this).text(); 
    $("#search_name").val(value);
    $('#div_suggestions').css('display', 'none').html(''); 
});

    // The search function
    function getSearchResult(txt) { 
        var route = "{{ url('/adminusers/autosuggest') }}?txt=" + encodeURIComponent(txt);
        $('#div_suggestions').css('display', 'block').html('loading...');
        
        $.ajax({
            url: route,
            type: 'GET',
            dataType: "json",
            success: function(response) {
              if (Array.isArray(response.items)) {
                    var suggestionsHtml = response.items.map(function(item) {
                        return '<p class="autocomplete-item" data-id="'+item.id+'" ' +
                              'data-first_name="' + item.first_name + '" ' +
                              'data-last_name="' + item.last_name + '" >' + 
                              item.first_name + ' '+ item.last_name + '</p>';
                    }).join('');  // Join the array into a single string

                    $('#div_suggestions').html(suggestionsHtml);
                } else {
                    // Handle the case where the response is not an array
                    $('#div_suggestions').html('No suggestions found.');
                }
            },
            error: function(xhr, status, error) {
                $('#div_suggestions').html('Something went wrong!');
                // Handle error
            }
        });
    }
  </script>
  @endsection
