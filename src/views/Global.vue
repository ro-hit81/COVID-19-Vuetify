<template>
  <div class="global grey lighten-3">
    <h1 class="subheading grey--text">Global</h1>
    
    <Global-Stats />
    
    <h1 class="subheading grey--text">Stats</h1>

    <Global-Lists />

  </div>
</template>

<script>
import GlobalStats from '@/components/globalStat/GlobalStats'
import GlobalLists from '@/components/globalStat/GlobalLists' 

export default {
  components: {
    'Global-Stats' : GlobalStats,
    'Global-Lists' : GlobalLists
  },

}
</script>
