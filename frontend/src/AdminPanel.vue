<template>
  <layout-default>
    <template slot="site-header">
      <sv-site-header> </sv-site-header>
    </template>

    <template slot="sidebar">
      <sv-sidebar></sv-sidebar>
    </template>
  </layout-default>
</template>

<script>
import { LayoutDefault, SvSidebar, SvSiteHeader } from '@superv/ui'

export default {
  name: 'AdminPanel',
  components: { SvSiteHeader, SvSidebar, LayoutDefault },
  created() {
    this.$sv.$layout.tabsActive = true
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  @apply bg-gray-900;
}

.font-sans {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.material-icons {
  font-size: 20px !important;
}
</style>
