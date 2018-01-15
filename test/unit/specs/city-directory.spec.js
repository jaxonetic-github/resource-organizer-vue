
// Import Vue and the component being tested
import Vue from 'vue'
import Vuetify from 'vuetify'
import {assert} from 'mocha'
import DetailDisplay from '../../../src/components/detail-display.vue'
import SummaryDisplay from '../../../src/components/summary-display.vue'
import CityDirectory from '../../../src/components/city-directory.vue'
import {siteTestData} from '../../../src/util.js'

Vue.use(Vuetify)

describe('City Directory Vue Web Component', () => {
  var completeSiteData = siteTestData()
  var vm = null

  // setup the Vue vm first
  before(function () {
    const Constructor = Vue.extend(CityDirectory)
    vm = new Constructor({propsData: {siteDataReceived: completeSiteData},
      components: {'summary-display': SummaryDisplay, 'detail-display': DetailDisplay}
    }).$mount()
  })

  describe('interacts with sub components (summary & detail)', () => {
    it('displays both detail and summary components', () => {
      // asserting existence of inner webcompnent (the summary)
      assert.ok(vm.$el.querySelector('#summary-display'))
      // asserting existence of inner webcompnent (the detail)
      assert.ok(vm.$el.querySelector('#detail-display'))
    })

    it('changes displayed data on menu change', () => {
      let initialExpectedIndex = 0
      let newTestIndex = 2
      // starting index should default to zeroth index
      assert.equal(vm.navigationIndex, initialExpectedIndex)

      // when menu clicked vm.navClicked is called to update the navIndex to specified index
      vm.navClicked(newTestIndex)

      // Asserting the internal index has changed and data has changed in sub components.
      assert.equal(vm.navigationIndex, newTestIndex)

      console.log(vm.navigationIndex, "===", vm.$el.querySelector('#detail-display').textContent)
      assert.ok(vm.$el.querySelector('#detail-display'))
    })
  })
})
