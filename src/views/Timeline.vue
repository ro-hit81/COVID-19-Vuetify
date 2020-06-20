<template>
  <v-chart
    :options="map"
    autoresize
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
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/geo'
import 'echarts-leaflet';
import map from '../assets/map'
import "echarts/extension/bmap/bmap.js";
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