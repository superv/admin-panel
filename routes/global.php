<?php

use SuperV\Panels\Admin\AdminPanelController;

return [
    'admin{path}' => [
        'uses'  => AdminPanelController::class,
        'where' => ['path' => '.*'],
    ],
];
