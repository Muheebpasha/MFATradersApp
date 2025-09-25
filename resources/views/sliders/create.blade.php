@extends('layouts.app')

@section('content')
<div class="content-wrapper">
    <section class="content-header">
        <h1>Create Slider</h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ url('/dashboard') }}">Home</a></li>
            <li class="breadcrumb-item"><a href="{{ route('sliders.index') }}">Slider Listing</a></li>
            <li class="breadcrumb-item active">Create Slider</li>
        </ol>
    </section>
    <section class="content">
        <div id="alert-container"></div>
        
        <form id="sliderForm" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="caption">Caption</label>
                <textarea name="caption" id="caption" class="form-control" required></textarea>
            </div>
            <div class="form-group">
                <label for="image_path">Image</label>
                <input type="file" name="image_path" id="image_path" class="form-control" accept="image/*" required>
                <br>
                <img id="preview-image" src="#" alt="Preview Image" style="display:none; max-height: 200px;"/>
            </div>
            <button type="submit" class="btn btn-primary">Save Slider</button>
        </form>
    </section>
</div>


<script>
    // Show image preview
    document.getElementById('image_path').addEventListener('change', function(event){
        const [file] = this.files;
        if(file){
            const preview = document.getElementById('preview-image');
            preview.src = URL.createObjectURL(file);
            preview.style.display = 'block';
        }
    });

    // Handle AJAX form submission
    $('#sliderForm').on('submit', function(e){
        e.preventDefault();

        let formData = new FormData(this);

        $.ajax({
            url: "{{ route('sliders.store') }}",
            type: "POST",
            data: formData,
            processData: false, // don't process files
            contentType: false, // let browser set Content-Type with boundary
            success: function(response) {
                $('#alert-container').html('<div class="alert alert-success">'+ response.message +'</div>');
                $('#sliderForm')[0].reset();
                $('#preview-image').hide();
            },
            error: function(xhr) {
                let errorMessage = xhr.responseJSON?.message || "Something went wrong!";
                $('#alert-container').html('<div class="alert alert-danger">'+ errorMessage +'</div>');
            }
        });
    });
</script>
@endsection
