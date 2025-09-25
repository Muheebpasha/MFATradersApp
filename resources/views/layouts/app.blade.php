<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', config('app.name', 'DBCommon Admin'))</title>
    
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <!-- CSS Assets -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="{{ asset('media/assets/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('media/assets/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('media/assets/css/adminlte.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/select2.css') }}">
    <link rel="stylesheet" href="{{ asset('css/select2-bootstrap.min.css') }}">

    <!-- JS Assets -->
    <script src="{{ asset('media/assets/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('js/select2.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.3/tinymce.min.js"></script>

    <style>
        label { display: block; margin-bottom: 0.5rem; }
        .select2-container .select2-selection--single { height: auto; }
        .select2-container { width: 100% !important; }
        #div_suggestions { position: absolute; z-index: 99; background: #fff; padding: 5px; border: 1px solid; cursor: pointer; max-height: 150px; overflow-y: auto; width: 90%; }
        .hidden { display: none; }
        #pagination-controls { margin: 10px 0; text-align: center; }
        #pagination-controls button { margin: 0 5px; }
        #current-page, #total-pages, #total-items { margin: 0 5px; }
        .error-message { color: red; font-size: 0.9rem; white-space: nowrap; }
            #div_suggestions {
                position: absolute; 
                z-index: 99; 
                background-color : #fff;
                padding :5px;
                border: 1px solid;
                cursor : pointer;
                max-height: 150px; 
                overflow-y: auto; 
                width: 90%;
            }
    </style>
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <a href="{{ route('home') }}" class="nav-link">Home</a>
            </li>
        </ul>

        <!-- Right Navbar -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" id="nav-dropdown-options">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <span class="badge badge-success"><i class="fas fa-user"></i> {{ Auth::user()->name }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" class="dropdown-item">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="dropdown-item-title">
                                    <span class="float-right text-sm text-muted"><i class="fas fa-user-tie"></i></span>
                                </h3>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="dropdown-item-title">
                                    <span class="float-right text-sm text-muted"><i class="fas fa-sign-out-alt"></i> Logout</span>
                                </h3>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button"><i class="fas fa-expand-arrows-alt"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i class="fas fa-th-large"></i></a>
            </li>
        </ul>

        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
    </nav>

    <!-- Sidebar -->
    @include('layouts.app-sidebar')

    <!-- Main Content -->
    
        @yield('content')
    

    <!-- Footer -->
    <footer class="main-footer">
        <strong>Copyright &copy; 2025 <a href="#">MFA Traders</a>.</strong> All rights reserved.
    </footer>

    <aside class="control-sidebar control-sidebar-dark"></aside>

</div> <!-- wrapper -->

<script src="{{ asset('media/assets/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('media/assets/js/adminlte.min.js') }}"></script>
<script src="{{ asset('media/assets/js/demo.js') }}"></script>

<script>
$(document).ready(function() {
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown-menu-right').length && !$(event.target).is('#nav-dropdown-options')) {
            $('.dropdown-menu-right').removeClass('show');
        }
    });
    $('#nav-dropdown-options').on('click', function(event) {
        event.stopPropagation();
        $('.dropdown-menu-right').toggleClass('show');
    });
});
</script>

@yield('scripts')
</body>
</html>
