<template>
  <div class="maps">
    <h1 class="subheading grey--text">Maps</h1>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" class="text-center mx-auto ">
          <v-bottom-navigation :value="activeBtn" color="deep-purple" grow shift>
              <v-btn @click="show_province= true; show_district= false" class="mx-auto">
                  <span>PROVINCES</span>
                  <v-icon>mdi-alpha-p-circle-outline</v-icon>
                  <!-- <v-route></v-route> -->
              </v-btn>
              <v-divider vertical></v-divider>
              <v-btn @click="show_district= true; show_province= false" class="mx-auto">
                  <span>DISTRICTS</span>
                  <v-icon>mdi-alpha-d-circle-outline</v-icon>
              </v-btn>
          </v-bottom-navigation>
      </v-col>
    </v-row>
    <v-row>
      <district v-show="show_district" />
      <province v-show="show_province" />
    </v-row>
  </div>
</template>

<script>
import District from '@/components/maps/District'
import Province from '@/components/maps/Province'

export default {
  components: {
    District,
    Province
  },
  data() {
    return {
      activeBtn: 0,
      show_district: false,
      show_province: true,
    }
  }

}
</script>