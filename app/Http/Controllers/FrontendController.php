<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BreadcrumbService;

class FrontendController extends Controller
{
    protected $breadcrumb;

    public function __construct(BreadcrumbService $breadcrumb)
    {
        $this->breadcrumb = $breadcrumb;
    }

    public function index() {
        return view('userModule.home');
    }

    private function viewWithBreadcrumb(string $view, string $breadcrumbKey, string $pageTitle)
    {
        $breadcrumbs = $this->breadcrumb->prepareBreadcrumb($breadcrumbKey);
        return view($view, compact('breadcrumbs', 'pageTitle'));
    }

    public function aboutUs() {
        return $this->viewWithBreadcrumb('userModule.about', 'aboutUs', 'About Us');
    }

    public function contactUs() {
        return $this->viewWithBreadcrumb('userModule.contact', 'contactUs', 'Contact Us');
    }

    public function ourServices() {
        return $this->viewWithBreadcrumb('userModule.services.ourServices', 'ourServices', 'Our Services');
    }

    public function tradingCorp() {
        return $this->viewWithBreadcrumb('userModule.services.tradingCorp', 'tradingCorp', 'M.A.F Trading Corporation');
    }

    public function garments() {
        return $this->viewWithBreadcrumb('userModule.services.garments', 'garments', 'M.A.F Garments');
    }

    public function cateringAndHospitality() {
        return $this->viewWithBreadcrumb('userModule.services.cateringAndHospitality', 'cateringAndHospitality', 'Catering & Hospitality');
    }
}
