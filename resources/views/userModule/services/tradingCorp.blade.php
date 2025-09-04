@extends('layouts.guest')
@section('title', 'M.A.F Trading Corporation')
@section('content')

@include('partials.breadcrumb')


        <!-- start service-singel-section -->
        <section class="service-singel-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-8 col-md-push-4">
                        <div class="service-single-content">
                            <div>
                                <img src="{{ asset('media/frontend/images/service-single-info.jpg') }}" alt>
                            </div>
                            <div class="title">
                                <h3>Automative parts &amp; system</h3>
                                <div class="download">
                                    <a href="#"><i class="fa fa-file-word-o"></i> Download Doc</a>
                                    <a href="#"><i class="fa fa-file-pdf-o"></i> Download PDF</a>
                                </div>
                            </div>
                            <div class="details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!</p>
                                <ul>
                                    <li><i class="fa fa-plus"></i> Mollis Pharetra Euismod Tellus Fermentum</li>
                                    <li><i class="fa fa-plus"></i> Vulputate sem Pellentesque Adipiscing</li>
                                    <li><i class="fa fa-plus"></i> Cursus sit Tortor Ligula Nullam</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!</p>
                                <h4>Sem Aenean Pharetra</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iste accusamus voluptates, aliquid blanditiis ut. Provident vitae ullam quibusdam quae libero dolores, ratione vel cupiditate sunt amet? Sit, incidunt, laboriosam!</p>
                                <a href="#" class="theme-btn">Contact us</a>
                            </div>
                        </div> <!-- end service content -->
                    </div> <!-- end col -->
                    
                    <div class="col col-md-4 col-md-pull-8">
                        <div class="service-single-sidebar">
                            <div class="services-link-widget widget">
                                <ul>
                                    <li class="current"><a href="#">Power and energy</a></li>
                                    <li><a href="#">Oil and lubricant</a></li>
                                    <li><a href="#">Meterial engineering</a></li>
                                    <li><a href="#">Mechanical engineering</a></li>
                                    <li><a href="#">Chemical research</a></li>
                                    <li><a href="#">Alternate energy</a></li>
                                    <li><a href="#">Agricultural processing</a></li>
                                </ul>
                            </div>
                            <div class="download-brocher-widget widget">
                                <a href="#"><i class="fa fa-file-pdf-o"></i> Download brochure</a>
                            </div>
                            <div class="widget contact-widget">
                                <h3>Contact us for help?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste assumenda unde, ut.Iste assumenda unde, ut.</p>
                            </div>
                        </div>
                    </div>
                </div> <!-- end row -->
            </div> <!-- end container -->
        </section>
        <!-- end service-single-section -->

@endsection