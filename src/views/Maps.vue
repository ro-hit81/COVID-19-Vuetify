<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <v-col cols="3" class="text-center">
        <h3>District List</h3>
        <v-expansion-panels inset focusable hover class="districtList mt-3">
          <v-expansion-panel v-for="NepalData in NepalDatas" :key="NepalData.properties.OBJECTID" class="grey lighten-3">
            <v-expansion-panel-header class="mx-auto">
              {{NepalData.properties.DISTRICT}}
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="mt-2">
                 <span>Province: </span>
                <span class="blue-grey--text">{{NepalData.properties.PR_NAME}}</span>
              </div>
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>


      <v-col cols="9" class="text-center">
        <h3>Map</h3>
        <div class="map mt-3">
          <l-map
            :zoom= "zoom"
            :center= "center"
            @update:zoom= "zoomUpdated"
            @update:center= "centerUpdated"
          >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <!-- <l-marker :lat-lng="marker"></l-marker> -->
            <l-geo-json :geojson="geojson"></l-geo-json>
          </l-map>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Data from '@/assets/Nepal.json'
import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  data (){
    return {
      NepalDatas: [],

      zoom: 7,
      center: L.latLng(28.197842, 84.528289),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      geojson: null,

    }
  },
  methods: {
    zoomUpdated(zoom){
      return this.zoom = zoom
    },
    centerUpdated(center) {
      return this.center = center
    }
  },
  created() {
    this.NepalDatas = Data.features
    this.geojson = Data
    // console.log(this.NepalDatas)
  }
}
</script>

<style>
  .districtList{
    max-height: 75vh;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .districtList::-webkit-scrollbar { 
     width: 0;
    height: 0;
  }
  .map{
    height: 75vh;
  }
</style>