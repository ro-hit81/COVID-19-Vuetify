<template>
    <v-col cols="12" xs="12" sm="12" md="9" lg="9">      
        <div class="map mt-3">
          <l-map
            :zoom= "zoom"
            :center= "center"
            :bounds= "bounds"
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
                    <l-icon :icon-size="iconSize" :icon-url="icon"></l-icon>
                    </l-marker>
            </l-marker-cluster>
            <l-control-layers position="bottomright"/>
            <l-layer-group>
                 <l-layer-group layer-type="overlay" name="Province" :visible="true">
                  <l-geo-json :geojson="provinceJson" :options-style="provinceStyleFunction"/>
                </l-layer-group>
                <l-layer-group layer-type="overlay" name="District" :visible="true">
                  <l-geo-json :geojson="districtJson" :options-style="districtStyleFunction"/>
                </l-layer-group>
            </l-layer-group>
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
import DistrictData from '@/assets/District.json'
import ProvinceData from '@/assets/Province.json'
import infected_icon from '../assets/infected.png'


// Importing leaflet & its library

import L from 'leaflet'
import { LMap, LTileLayer, LGeoJson, LMarker, LControlLayers, LIcon, LLayerGroup} from 'vue2-leaflet';

// Importing MarkerCluster

import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

export default {
    data (){
        return {
            CoronaDatas:[],
            zoom: 7,
            center: L.latLng(28.197842, 84.528289),
            bounds: [],
            icon: infected_icon,
            iconSize: [70, 70],
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
                url: 'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=8398434e563646f2b6d13072a43f1f1d',
                },
            ],
            districtJson: null,
            provinceJson: null,
        }
    },
    components: {
        LMap,
        LTileLayer,
        LGeoJson,
        LMarker,
        LControlLayers,
        LLayerGroup,
        LIcon,
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
        districtStyleFunction() {
            return () => {
                return {
                    weight: 0.5,
                    color: '#64DD17',
                    opacity: 1,
                    fillColor: "none",
                    fillOpacity: 0
                };
            }
        },
        provinceStyleFunction() {
            return () => {
                return {
                    weight: 1,
                    color: "#D50000",
                    fillColor: "none",
                    fillOpacity:0
                }
            }
        }
    },
    created() {
        this.districtJson = DistrictData
        this.provinceJson = ProvinceData
        axios.get('https://data.nepalcorona.info/api/v1/covid').then((res)=> {
            this.CoronaDatas = res.data
        })
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
