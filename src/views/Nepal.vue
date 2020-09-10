<template>
  <div class="grey lighten-3 nepal" >
    
    <h1 class="subheading grey--text" >Nepal</h1>

    <nepal-stats />

    <v-divider></v-divider>

    <province-timeline />

    <v-divider></v-divider>

    <gender-chart />
  </div>
</template>

<script>
import NepalStats from '@/components/nepalStat/Nepal_Stats'
import ProvinceTimeline from '@/components/dashboard/ProvinceTimeline'
import GenderChart from '@/components/nepalStat/GenderChart'
export default {
  components: {
    NepalStats,
    ProvinceTimeline,
    GenderChart
  },
    
}
</script>
