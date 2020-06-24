<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row>
      <LineChart />
      <MapDistrict />
    </v-row>
    
  </v-container>
</template>
 
<script>
import LineChart from '@/components/LineChart'
import MapDistrict from '@/components/MapDistrict'

export default {
  components: {
    LineChart: LineChart,
    MapDistrict: MapDistrict
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
