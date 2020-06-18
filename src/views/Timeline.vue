<template>
  <v-chart
    :options="map "
  />
</template>

<style>
@import '~leaflet/dist/leaflet.css';

.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
// import axios from 'axios'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/geo'
import 'echarts-leaflet';
import "echarts/extension/bmap/bmap.js";
import map from '../assets/map'
import district from '../assets/District.json'

ECharts.registerMap('Nepal', district)


export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      map,
    }
  },
  
}
</script>