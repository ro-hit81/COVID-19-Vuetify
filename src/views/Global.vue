<template>
  <div class="global grey lighten-4">
    <h1 class="subheading grey--text">Global</h1>
    
    <global-stats />
    <v-divider></v-divider>
    <h1 class="subheading grey--text">World Map</h1>
    <global-map />
    
    <v-divider></v-divider>
    <h1 class="subheading grey--text">Stats</h1>

    <global-lists />

  </div>
</template>

<script>
import GlobalStats from '@/components/globalStat/GlobalStats'
import GlobalLists from '@/components/globalStat/GlobalLists'
import GlobalMap from '@/components/globalStat/GlobalMap'

export default {
  components: {
    GlobalStats,
    GlobalLists,
    GlobalMap
  },

}
</script>
