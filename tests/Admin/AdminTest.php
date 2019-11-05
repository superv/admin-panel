<?php

namespace Tests\Admin;

class AdminTest extends TestCase
{
    function test_addon_is_installed()
    {
        $this->assertNotNull(sv_addons('admin'));
    }
}
