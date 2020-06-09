<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <NepalList />

      <NepalMap />
      
    </v-row>
  </div>
</template>

<script>
import NepalList from '@/components/NepalList'
import NepalMap from '@/components/NepalMap'

export default {
  components: {
    NepalList: NepalList,
    NepalMap: NepalMap
  },

}
</script>