<template>
    <div class="map">
        <l-map
            :zoom= "zoom"
            :center= "center"
            :bounds= "bounds"
            style= "z-index:0; height:68vh; background-color: #EEEEEE;"
            @update:zoom= "zoomUpdate"
            @update:center= "centerUpdate"
            :options="mapOptions"
        >
            <l-choropleth-layer
                    :data="coronaData"
                    titleKey="province"
                    idKey="province_id"
                    :value="value"
                    :extraValues="extraValues"
                    geojsonIdKey="PROVINCE"
                    :geojson="ProvinceJSON"
                    :colorScale="colorScale"
            >
                <template slot-scope="props">
                    <l-info-control 
                        :item="props.currentItem"
                        :unit="props.unit"
                        title="Province"
                        placeholder="Hover over Province for more information !!!"
                        position="topright"
                    />
                    <l-reference-chart 
                        title="COVID-19 Infected Case"
                        :colorScale="colorScale"
                        :min="props.min"
                        :max="props.max"
                        position="bottomleft"
                    />
                    
                </template>
            </l-choropleth-layer>
        </l-map>
        <v-row class="text-center overline">
            <v-col>
                <span class="font-weight-bold grey--text"> Current Zoom Level:</span>
                <span class="font-weight-medium"> {{zoom}}</span>
            </v-col>
            <v-col>
                <span class="font-weight-bold grey--text">Map Center: </span>
                <span class="font-weight-medium">{{center.lat}}&deg;, {{center.lng}}&deg;</span>
            </v-col>
        </v-row>
    </div>
    
</template>

<script>
import axios from 'axios'
import L from 'leaflet'
import {LMap} from 'vue2-leaflet'
import {ChoroplethLayer, InfoControl, ReferenceChart} from 'vue-choropleth'
// import {demo} from '../../assets/demo'

import ProvinceJSON from '@/assets/Province'

const coronaData = []
axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
  const array = res.data
  const groups= array.reduce((acc, arr) => {
      const province = arr.province
      if(!acc[province]) {
          acc[province]= []
      }
      acc[province].push(arr)
      return acc
  }, {})
  const groupingProvince = Object.keys(groups).map((province) => {
      return {
          province: province,
          province_id: parseInt(province),
          infected: groups[province].length,
      }
  })
  coronaData.push(...groupingProvince)
})

export default {
    components: {
        LMap,
        'l-choropleth-layer': ChoroplethLayer,
        'l-info-control': InfoControl,
        'l-reference-chart': ReferenceChart
    },
    data() {
        return {
            coronaData,
            zoom: 7, 
            center: L.latLng(28.4493819395240528, 84.09959913133743),
            bounds: [],
            ProvinceJSON,
            colorScale: ["#FFE0B2", '#FFCC80','#FFB74D','#FFA726', '#F57C00', '#EF6C00','#E65100'],
            mapOptions: {
                attributionControl: false
            },
            value: {
                key: "infected",
                metric: "people"
            },
            extraValues: [
                {
                    key: 'infected',
                    metric: "people"
                }
            ]
        }
    },
    methods: {
        zoomUpdate(zoom) {
            return this.zoom = zoom
        },
        centerUpdate(center) {
            return this.center = center
        },
        latLng: function(lat, lng) {
            return L.latLng(lat, lng)
        }
    },
    mounted() {
        this.$root.$on('clicked-province', (ProvinceData) => {
            let polygon = L.polygon(ProvinceData.geometry.coordinates);
            let bounds = polygon.getBounds();
            let southWest = bounds.getSouthWest();
            let northEast = bounds.getNorthEast();
            let cSouthWest = L.latLng(southWest.lng, southWest.lat);
            let cNortEast = L.latLng(northEast.lng, northEast.lat);
            let newBounds = L.latLngBounds(cSouthWest, cNortEast);
            this.bounds = newBounds
        });
    }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

#map{
    height: 75vh;
}

.info span{
    color:white;
}
</style>