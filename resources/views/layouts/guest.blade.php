
<!DOCTYPE html>
<html lang="en">

<!-- index-4 19:58:23 GMT -->
<head>
    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="themexriver">

    <!-- Page Title -->
    <title>@yield('title', config('app.name', 'MFA'))</title>

    <!-- Favicon and Touch Icons -->
    <link href="{{ asset('media/frontend/images/favicon/favicon.png') }}" rel="shortcut icon" type="image/png">
    <link href="{{ asset('media/frontend/images/favicon/apple-touch-icon-57x57.png') }}" rel="apple-touch-icon" sizes="57x57">
    <link href="{{ asset('media/frontend/images/favicon/apple-touch-icon-72x72.png') }}" rel="apple-touch-icon" sizes="72x72">
    <link href="{{ asset('media/frontend/images/favicon/apple-touch-icon-114x114.png') }}" rel="apple-touch-icon" sizes="114x114">
    <link href="{{ asset('media/frontend/images/favicon/apple-touch-icon-144x144.png') }}" rel="apple-touch-icon" sizes="144x144">

    <!-- Icon fonts -->
    <link href="{{ asset('media/frontend/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/flaticon.css') }}" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('media/frontend/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Plugins for this template -->
    <link href="{{ asset('media/frontend/css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/owl.carousel.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/owl.theme.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/slick-theme.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/owl.transitions.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/jquery.fancybox.css') }}" rel="stylesheet">
    <link href="{{ asset('media/frontend/css/jquery.mCustomScrollbar.min.css') }}" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{ asset('media/frontend/css/style.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js') }}"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js') }}"></script>
    <![endif]-->

</head>

<body>

    <!-- start page-wrapper -->
    <div class="page-wrapper">

        <!-- start preloader -->
        <div class="preloader">
            <div class="preloader-inner">
                <img src="{{ asset('media/frontend/images/preloader.png') }}" alt>
            </div>
        </div>
        <!-- end preloader -->

        
        <!-- Start header -->
        <header id="header" class="site-header header-style-2">
            <div class="topbar topbar-style-2">
                <div class="container">
                    <div class="row">
                        <div class="col col-sm-8">
                            <div class="topbar-contact-info-wrapper">
                                <div class="topbar-contact-info">
                                    <div>
                                        <i class="fa fa-location-arrow"></i>
                                        <div class="details">
                                            <p>5523 Research Park Drive, Suite 110</p>
                                            <span>Baltimore, MD 21228</span>
                                        </div>
                                    </div>
                                    <div>
                                        <i class="fa fa-phone"></i>
                                        <div class="details">
                                            <p>+012 (3546) 547</p>
                                            <span>contact@industrialinfo.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-4">
                            <div class="get-quote">
                                <a href="#" class="theme-btn">Request Quote</a>
                            </div>
                        </div>
                    </div>
                </div> <!-- end container -->
            </div> <!-- end topbar -->

            <nav class="navigation navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="site-logo">
                            <a href="{{ url('/') }}"><img src="{{ asset('media/frontend/images/logo-2.png') }}" alt></a>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse navbar-right navigation-holder">
                        <button class="close-navbar"><i class="fa fa-close"></i></button>
                        <ul class="nav navbar-nav">
                            <li class="menu-item-has-children">
                                <a href="{{ url('/') }}">Home</a></li>
                            <li><a href="{{ url('/about-us') }}">About</a></li>
                            <li class="menu-item-has-children">
                                <a href="{{ url('/our-services') }}">Services</a>
                                <ul class="sub-menu">
                                    <li><a href="{{ url('/trading-corporation') }}">M.A.F Trading corporation</a></li>
                                    <li><a href="{{ url('/garments') }}">M.A.F Garments </a></li>
                                    <li><a href="{{ url('/catering-and-hospitality') }}">M.A.F Catering & Hospitality</a></li>
                                </ul>
                            </li>
                            <li><a href="{{ url('contact-us') }}">Contact</a></li>
                        </ul>
                    </div><!-- end of nav-collapse -->

                    
                </div><!-- end of container -->
            </nav> <!-- end navigation -->
        </header>
        <!-- end of header -->

@yield('content')

        <!-- start site-footer -->
        <footer class="site-footer">
            <div class="upper-footer">
                <div class="container">
                    <div class="row">
                        <div class="col col-md-3 col-sm-6">
                            <div class="widget about-widget">
                                <div class="footer-logo"><img src="{{ asset('media/frontend/images/logo.png') }}" alt></div>
                                <ul class="contact-info">
                                    <li><i class="fa fa-home"></i> 555 Main St, Salt Lake City, UT 84101</li>
                                    <li><i class="fa fa-phone"></i> +1-(547)-257</li>
                                    <li><i class="fa fa-home"></i> Working Hours: <br>Mon-Fri (9 am - 8 pm)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-md-3 col-sm-6">
                            <div class="widget service-links-widget">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Agriculture Processing</a></li>
                                    <li><a href="#">Chemical Research</a></li>
                                    <li><a href="#">Metal Engineering</a></li>
                                    <li><a href="#">Mechanical Engineering</a></li>
                                    <li><a href="#">Petroleum &amp; Gas</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-md-3 col-sm-6">
                            <div class="widget quick-links-widget">
                                <h3>Navigation</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="{{ url('/our-services') }}">Service</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col col-md-3 col-sm-6">
                            <div class="widget twitter-feed-widget">
                                <h3>Twitter Feed</h3>
                                <ul>
                                    <li>
                                        <div class="text">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Ed quia con sequuntur magni dolores.</p>
                                        </div>
                                        <div class="info-box">
                                            <i class="fa fa-twitter"></i>
                                            <strong><a href="#">@Mark Wahlberg</a></strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="text">
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Ed quia con sequuntur magni dolores.</p>
                                        </div>
                                        <div class="info-box">
                                            <i class="fa fa-twitter"></i>
                                            <strong><a href="#">@Mark Wahlberg</a></strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end upper-footer -->
            <div class="copyright-info">
                <div class="container">
                    <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                </div>
            </div>
        </footer>
        <!-- end site-footer -->
    </div>
    <!-- end of page-wrapper -->



    <!-- All JavaScript files
    ================================================== -->
    <script src="{{ asset('media/frontend/js/jquery.min.js') }}"></script>
    <script src="{{ asset('media/frontend/js/bootstrap.min.js') }}"></script>

    <!-- Plugins for this template -->
    <script src="{{ asset('media/frontend/js/jquery-plugin-collection.js') }}"></script>
    <script src="{{ asset('media/frontend/js/jquery.mCustomScrollbar.js') }}"></script>

    <!-- Custom script for this template -->
    <script src="{{ asset('media/frontend/js/script.js') }}"></script>
</body>


</html>
