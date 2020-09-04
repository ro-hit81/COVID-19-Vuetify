<template>
  <div class="grey lighten-3 nepal" >
    
    <h1 class="subheading grey--text" >Nepal</h1>

    <Nepal-Stats />
  
    <v-divider></v-divider>
    <province-timeline/>
  </div>
</template>

<script>
import Nepal_Stats from '@/components/Nepal_Stats'
import ProvinceTimeline from '@/components/ProvinceTimeline'

export default {
  components: {
    'Nepal-Stats': Nepal_Stats,
    ProvinceTimeline
  },
    
}
</script>
