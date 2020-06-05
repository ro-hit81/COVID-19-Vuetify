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


      <v-col cols="9">
        <h3 class="text-center">Map</h3>
        <div class="map mt-3">
          <l-map
            :zoom= "zoom"
            :center= "center"
            style="z-index:0"
            @update:zoom= "zoomUpdated"
            @update:center= "centerUpdated"
          >
          <l-control-layers position="topright"/>
            <l-tile-layer 
                      :key="tileProvider.name"
                      v-for="tileProvider in tileProviders" 
                      :name="tileProvider.name" 
                      :visible="tileProvider.visible" 
                      :url="tileProvider.url"
                      :attribution="tileProvider.attribution" 
                      layer-type="base" />
            <l-marker-cluster>
              <l-marker 
                    :key="CoronaData.id" 
                    v-for="CoronaData in CoronaDatas" 
                    :lat-lng="latLng(CoronaData.point.coordinates[1], CoronaData.point.coordinates[0])"
                    >
                    </l-marker>
            </l-marker-cluster>
              <l-geo-json :geojson="geojson" :options-style="styleFunction"/>
          </l-map>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import Data from '@/assets/Nepal.json'
import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson, LMarker, LControlLayers } from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'


export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LControlLayers,
    'l-marker-cluster': Vue2LeafletMarkerCluster
  },
  data (){
    return {
      NepalDatas: [],
      CoronaDatas:[],
      zoom: 7,
      center: L.latLng(28.197842, 84.528289),
      tileProviders: [
        {
          name: 'Stadia Alidade Smooth [Dark]',
          visible: true,
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
        },
        {
          name: 'CartoDb Positron [Light]',
          visible: false,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        },{
          name: 'OpenStreetMap',
          visible: false,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },{
          name: 'Spinal Map',
          visible: false,
          attribution: '',
          url: 'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={{INSERT_YOUR_API_KEY}}',
        },
      ],
      geojson: null,

    }
  },
  methods: {
    zoomUpdated(zoom){
      return this.zoom = zoom
    },
    centerUpdated(center) {
      return this.center = center
    },
    latLng: function(lat, lng){
      return L.latLng(lat, lng)
},
  },
  created() {
    this.NepalDatas = Data.features
    this.geojson = Data
    // console.log(this.NepalDatas)
    axios.get('https://data.nepalcorona.info/api/v1/covid').then((res)=> {
      this.CoronaDatas = res.data
      // console.log(this.CoronaDatas[0].point.coordinates)
    })
  },
  computed: {
    styleFunction() {
      return () => {
        return {
          weight: 1,
          color: "#42A5F5",
          opacity: 1,
          fillColor: "none",
          fillOpacity: 0.7
        };
      }
    },
  },

}
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
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