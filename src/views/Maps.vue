<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <NepalList />

      <NepalMap />
      <!-- <new-map /> -->
      
    </v-row>
  </div>
</template>

<script>
import NepalList from '@/components/maps/NepalList'
import NepalMap from '@/components/maps/NepalMap'
// import NewMap from '@/components/NewMap'

export default {
  components: {
    NepalList: NepalList,
    NepalMap: NepalMap,
    // NewMap
  },

}
</script>