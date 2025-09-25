@extends('layouts.app')
@section('title', 'Admin Module List')
@section('content')
<div class="content-wrapper">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Admin Module Lists</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{ custom_route('/home') }}">Home</a></li>
            <li class="breadcrumb-item"><a href="{{ custom_route('/adminusers') }}">Admin Users Lists</a></li>
            <li class="breadcrumb-item active">Admin Module Lists</li>
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
                  <label for="search_name"> Search :</label>
                  <div class="input-group input-group">
                    <input type="email" class="form-control" name="search_name" id="search_name" maxlength="100"
                      placeholder="Entity Search" onkeyup="getSearchResult(this.value)" autoComplete="off">
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

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div id="json-container"></div>
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Admin Module Listing</h4>
                </div>
                <div class="card-body">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Module Name</th>
                        <th>Is Parent</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody id="modules-table">
                      <!-- Data will be populated via AJAX -->
                    </tbody>
                  </table>
                </div>
                <div class="card-footer clearfix">
                  <div id="pagination-controls">
                    <button id="prev-page" class="btn btn-primary">Previous</button>
                    <span id="current-page">Page 1</span> /
                    <span id="total-pages">Total Pages</span>
                    <button id="next-page" class="btn btn-primary">Next</button>
                    <span id="total-items">Total Items: 0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
  <!-- Popup Loading Indicator -->
  <div id="loadingPopup"
    style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000;">
    <div
      style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color:#000000">
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>
  </div>
  <!-- /.content -->
  <a href="{{ custom_route('/adminusers/add-module') }}" class="btn btn-primary back-to-top" role="button"
    aria-label="Scroll to top">
    <i class="fa fa-plus my-float"></i>
  </a>
</div>

<script src="{{ custom_route('js/toggleContent.js') }}"></script>

<script>
  var csrfToken = $('meta[name="csrf-token"]').attr('content');
      var currentPage = 1;
      const baseUrl = "{{ custom_route('/adminusers/') }}";
      
      $(document).ready(function() {
          fetchRecords(currentPage);  
          $('#prev-page').click(function() {
              if (currentPage > 1) {
                  fetchRecords(--currentPage);
              }
          });
  
          $('#next-page').click(function() {
              fetchRecords(++currentPage);
          });

          $('.delete-module').click(function() {
                var id = $(this).data('id');
                if (confirm('Are you sure you want to delete this item?')) {
                    deleteModule(id);
                }
          });
        });
        function deleteModule(id) {
            $.ajax({
                type: 'DELETE',
                url: "{{ custom_route('/adminusers/delete-module', ['id' => '']) }}/" + id,
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
      function fetchRecords(page) {
          var formData = $('form').serialize();
          // Add the page parameter to the serialized form data
          formData += '&page=' + page;
          let url = baseUrl+'module-list';
  
          $.ajax({
              url: url,
              type: 'GET',
              data: formData,
              dataType: 'json',
              beforeSend: function() {
                  $('#loadingPopup').css('display', 'flex');
              },
              success: function(response) {
                  populateData(response.items, response);
              },
              error: function(xhr, status, error) {
                  $('#json-container').addClass('bg-danger','p-3').text('Error fetching records. Please try again.');
              },
              complete: function() {
                  $('#loadingPopup').hide();
              }
          });
      }
  
      function populateData(records, response) {
          $('#modules-table').empty();
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // Ensure records is defined and is an array before checking length
          if (!Array.isArray(records) || records.length === 0) {
              $('#modules-table').append('<tr><td colspan="4" class="text-center">No records found</td></tr>');
              return;
          }
  
          $.each(records, function(index, item) {
              let editModule = baseUrl + 'edit-module/' + item.id;
              
              let row = '<tr id="module-' + item.id + '">' + // Set unique ID here 
                  '<td>' + (((response.currentPage - 1) * response.itemsPerPage) + index + 1) + '.</td>' +
                  '<td>' + item.module_name + '</td>' +
                  '<td>' + item.is_parent + '</td>' +
                  '<td class="text-center">' +
                      '<div class="d-inline-flex gap-2">'+
                        '<a href="'+ editModule +'" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></a> &nbsp;' +
                        '<a href="javascript:void(0)" class="btn btn-danger btn-sm delete-module" data-id="'+ item.id +'"><i class="fa fa-trash"></i></a> ' +
                      '</div>'+
                  '</td>' +
                  '</tr>';
              $('#modules-table').append(row);
          });
  
          $('#total-items').text(response.totalItems);
          $('#current-page').text(response.currentPage);
          $('#total-pages').text(response.totalPages);
  
          $('#prev-page').prop('disabled', response.currentPage === 1);
          $('#next-page').prop('disabled', response.currentPage === response.totalPages);
      }
      // JavaScript/jQuery code to handle delete action
    $(document).on('click', '.delete-module', function () {
        var id = $(this).data('id'); // Get the permission ID from the data-id attribute

        if (confirm('Are you sure you want to delete this user permission?')) {
            // Send DELETE request via AJAX
            $.ajax({
                url: "{{ custom_route('/adminusers/delete-module') }}/" + id,
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                success: function (response) {
                    // Show success message
                    
                    $('#json-container')
                                  .hide()
                                  .html('<div class="card text-white bg-success p-3 mb-3">' + response.message + '</div>')
                                  .fadeIn(500); // Fade in smoothly in 0.5 seconds

                      setTimeout(function () {
                          $('#json-container').fadeOut(500, function () {
                              $(this).empty(); // Clear after fade out completes
                          });
                      }, 3000); // Wait 3 seconds before fading out

                    // remove the row or item from the DOM
                    $('#module-' + id).remove();

                },
                error: function (xhr) {
                    // Show error message
                    $('#json-container').append('<div class="card text-white bg-danger p-3 mb-3">Failed to delete user permission.</div>');
                }
            });
        }
    });

      function getSearchResult(txt) {
          if(txt.length == 0) {
              fetchRecords(1);
          }
          // Check if the input text has more than 2 letters
          if (txt.length <= 2) {
            $('#div_suggestions').css('display', 'none').html(''); // Hide suggestions if text is too short
            return; // Exit the function
          }
          fetchRecords(1)
      }
</script>
@endsection