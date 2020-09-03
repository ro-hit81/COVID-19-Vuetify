<template>
    <v-col cols="12" xs="12" sm="12" md="6">
        <v-card color="blue-grey darken-1" height="450" class="mb-5">
            <v-chart :options="provinceTimeline"></v-chart>
        </v-card>
    </v-col>
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