<template>
    <v-chart :options="lineChart">

    </v-chart>
</template>

<script>
import ECharts from 'vue-echarts'
import lineChart from '@/assets/lineChart'
export default {
    components: {
        'v-chart': ECharts,
    },
    data() {
        return {
            lineChart
        }
    } 
    
}
</script>