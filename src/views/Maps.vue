<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <NepalList />
      <district-density />
      <!-- <province-density /> -->
      <!-- <NepalMap /> -->
      <!-- <new-map /> -->
      
    </v-row>
  </div>
</template>

<script>
// import ProvinceDensity from '@/components/maps/ProvinceDensity'
import NepalList from '@/components/maps/NepalList'
import DistrictDensity from '@/components/maps/DistrictDensity'
// import NepalMap from '@/components/maps/NepalMap'

export default {
  components: {
    NepalList: NepalList,
    // NepalMap: NepalMap,
    // ProvinceDensity,
    DistrictDensity
  },

}
</script>