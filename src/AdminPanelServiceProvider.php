<?php

namespace SuperV\Panels\Admin;

use SuperV\Platform\Domains\Addon\AddonModel;
use SuperV\Platform\Domains\Addon\Types\Panel\PanelServiceProvider;
use SuperV\Tools\Generator\GeneratorTool;

class AdminPanelServiceProvider extends PanelServiceProvider
{
    public function boot()
    {
        parent::boot();

//        $this->registerTools();
    }

    protected function registerTools(): void
    {
        $tool = new GeneratorTool(new AddonModel([
            'path' => $this->addon->path('tools/superv/generator'),
          //  'path' => base_path('tools/superv/generator'),
        ]));

        $tool->boot();
    }
}
