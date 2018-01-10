<style>
/**  change the tabbar color from default blue to black **/
/*.
.secondary{background-color:transparent !important;  min-height:100%; color:black;}
*/
.application--wrap{min-height: 0px}
.card__media{background-color: darkslategrey; border-radius: 10px}
.card--tile{
padding-left: 30px;
    padding-right: 20px;
    margin-left: 20px;
  }
</style>
<template>
 <v-app id='summary-display'>
        <v-container fluid >
          <v-layout row  wrap>
            <v-flex md4 v-for="article in articles" :key="article.header">
              <v-card flat tile   >
              <v-card-media :src="article.image" alt="lorem" height="300px"></v-card-media>
              <v-subheader>{{article.header}}</v-subheader>
              <v-card-text class="px-0">{{article.snippet}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</v-app>
</template>

<script>

/**
 * @author Alonzo Jackson
 * @description  Displays brief announcements in an organized responsive row.
 * @module components/summary-display
 * @example  <summary-display   :articles="[{image:'http://lorempixel.com/400/200/fashion/1', header:"David Byrne Addresses the Current Economic Crises Facing the Arts", snippet:"David Byrne's What Good Are the Arts responds to the proposed Trump administration budget cuts and an address Byrne gave at his local City Hall. Read an excerpt of his article below:"},
      {image:'http://lorempixel.com/400/200/people/1', header:"A web archiving tool for regular users", snippet:"Rhizome has launched a new user-friendly web archiving application, Webrecorder Player, and now wants to empower regular users to take ownership of the web archiving process, and to take better grasp of access."},
      {image:'http://lorempixel.com/400/200/nightlife/1',header:"Brian Chippendale Discusses Living and Organizing Artist-DIY Spaces", snippet:"Chippendale recalls his time spent with Fort Thunder, an independent DIY space in Providence, Rhode Island. Find an excerpt of the article below and read the entire essay at The Creative Independent."}
      ]" />
 * @name  Summary-Display
 * @param articles  An array of promo data for a particular announcement
 */
export default{
  name: 'summary-display',
  props: {
    articles: {type: Array}
  }
}
</script>