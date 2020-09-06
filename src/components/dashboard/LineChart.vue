<template>
  <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="mb-12">
    <v-card class="mt-9 card_hold mx-auto" height="300" ripple rounded>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-subtitle>Nepal</v-card-subtitle>
      <v-card-title>Line Chart View</v-card-title>
      <v-card-subtitle>Covid-19 Cases in Nepal</v-card-subtitle>
      <v-card-actions class="caption">
        <v-icon small class="ml-1">mdi-alarm-check</v-icon>
        <span class="ml-2"> updated at</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Date: </span>
        <span class="font-weight-bold">{{dateConvert.nepal_date}}</span>
        <v-spacer></v-spacer>
        <span class="font-italic font-weight-medium ml-2">Time: </span>
        <span class="font-weight-bold"> {{dateConvert.nepal_time}} GMT</span>  
      </v-card-actions>
    </v-card>
    <v-sheet color="blue lighten-1"  height="210" class="sheet_hold mx-3" elevation="4" rounded>
      <v-chart :options="lineChart" autoresize/>
    </v-sheet>
  </v-col>
</template>
 
<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
 
<script>
import { mapGetters } from 'vuex'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import lineChart from '../../assets/lineChart'
 
export default {
  components: {
    'v-chart': ECharts,
  },
  data () {
    return {
        lineChart,
    }
  },
  computed: {
    ...mapGetters([
      'dateConvert'
    ])
  },
  mounted: function() {
    this.$store.dispatch('loadNepalStats')
  }
}
</script>