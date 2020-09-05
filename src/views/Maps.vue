<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <district />
    </v-row>
  </div>
</template>

<script>
import District from '@/components/maps/District'

export default {
  components: {
    District,
  },
  data() {
    return {
  
    }
  }

}
</script>