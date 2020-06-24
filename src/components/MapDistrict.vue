<template>
  <v-col cols="12" lg="4" md="3">
    <v-card class="mt-9 card_hold mx-auto"  max-width="410" height="300" ripple rounded>
      <v-card-subtitle>District</v-card-subtitle>
      <v-card-subtitle>District</v-card-subtitle>
      <v-card-subtitle>District</v-card-subtitle>
      <v-card-title>Map View</v-card-title>
      <v-card-subtitle>Covid-19 Cases in Nepal</v-card-subtitle>
      <v-card-actions class="caption">
        <v-icon small class="ml-1">mdi-alarm-check</v-icon>
        <span class="ml-2"> updated at</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Date: </span>
        <span class="font-weight-bold">{{dateConvert.nepal_date}}</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Time: </span>
        <span class="font-weight-bold">{{dateConvert.nepal_time}}</span>  
      </v-card-actions>
    </v-card>
    <v-sheet color="blue-grey darken-4" max-width="390" height="210" class="sheet_hold mx-auto" elevation="4" rounded>
      <v-chart :options="mapDistrict"/>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
import ECharts from 'vue-echarts'
import mapDistrict from '../assets/mapDistrict'
import NepalDistrict from '../assets/District.json'

ECharts.registerMap('NepalDistrict', NepalDistrict)
export default {
    components: {
        'v-chart' : ECharts
    },
    data() {
        return {
            mapDistrict
        }
    },
    computed: {
        ...mapGetters([
            'dateConvert'
        ])
    },
    mounted: function () {
        this.$store.dispatch('loadNepalStats')
    }
}
</script>