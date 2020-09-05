<template>
    <v-col cols="12" xs="12" sm="12" md="9" lg="9">
        <div class="map mt-3">
            <l-map
                :zoom= "zoom"
                :center= "center"
                :bounds= "bounds"
                style= "z-index:0; height:75vh; background-color: #F3E5F5;"
                @update:zoom= "zoomUpdate"
                @update:center= "centerUpdate"
                :options="mapOptions"
            >
                <l-choropleth-layer
                        :data="coronaData"
                        titleKey="district"
                        idKey="district_id"
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
        </div>
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
    </v-col>
</template>

<script>
import axios from 'axios'
import L from 'leaflet'
import {LMap} from 'vue2-leaflet'
import {ChoroplethLayer, InfoControl, ReferenceChart} from 'vue-choropleth'

import DistrictJSON from '@/assets/District'

const coronaData = []
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
  console.log(coronaData)
})

export default {
    
}
</script>