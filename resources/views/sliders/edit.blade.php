@extends('layouts.app')

@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>Edit Slider</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ url('/dashboard') }}">Home</a></li>
            <li class="breadcrumb-item active">Edit Slider</li>
        </ol>
    </section>
    <section class="content">
        <form action="{{ route('sliders.update', $slider->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="caption">Caption</label>
                <textarea name="caption" id="caption" class="form-control" required>{!! $slider->caption !!}</textarea>
            </div>
            <div class="form-group">
                <label for="image_path">Image</label>
                <input type="file" name="image_path" id="image_path" class="form-control">
                <p>Current: <img src="{{ asset($slider->image_path) }}" alt="Slider Image" width="100"></p>
            </div>
            <button type="submit" class="btn btn-primary">Update Slider</button>
        </form>
    </section>
</div>
<script>
    document.getElementById('image_path').addEventListener('change', function(event){
        const [file] = this.files;
        if(file){
            const preview = document.getElementById('preview-image');
            preview.src = URL.createObjectURL(file);
            preview.style.display = 'block';
        }
    });
</script>
@endsection
