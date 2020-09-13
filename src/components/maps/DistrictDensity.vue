<template>
    <v-card>
        <l-map
            :zoom= "zoom"
            :center= "center"
            :bounds= "bounds"
            style= "z-index:0; height:75vh; background-color: #EEEEEE"
            @update:zoom= "zoomUpdate"
            @update:center= "centerUpdate"
            :options="mapOptions"
        >
            <l-choropleth-layer
                    :data="newData"
                    titleKey="DISTRICT"
                    idKey="DISTRICT_ID"
                    :value="value"
                    :extraValues="extraValues"
                    geojsonIdKey="DISTRICT_ID"
                    :geojson="DistrictJSON"
                    :colorScale="colorScale"
            >
                <template slot-scope="props">
                    <l-info-control 
                        :item="props.currentItem"
                        :unit="props.unit"
                        title="District"
                        placeholder="Hover over district for more information !!!"
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
            <v-col cols="4">
                <span class="font-weight-bold grey--text"> Current Zoom Level:</span>
                <span class="font-weight-medium"> {{zoom}}</span>
            </v-col>
            <v-col cols="8">
                <span class="font-weight-bold grey--text">Map Center: </span>
                <span class="font-weight-medium">{{center.lat}}&deg;, {{center.lng}}&deg;</span>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios'
import L from 'leaflet'
import {LMap} from 'vue2-leaflet'
import {ChoroplethLayer, InfoControl, ReferenceChart} from 'vue-choropleth'

import DistrictJSON from '@/assets/District'

const coronaData = []
const newData =[]
axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
  const array = res.data
  const groups= array.reduce((acc, arr) => {
      const district = arr.district
      if(!acc[district]) {
          acc[district]= []
      }
      acc[district].push(arr)
      return acc
  }, {})
  const groupingDistrict = Object.keys(groups).map((district) => {
      return {
          district: district,
          district_id: parseInt(district),
          infected: groups[district].length
      }
  })
  coronaData.push(...groupingDistrict)
  for(let i =0; i<DistrictJSON.features.length; i++) {
    const properties = DistrictJSON.features[i].properties
    newData.push({
        ...properties,
        ...coronaData.find((item) => item.district_id === properties.DISTRICT_ID)
        })
    }
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
            newData,
            zoom: 7, 
            center: L.latLng(28.53633199789687, 84.51942368483917),
            bounds: [],
            DistrictJSON,
            colorScale: ['#AED581',"#FFB74D", '#FF6D00', '#EF6C00','#F50057','FF0000'],
            mapOptions: {
                attributionControl: false
            },
            value: {
                key: "infected",
                metric: "people"
            },
            extraValues: [
                {
                    key: "PR_NAME",
                    metric: ''
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
        this.$root.$on('clicked-district', (NepalData) => {
            let polygon = L.polygon(NepalData.geometry.coordinates);
            let bounds = polygon.getBounds();
            let southWest = bounds.getSouthWest();
            let northEast = bounds.getNorthEast();
            let cSouthWest = L.latLng(southWest.lng, southWest.lat);
            let cNortEast = L.latLng(northEast.lng, northEast.lat);
            let newBounds = L.latLngBounds(cSouthWest, cNortEast);
            this.bounds = newBounds
        });
        this.$root.$on('province-zoom', (zoom)=> {
            this.zoom = zoom
        });
        this.$root.$on('province-center', (center)=> {
            this.center = center
        });
    }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

.info span{
    color:white;
}
</style>