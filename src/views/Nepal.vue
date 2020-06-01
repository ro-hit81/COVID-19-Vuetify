<template>
  <div class="grey lighten-3 nepal" >
    
    <h1 class="subheading grey--text" >Nepal</h1>

    <Nepal-Stats />
  
    <v-divider></v-divider>
    
  </div>
</template>

<script>
import Nepal_Stats from '@/components/Nepal_Stats'

export default {
  components: {
    'Nepal-Stats': Nepal_Stats,

  },
    
}
</script>
