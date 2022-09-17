<?php

namespace SuperV\Panels\Admin;

use SuperV\Platform\Domains\Addon\Types\Panel\Panel;

class AdminPanelController
{
    public function __invoke()
    {
        if (! $port = Panel::make('superv.admin')->getPort()) {
            return 'Please specify a port for this panel';
        }

        return view('superv.admin::panel', [
            'config' => [
                'apiUrl' => $port->url(),
                'baseUrl' => 'admin'
            ]
        ]);
    }
}