<template>
  <div class="global grey lighten-4">
    <h1 class="subheading grey--text">Global</h1>
    
    <global-stats />
    
    <h1 class="subheading grey--text">Stats</h1>

    <global-lists />

  </div>
</template>

<script>
import GlobalStats from '@/components/globalStat/GlobalStats'
import GlobalLists from '@/components/globalStat/GlobalLists' 

export default {
  components: {
    GlobalStats,
     GlobalLists
  },

}
</script>
