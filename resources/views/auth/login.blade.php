{{-- resources/views/auth/login.blade.php --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Login') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts & Styles -->
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="{{ asset('media/assets/fontawesome-free/css/all.min.css') }}">
    <link href="{{ asset('media/assets/icheck-bootstrap/icheck-bootstrap.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('media/assets/css/adminlte.min.css') }}">
</head>

<body class="hold-transition login-page">
<div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="{{ route('home') }}" class="h1"><b>M.F.A </b> Login </a>
    </div>
    <div class="card-body">
      
      {{-- Flash Messages --}}
      @if(session('error'))
          <div id="errorMessage" class="alert alert-danger">{{ session('error') }}</div>
          <script>
              setTimeout(() => document.getElementById('errorMessage').style.display = 'none', 10000);
          </script>
      @endif

      @if(session('success'))
          <div id="successMessage" class="alert alert-success">{{ session('success') }}</div>
          <script>
              setTimeout(() => document.getElementById('successMessage').style.display = 'none', 10000);
          </script>
      @endif

      <p class="login-box-msg">Sign in to start your session</p>

      {{-- Laravel Breeze default login route --}}
      <form method="POST" action="{{ route('login') }}">
          @csrf

          <div class="input-group mb-3">
              <input type="email" placeholder="Email"
                     class="form-control @error('email') is-invalid @enderror"
                     name="email" value="{{ old('email') }}" required autofocus>
              <div class="input-group-append">
                  <div class="input-group-text"><span class="fas fa-user"></span></div>
              </div>
              @error('email')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
              @enderror
          </div>

          <div class="input-group mb-3">
              <input type="password" placeholder="Password"
                     class="form-control @error('password') is-invalid @enderror"
                     name="password" required>
              <div class="input-group-append">
                  <div class="input-group-text"><span class="fas fa-lock"></span></div>
              </div>
              @error('password')
                  <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
              @enderror
          </div>

          <div class="form-group mb-3">
              <div class="icheck-primary">
                  <input type="checkbox" id="remember" name="remember">
                  <label for="remember">Remember Me</label>
              </div>
          </div>

          <div class="row">
              <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
          </div>
      </form>

      <p class="mb-1 mt-3">
          @if (Route::has('password.request'))
              <a href="{{ route('password.request') }}">Forgot your password?</a>
          @endif
      </p>
    </div>
  </div>
</div>

<!-- JS -->
<script src="{{ asset('media/assets/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('media/assets/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('media/assets/js/adminlte.min.js') }}"></script>

</body>
</html>
