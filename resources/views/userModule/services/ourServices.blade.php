@extends('layouts.guest')
@section('title', 'Our Services')
@section('content')

 @include('partials.breadcrumb')


        <!-- start of services -->
        <section class="section-padding services-grid-section">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="services-grids services-grid-view">
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-1.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Mechanical Works</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-2.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Power &amp; Energy</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-3.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Petroleum Refinery</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-4.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Material Engineering</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-5.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Alternative Energy</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                            <div class="grid">
                               <div class="inner mk-bg-img">
                                    <div class="details ">
                                       <div class="info">
                                            <img src="{{ asset('media/frontend/images/services/img-6.jpg') }}" alt class="bg-image">
                                            <a href="service-single.html">
                                                <h3><i class="fi flaticon-construction"></i> Agricultural Process</h3>
                                            </a>
                                            <p>Ut enim ad minim veniam, quis nos trud exerci tation ullamco.</p>
                                            <a href="service-single.html" class="more">Get Details</a>
                                       </div>
                                    </div>
                               </div>
                            </div>
                        </div> <!-- end services-grids -->
                    </div> <!-- end col -->
                </div> <!-- end row -->

                <div class="all-services">
                    <a href="#" class="theme-btn">Load More</a>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end of services -->

@endsection