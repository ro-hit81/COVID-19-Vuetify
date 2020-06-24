<template>
  <v-col cols="12" lg="4" md="4" sm="12" xs="12">
    <v-card class="mt-9 card_hold ma-auto"  max-width="400" height="300" ripple rounded>
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
    <v-sheet color="amber darken-3" max-width="380" height="210" class="sheet_hold mx-auto" elevation="4" rounded>
      <v-chart :options="timelineChart"/>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
import ECharts from 'vue-echarts'
import timelineChart from '../assets/timelineChart'

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