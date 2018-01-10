// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import CityDirectory from './components/city-directory'
import DetailDisplay from './components/detail-display.vue'
import SummaryDisplay from './components/summary-display.vue'
import {siteTestData} from './util.js'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Globally registering 2 sub components
Vue.component('detail-display', DetailDisplay)
Vue.component('summary-display', SummaryDisplay)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: function () { return {siteData: '', debug: true} },
  created: function () { this.siteData = siteTestData() },
  components: {'city-directory': CityDirectory}
})
