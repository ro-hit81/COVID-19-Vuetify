<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>

      <DistrictList />

      <NepalMap />
      
    </v-row>
  </div>
</template>

<script>
import DistrictList from '@/components/DistrictList'
import NepalMap from '@/components/NepalMap'

export default {
  components: {
    DistrictList: DistrictList,
    NepalMap: NepalMap
  },

}
</script>