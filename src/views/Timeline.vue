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
import axios from 'axios'
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
      data: [],
    }
  },
  created() {
    axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) =>{
      const groups = res.data.reduce((groups, info) => {
        const date = info.reportedOn;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(info);
        return groups;
      }, {});
      const sortedData = Object.keys(groups).map((date) =>{
        return{
          date,
          infos: groups[date]
        };
      })
      for(let i=0; i< sortedData.length; i++) {
        for(let j=0; j< sortedData[i].length; j++) {
          console.log(sortedData.infos[j])
        }
      }
    })
  }
}
</script>