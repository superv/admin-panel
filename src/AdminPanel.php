<?php

namespace SuperV\Panels\Admin;

use Artisan;
use SuperV\Platform\Domains\Addon\Types\Panel\Panel;

class AdminPanel extends Panel
{
    protected $portSlug = 'api';

    public function onInstalled()
    {
        Artisan::call('vendor:publish', ['--tag' => 'admin.assets', '--force' => true]);
    }
}
