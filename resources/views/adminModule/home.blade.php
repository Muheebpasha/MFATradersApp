@extends('layouts.app')
@section('title', 'Dashboard')
@section('content')
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{ url('/') }}">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
            @if(session('success'))
              <div id="successMessage" class="alert alert-success">
                  {{ session('success') }}
              </div>
              <script>
                setTimeout(function() {
                    document.getElementById('errorMessage').style.display = 'none';
                }, 2000);
            </script>
            @endif
            @if(session('error'))
              <div id="errorMessage" class="alert alert-danger">
                  {{ session('error') }}
              </div>
              <script>
                setTimeout(function() {
                    document.getElementById('errorMessage').style.display = 'none';
                }, 2000);
            </script>
            @endif
      <div class="row">
        @if (empty($features) || count($features) == 0)
            <div class="col-12">
                <div class="info-box">
                    <div class="info-box-content">
                        <span class="info-box-text">You don't have access</span>
                    </div>
                </div>
            </div>
        @else
                @foreach ($features as $feature)
                    <div class="col-md-3 col-sm-6 col-12">
                        <div class="info-box">
                            <span class="info-box-icon bg-primary">
                                <i class="{{ $feature['font-awesome'] }}"></i>
                            </span>
                            <div class="info-box-content">
                                <a href="{{ $feature['route'] }}">
                                    <span class="info-box-text">{{ $feature['label'] }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
        @endif
    </div>
    
    </section>

    <a id="back-to-top" href="#" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
    </a>
  </div>
@endsection