<template>
  <v-col cols="12" lg="4" md="4" sm="12" xs="12"  class="mb-12">
    <v-card class="mt-9 card_hold mx-auto" height="300" ripple rounded>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-title>Multiple Line Chart View</v-card-title>
      <v-card-subtitle>Covid-19 Cases in Nepal</v-card-subtitle>
      <v-card-actions class="caption">
        <v-icon small class="ml-1">mdi-alarm-check</v-icon>
        <span class="ml-2"> updated at</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Date: </span>
        <span class="font-weight-bold">{{dateConvert.nepal_date}}</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Time: </span>
        <span class="font-weight-bold">{{dateConvert.nepal_time}} GMT</span>  
      </v-card-actions>
    </v-card>
    <v-sheet color="amber darken-3" height="210" class="sheet_hold mx-3" elevation="4" rounded>
      <v-chart :options="timelineChart" autoresize/>
    </v-sheet>
  </v-col>
</template>

<script>
import timelineChart from '../../assets/timelineChart'

import { mapGetters } from 'vuex'
import ECharts from 'vue-echarts'

export default {
    components: {
        'v-chart' : ECharts
    },
    data() {
        return {
            timelineChart
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