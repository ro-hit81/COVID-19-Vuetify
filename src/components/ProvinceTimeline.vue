<template>
    <v-container class="mt-12">
        <v-divider></v-divider>
        <v-col cols="12" xs="12" sm="12" md="12">
            <v-card  height="450" class="mb-5 my-3">
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