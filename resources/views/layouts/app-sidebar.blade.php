<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <a href="#" class="brand-link">
    <img src="{{ asset('media/assets/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
      class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">Common DB Admin</span>
  </a>
  <div class="sidebar">
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        @foreach ($menuItems ?? [] as $menu)
        <li class="nav-item {{ collect($menu['submenus'])->contains('active', true) ? 'menu-open' : '' }}">
          <a href="{{ $menu['route'] ?? '#' }}" class="nav-link ">
            <i class="nav-icon {{ $menu['icon'] }}"></i>
            <p>
              {{ $menu['label'] }}
              @if ($menu['submenus'])
              <i class="fas fa-angle-left right"></i>
              @endif
            </p>
          </a>
          @if (!empty($menu['submenus']))
          <ul class="nav nav-treeview">
            @foreach ($menu['submenus'] as $submenu)
            <li class="nav-item">
              <a href="{{ $submenu['route'] }}" class="nav-link {{ $submenu['active'] ? 'active' : '' }}">
                <i class="far fa-circle nav-icon"></i>
                <p>{{ $submenu['label'] }}</p>
              </a>
            </li>
            @endforeach
          </ul>
          @endif
        </li>
        @endforeach
        <li class="nav-item">
          <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();">
            <i class="nav-icon fas fa-sign-out-alt"></i>
            <p>
              Logout
            </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>