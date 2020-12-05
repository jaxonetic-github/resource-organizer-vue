<template>
  <v-app id="city-directory">
              
              <v-toolbar class="white">
    <v-toolbar-title class="text-xs-center">
    {{siteData.description}}
  </v-toolbar-title>
                   <v-spacer></v-spacer>
          <v-menu id="inner-nav"  bottom left>
            <v-btn icon slot="activator" light>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in navigationSections" :key="item.title" @click="navClicked(item.value)">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

  </v-toolbar>

              <summary-display :articles="siteDataReceived.tableData[navigationIndex].latest"/>
              <detail-display :itemz="siteData.tableData[navigationIndex].items" :title="siteData.tableData[navigationIndex].section" :headerz="siteData.tableData[navigationIndex].headerz" />
  </v-app>
</template>


<script>
/**
 * Displays resources for artists in a particulary city
 * @name  City-Directory
 * @author Alonzo Jackson
 * @description  Displays resources for artists in a particulary city
 * @module City-directory
 * @example  <city-directory   :site-data-received="{}" />
 * @param siteDataReceived City information (i.e. events, jobs) in json object form
 * @requires  Detail-Display
 * @requires Summary-Display
 */
export default {
  name: 'city-directory',
  props: ['siteDataReceived'],
  data: function () {
    return {
      siteData: this.siteDataReceived,
      navigationIndex: 0,
      navigationSections: []}
  },

  created: function () {
    const tabledatakeys = Object.keys(this.siteData.tableData)
    const tabledataentries = Object.entries(this.siteData.tableData)
    console.log(tabledatakeys, '::First::---->\n', tabledataentries.length)
    console.log('::Created::---->\n', tabledataentries[tabledatakeys[0]][1].section.substring(0))

    console.log('::Created::---->\n', typeof tabledataentries[tabledatakeys[0]][1].section.substring(0))
    console.log('::Created::---->\n', tabledataentries[tabledatakeys[1]][1].section.substring(0))
    console.log('::Created::---->\n', tabledataentries[tabledatakeys[2]][1].section.substring(0))

     // loop through and create sectionname/navigationIndex Pairing for menu options
    for (let i = 0; (i < this.siteData.tableData.length); i++) {
      this.navigationSections.push({title: this.siteData.tableData[i].section, value: i})
    }
  },

  methods: {
      /**
       *  @function  navClicked updates the components navigationIndex which updates the data displayed
       * <list-display/> and <display-table/>
       */
    navClicked: function (newNavIndex) { this.navigationIndex = newNavIndex }
  }
}
</script>

<style>
.toolbar__title{width:100%;}
.toolbar{top:0px !important;}
#inner-nav{z-index: 9999}  /* necessary to capture mouse click when material is on*/
</style>
