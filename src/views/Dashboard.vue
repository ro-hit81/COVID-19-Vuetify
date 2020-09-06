<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row class="mx-3">
      <v-row>
        <h1 >
          <span class="subheading grey--text mt-4">Interactive Charts </span>
          <span class="subtitle-2 grey--text" > (Do not hesitate to zoom & slide.)</span>
        </h1>
      </v-row>
      <v-row class="mx-3">
        <line-chart />
        <map-district />
        <timeline-chart />
      </v-row>
    </v-row>
    <v-row class="mt-12">
      <province-timeline />
    </v-row>
    <v-row class="mt-10 mx-3">
      <v-row>
        <h1>
          <span class="subheading grey--text mt-4">Choropleth Map </span>
          <span class="subtitle-2 grey--text" > (Maps are one way binded on purpose. Zoom & Pan Province map. )</span>
        </h1>
      </v-row>
      <v-row>
        <v-col cols ="12" xs="12" sm="12" md="6" lg="6">
          <province-density />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <district-density />
        </v-col>
      </v-row>
    </v-row>
    <v-row class="mx-3">
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

export default {
  components: {
    LineChart,
    MapDistrict,
    TimelineChart,
    GlobalTable,
    ProvinceTimeline,
    DistrictDensity,
    ProvinceDensity
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
