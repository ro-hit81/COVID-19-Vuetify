<template>
  <v-chart
    :options="map"
  />
</template>

<style>
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


import map from '../assets/map'
import chinaMap from '../assets/china.json'

ECharts.registerMap('china', chinaMap)


export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      map
    }
  },
}
</script>