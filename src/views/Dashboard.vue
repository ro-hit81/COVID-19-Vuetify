<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row>
      <LineChart />
      <MapDistrict />
      <TimelineChart />
    </v-row>
    <v-row class="mt-12">
      <ProvinceTimeline />
      <!-- <CoronaDensity/> -->
    </v-row>
    <v-row class="mt-12">
      <GlobalTable />
    </v-row>
  </v-container>
</template>
 
<script>
import LineChart from '@/components/dashboard/LineChart'
import MapDistrict from '@/components/dashboard/MapDistrict'
import TimelineChart from '@/components/dashboard/TimelineChart'
import GlobalTable from '@//components/dashboard/GlobalTable'
import ProvinceTimeline from '@/components/dashboard/ProvinceTimeline'
// import CoronaDensity from '@/components/CoronaDensity'

export default {
  components: {
    LineChart: LineChart,
    MapDistrict: MapDistrict,
    TimelineChart: TimelineChart,
    GlobalTable: GlobalTable,
    ProvinceTimeline: ProvinceTimeline,
    // CoronaDensity: CoronaDensity
  }
}
</script>
<style>
.card_hold{
  display: block;
}
.sheet_hold{
  position: relative;
  margin-top: -340px;
}
</style>
