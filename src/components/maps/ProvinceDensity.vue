<template>
    <v-col cols="12" xs="12" sm="12" md="9" lg="9">
        <div class="map mt-3">
            <l-map
                :zoom= "zoom"
                :center= "center"
                :bounds= "bounds"
                style= "z-index:0; height:75vh;"
                :options="mapOptions"
            >
            <l-choropleth-layer
                    :data="coronaData"
                    titleKey="province"
                    idKey="province"
                    :value="value"
                    geojsonIdKey="PROVINCE"
                    :geojson="ProvinceJSON"
                    :colorScale="colorScale"
            >

            </l-choropleth-layer>
            </l-map>
        </div>
    </v-col>
</template>

<script>
import axios from 'axios'
import L from 'leaflet'
import {LMap} from 'vue2-leaflet'
import {ChoroplethLayer} from 'vue-choropleth'

import ProvinceJSON from '@/assets/Province'

const coronaData = []
axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
  const array = res.data
  const groups= array.reduce((acc, arr) => {
      const province = arr.province
      if(!acc[province]) {
          acc[province]=[]
      }
      acc[province].push(arr)
      return acc
  }, {})
  const groupingProvince = Object.keys(groups).map((province) => {
      return {
          province: province,
          infected: groups[province].length
      }
  })
  coronaData.push(groupingProvince)
})

export default {
    components: {
        LMap,
        'l-choropleth-layer': ChoroplethLayer
    },
    data() {
        return {
            zoom: 7, 
            center: L.latLng(28.197842, 84.528289),
            bounds: [],
            ProvinceJSON,
            colorScale: ["e7d090", "e9ae7b", "de7062"],
            mapOptions: {
                attributionControl: false
            },
            coronaData,
            value: {
                key: "infected",
                metric: "number of infected"
            }
        }
    },
    methods: {
        // zoomUpdate(zoom) {
        //     return this.zoom = zoom
        // },
        // centerUpdate(center) {
        //     return this.center = center
        // },
        latLng: function(lat, lng) {
            return L.latLng(lat, lng)
        }
    }
}
</script>

<style scoped>
@import "~leaflet/dist/leaflet.css";

.map{
    height: 75vh;
}
</style>