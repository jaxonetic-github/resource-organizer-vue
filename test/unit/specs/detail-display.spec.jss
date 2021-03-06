
// Import Vue and the component being tested
import Vue from 'vue'
import Vuetify from 'vuetify'
import {assert} from 'mocha'
import { mount } from '@vue/test-utils'

import DetailDisplay from '../../../src/components/detail-display.vue'
import {siteTestData} from '../../../src/util.js'

Vue.use(Vuetify)

/**
 * Simple and Basic Test cases for a Component which displays data from props
 *
 * Data should populate sections for header text, detail text, and section text
 */
describe('Detail Display Vue Web Component', () => {
  var completeSiteData = siteTestData()

  var vm = null

  // runs before all tests in this block
  before(function () {
   
  })

  it('displays info text', () => {
     const Constructor = Vue.extend(DetailDisplay)

    vm = new Constructor({propsData: {
      itemz: completeSiteData.tableData[0].items,
      headerz: completeSiteData.tableData[0].headerz,
      title: completeSiteData.tableData[0].section
    }})

    const wrapper = mount(DetailDisplay);

    // grab the test text
    let itemTestText = completeSiteData.tableData[0].items[0].title
    console.log(itemTestText, 'Display info text elem::', wrapper.find('.card__title').textContent.trim())
    // grab the text from the innerhtml of the component
    //let itemRealText = vm.$el.querySelector('.card__title').textContent.trim()
    //console.log(itemRealText, 'Display info text elem::', itemTestText)

   // assert.equal(itemTestText, itemRealText)
  })
/*
  it('displays header text', () => {
    // grab the test text
    let itemTestText = completeSiteData.tableData[0].headerz[0].text

    // grab the text from the innerhtml of the component
    let itemRealText = vm.$el.querySelector('th[role="columnheader"]').textContent

    assert.equal(itemTestText, itemRealText)
  })

  it('displays section title text', () => {
    // grab the test text
    let itemTestText = completeSiteData.tableData[0].section

    // grab the text from the innerhtml of the component
    let itemRealText = vm.$el.querySelector('.card__title').textContent

    assert(itemRealText.includes(itemTestText))
  })
  */
})
