<template>
    <v-container class="mt-12">
        <v-divider></v-divider>
        <v-col  xs="12" sm="12" md="12">
            <v-card color="cyan lighten-5" height="700" class="mb-5 pa-3 my-3">
                <v-card-title>COVID-19 cases(Daily basis)</v-card-title>
                <v-card-subtitle> Province wise</v-card-subtitle>
                <v-chart :options="provinceTimeline"></v-chart>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
import provinceTimeline from '../assets/provinceTimeline'
import Echarts from 'vue-echarts'
export default {
    components:{
        'v-chart' : Echarts
    },
    data() {
        return {
            provinceTimeline
        }
    }
}
</script>