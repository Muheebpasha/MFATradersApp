@extends('layouts.guest')
@section('title', 'Catering and Hospitality')
@section('content')
 @include('partials.breadcrumb')
        <!-- start blog-with-sidebar -->
        <section class="blog-with-sidebar section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-8 col-md-8">
                        <div class="news-grids">
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-1.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">China's industrial profits grow faster in first eight months</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-2.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">Exploring the wild side in an industrial jungle bengle</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-3.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">Bus drivers in Liverpool vote for industrial action</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-3.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">Bus drivers in Liverpool vote for industrial action</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-2.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">Exploring the wild side in an industrial jungle bengle</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="entry-media">
                                    <img src="{{ asset('media/frontend/images/blog/img-1.jpg') }}" alt>
                                </div>
                                <div class="entry-details">
                                    <div class="entry-meta">
                                        <ul>
                                            <li><i class="fa fa-clock-o"></i>Nov 25</li>
                                            <li><i class="fa fa-comments"></i><a href="#">2 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div class="entry-body">
                                        <h3><a href="#">China's industrial profits grow faster in first eight months</a></h3>
                                        <p>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end news-grids -->

                        <div class="pagination-wrapper">
                            <ul class="pg-pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <i class="fa fa-angle-double-left"></i>
                                    </a>
                                </li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <i class="fa fa-angle-double-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> <!-- end blog-content -->

                    <div class="blog-sidebar col col-lg-3 col-lg-offset-1 col-md-4 col-sm-5">
                        <div class="widget search-widget">
                            <form class="form">
                                <input type="text" class="form-control" placeholder="Search here..">
                            </form>
                        </div>
                        <div class="widget category-widget">
                            <h3>Category</h3>
                            <ul>
                                <li><a href="#">Architect <span class="badge">12</span></a></li>
                                <li><a href="#">Bulding <span class="badge">20</span></a></li>
                                <li><a href="#">Travel <span class="badge">8</span></a></li>
                                <li><a href="#">Renovation <span class="badge">45</span></a></li>
                                <li><a href="#">Repair <span class="badge">33</span></a></li>
                                <li><a href="#">Painting <span class="badge">12</span></a></li>
                            </ul>
                        </div>
                        <div class="widget recent-post-widget">
                            <h3>Recent post</h3>
                            <ul>
                                <li>
                                    <div class="post-pic">
                                        <img src="{{ asset('media/frontend/images/blog/thumb/img-1.jpg') }}" alt>
                                    </div>
                                    <div class="details">
                                        <h4><a href="#">Micenas placerat nibh loreming fentum</a></h4>
                                        <span>Sep 25, 2016</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-pic">
                                        <img src="{{ asset('media/frontend/images/blog/thumb/img-2.jpg') }}" alt>
                                    </div>
                                    <div class="details">
                                        <h4><a href="#">Integer suscipit sit amet</a></h4>
                                        <span>Sep 25, 2016</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-pic">
                                        <img src="{{ asset('media/frontend/images/blog/thumb/img-3.jpg') }}" alt>
                                    </div>
                                    <div class="details">
                                        <h4><a href="#">Praeent vehicula neget tempus</a></h4>
                                        <span>Sep 25, 2016</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="widget archive-widget">
                            <h3>Archive</h3>
                            <ul>
                                <li><a href="#">September 2015 <span class="badge">12</span></a></li>
                                <li><a href="#">August 2015 <span class="badge">20</span></a></li>
                                <li><a href="#">July 2015 <span class="badge">8</span></a></li>
                                <li><a href="#">October 2014 <span class="badge">45</span></a></li>
                                <li><a href="#">January 2014 <span class="badge">33</span></a></li>
                                <li><a href="#">December 2013 <span class="badge">12</span></a></li>
                            </ul>
                        </div>
                        <div class="widget tag-widget">
                            <h3>Tags</h3>
                            <div class="all-tags">
                                <a href="#" class="btn">Team</a>
                                <a href="#" class="btn">Charity</a>
                                <a href="#" class="btn">Volunteer</a>
                                <a href="#" class="btn">Web</a>
                                <a href="#" class="btn">Human</a>
                                <a href="#" class="btn">Education</a>
                                <a href="#" class="btn">UI</a>
                                <a href="#" class="btn">Speech</a>
                                <a href="#" class="btn">News</a>
                                <a href="#" class="btn">2016</a>
                                <a href="#" class="btn">Welfare</a>
                                <a href="#" class="btn">Design</a>
                                <a href="#" class="btn">Event</a>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end blog-with-section -->               
@endsection