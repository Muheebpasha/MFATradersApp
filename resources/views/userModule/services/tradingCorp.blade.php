@extends('layouts.guest')
@section('title', 'M.A.F Trading Corporation')
@section('content')

@include('partials.breadcrumb')

<style>
/* Keep the sidebar vertical tab style clean */
.nav-tabs.nav-stacked > li > a {
    border-radius: 10;
    border: none;
    padding: 14px 20px;
    background: #f8f8f8;
    margin-bottom: 8px;
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
}

.nav-tabs.nav-stacked > li.active > a,
.nav-tabs.nav-stacked > li > a:hover {
    background-color: #fdc900;
    color: #fff;
}
</style>

<section class="service-singel-section section-padding">
    <div class="container">
        <div class="row">
            
            <!-- Sidebar (Vertical Nav Tabs) -->
            <div class="col-md-4 service-single-sidebar">
                <ul class="services-link-widget widget nav nav-tabs nav-stacked" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#garments" aria-controls="garments" role="tab" data-toggle="tab">
                            Garments Accessories and Trims Supply
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#surplus" aria-controls="surplus" role="tab" data-toggle="tab">
                            Surplus and Scrap Purchase
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#manpower" aria-controls="manpower" role="tab" data-toggle="tab">
                            Temporary Man Power Supply
                        </a>
                    </li>
                    <li role="presentation">
                        <a href="#legal" aria-controls="legal" role="tab" data-toggle="tab">
                            Legal Business Consultant
                        </a>
                    </li>
                </ul>
            </div>


            <!-- Main Tab Content -->
            <div class="col-md-8">
                <div class="tab-content">

                    <!-- Garments Accessories Tab -->
                    <div role="tabpanel" class="tab-pane fade in active" id="garments">
                         @include('userModule.services.includes.garments')
                    </div>

                    <!-- Surplus and Scrap Tab -->
                    <div role="tabpanel" class="tab-pane fade" id="surplus">
                        @include('userModule.services.includes.surplus')
                    </div>

                    <!-- Manpower Tab -->
                    <div role="tabpanel" class="tab-pane fade" id="manpower">
                        @include('userModule.services.includes.manpower')
                    </div>

                    <!-- Legal Consultant Tab -->
                    <div role="tabpanel" class="tab-pane fade" id="legal">
                        @include('userModule.services.includes.legal')
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>

@endsection
