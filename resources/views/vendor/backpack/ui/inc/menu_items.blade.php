{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Users" icon="la la-user" :link="backpack_url('user')" />
<x-backpack::menu-item title="Drivers" icon="la la-car" :link="backpack_url('driver')" />
<x-backpack::menu-item title="Hosts" icon="la la-headphones" :link="backpack_url('host')" />
<x-backpack::menu-item title="Picks" icon="la la-edit" :link="backpack_url('pick')" />
<x-backpack::menu-item title="Races" icon="la la-flag" :link="backpack_url('race')" />
<x-backpack::menu-item title="Tracks" icon="la la-map-pin" :link="backpack_url('track')" />
