@extends('layouts.app')

@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>Slider Details</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ url('/dashboard') }}">Home</a></li>
            <li class="breadcrumb-item active">Slider Details</li>
        </ol>
    </section>
    <section class="content">
        <div class="card">
            <div class="card-header">
                <h3>{{ $slider->caption }}</h3>
            </div>
            <div class="card-body">
                <img src="{{ asset($slider->image_path) }}" alt="Slider Image" class="img-fluid">
            </div>
        </div>
    </section>
</div>
@endsection
