
// Import Vue and the component being tested
import Vue from 'vue'
import Vuetify from 'vuetify'
import {assert} from 'mocha'
import SummaryDisplay from '../../../src/components/summary-display.vue'
import {siteTestData} from '../../../src/util.js'

Vue.use(Vuetify)

/**
 *   Simple and Basic Test cases for a Component which displays data from props
 *
 *   Data should populate sections for header text, detail text, and section text 
 */
describe('Summary Display Vue Web Component', () => {
  var completeSiteData = siteTestData();
  var vm = null;
    // runs before all tests in this block
  before(function () {
    const Constructor = Vue.extend(SummaryDisplay)

    vm = new Constructor({propsData: {articles: completeSiteData.tableData[0].latest}}).$mount()
  })

  it('displays header text', () => {
    // ensure that the correct text is displayed by the right element.
    let subheadersText = vm.$el.querySelector('.subheader').textContent
    let subheaderTestText = completeSiteData.tableData[0].latest[0].header

    assert.equal(subheadersText, subheaderTestText)
  })

  it('displays summary text', () => {
    // ensure that the correct text is displayed by the right element.
    let subheadersText = vm.$el.querySelector('.card__text').textContent
    let subheaderTestText = completeSiteData.tableData[0].latest[0].snippet

    assert.equal(subheadersText, subheaderTestText)
  })
  it('displays an image', () => {
    // ensure that the correct text is displayed by the right element.
    let subheadersText = vm.$el.querySelector('.card__media__background').style.backgroundImage
    let subheaderTestImgSrc = completeSiteData.tableData[0].latest[0].image

    assert(subheadersText.includes(subheaderTestImgSrc))
  })
})
