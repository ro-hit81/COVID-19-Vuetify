<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row>
      <LineChart />
      <MapDistrict />
      <TimelineChart />
    </v-row>
    <v-row class="mt-12">
      <GlobalTable />
    </v-row> 
  </v-container>
</template>
 
<script>
import LineChart from '@/components/LineChart'
import MapDistrict from '@/components/MapDistrict'
import TimelineChart from '@/components/TimelineChart'
import GlobalTable from '@//components/GlobalTable'

export default {
  components: {
    LineChart: LineChart,
    MapDistrict: MapDistrict,
    TimelineChart: TimelineChart,
    GlobalTable: GlobalTable
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
