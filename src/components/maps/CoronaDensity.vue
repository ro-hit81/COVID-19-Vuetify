<template>
    <v-col cols="12" xs="12" sm="12" md="6">
        <v-card color="brown darken-1" height="450" class="mb-5">
                <v-chart :options="densityMap"></v-chart>
        </v-card>
    </v-col>
</template>

<script>
import densityMap from '../assets/densityMap'
import Echarts from 'vue-echarts'
export default {
   components: {
       'v-chart' : Echarts
   },
   data() {
       return {
           densityMap
       }
   }
}
</script>