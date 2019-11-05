import Vue from 'vue'
import supervjs from '@superv/ui'
import AdminPanel from './AdminPanel'
import routes from './app/routes'
import tools from '../../tools'

let config = { apiUrl: '/api' }
if (process.env.NODE_ENV !== 'development') {
  config = JSON.parse(document.getElementById('config').innerHTML)
}

Vue.config.productionTip = false
Vue.use(supervjs, {
  config: {
    name: process.env.VUE_APP_PANEL_NAME,
    apiUrl: config.apiUrl,
    baseUrl: config.baseUrl,
  },
  routes,
  tools,
})

new Vue({
  el: '#app',
  name: 'root',
  data() {
    return {
      layouts: { default: AdminPanel },
    }
  },
  mixins: [require('@superv/ui').LayoutMixin],
})
