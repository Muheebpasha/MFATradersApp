<!-- resources/views/partials/breadcrumb.blade.php -->
<section class="page-title">
    <div class="container">
        <div class="row">
            <div class="col col-xs-12">
                <h2>{{ $pageTitle ?? 'Page Title' }}</h2>
                <ol class="breadcrumb">
                    @foreach($breadcrumbs ?? [] as $item)
                        <li>
                            <a href="{{ $item['link'] }}">{{ $item['text'] }}</a>
                        </li>
                    @endforeach
                </ol>
            </div>
        </div>
    </div>
</section>
