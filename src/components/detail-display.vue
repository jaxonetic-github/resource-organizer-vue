<template>
<v-app id="detail-display" class="elevation-4">

<v-card class="blue-grey darken-3 ">
  <v-card-title>
    {{title}}
    <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        disabled
        placeholder=' ___________ in Progress...(1/9/2018)'
      ></v-text-field>
  </v-card-title>
  <v-data-table :headers="headerz" :items="itemz"   class="elevation-1">
   <!--   <template slot="headers" scope="props">
    <h6 class="text-xs-left">
      {{ props.item.text }}
    </h6>
  </template>
  -->

    <template slot="items" slot-scope="props">
      <td v-for=" value in Object.keys(props.item)" class="text-xs-right">{{props.item[value] }}</td>
    </template>
    </v-data-table>
</v-card>
</v-app>
</template>

<script>
/**
 * @author Alonzo Jackson
 * @description  Displays detailed resources for artists in a particulary city in tabular form
 * @module components/detail-display
 * @example  <detail-display   :itemz="[{ title: 'Art / Sports / Dance / Theater Counselors - Harand Theatre Camp', spaceType: 'other', listingType: 'Freelance/Contract/Temp', datePosted: '04/08/2017' }, {  title: 'Dance, music school looking for a new owner', spaceType: 'Full time', listingType: 'Permanent', datePosted: '04/10/2017' }]"
 headerz="[{ text: 'Title', sortable: true, value: 'title_value' }, { text: 'Employment  Types(s)', value: 'types' }, { text: 'Job Types', value: 'types' }, { text: 'Posted Date', value: 'types' }]"
 title="Test Title" />
 * @name  Detail-Display
 * @param headerz  The Header Text for the Table header row
 * @todo Implement Search
 */
export default{
  name: 'detail-display',
  props: ['itemz', 'headerz', 'title']
}
</script>

<style>
/**  center the table **/
table {margin: auto}
.card__title{text-transform: capitalize; color: wheat;}
th,td{margin:5px; padding:10px;}
h6{color:white;margin-bottom: 0rem;}
</style>