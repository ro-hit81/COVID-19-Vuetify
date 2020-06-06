<template>
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
</template>

<script>

import axios from 'axios'
import Data from '@/assets/Nepal.json'

// Importing leaflet & its library

import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson, LMarker, LControlLayers } from 'vue2-leaflet';

// Importing MarkerCluster

import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

export default {
    data (){
        return {
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
                },
                {
                name: 'OpenStreetMap',
                visible: false,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                },
                {
                name: 'Spinal Map',
                visible: false,
                attribution: '',
                url: 'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={{INSERT_YOUR_API_KEY}}',
                },
            ],
            geojson: null,
        }
    },
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LMarker,
        LControlLayers,
        'l-marker-cluster': Vue2LeafletMarkerCluster
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
    created() {
        this.geojson = Data
        axios.get('https://data.nepalcorona.info/api/v1/covid').then((res)=> {
            this.CoronaDatas = res.data
        })
    },

}
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

.map{
    height: 75vh;
}
</style>
