<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row>
      <line-chart />
      <map-district />
      <timeline-chart />
    </v-row>
    <v-row class="mt-12">
      <province-timeline />
      <!-- <CoronaDensity/> -->
    </v-row>
    <v-row class="mt-10">
      <v-col xs="12" sm="12" md="6" lg="6">
        <province-density />
      </v-col>
      <v-col xs="12" sm="12" md="6" lg="6">
        <district-density />
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <global-table />
    </v-row>
  </v-container>
</template>
 
<script>
import LineChart from '@/components/dashboard/LineChart'
import MapDistrict from '@/components/dashboard/MapDistrict'
import TimelineChart from '@/components/dashboard/TimelineChart'
import GlobalTable from '@//components/dashboard/GlobalTable'
import ProvinceTimeline from '@/components/dashboard/ProvinceTimeline'
import DistrictDensity from '@/components/maps/DistrictDensity'
import ProvinceDensity from '@/components/maps/ProvinceDensity'
// import CoronaDensity from '@/components/CoronaDensity'

export default {
  components: {
    LineChart,
    MapDistrict,
    TimelineChart,
    GlobalTable,
    ProvinceTimeline,
    DistrictDensity,
    ProvinceDensity
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
