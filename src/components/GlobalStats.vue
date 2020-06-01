<template>

    <v-container class="grey lighten-4 my-2">
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totc_value color="deep-orange darken-1">
            <h2>{{global_stats.TotalConfirmed}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newc_value color="pink lighten-1">
            <h2>{{global_stats.NewConfirmed}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totr_value color="light-green accent-3">
            <h2>{{global_stats.TotalRecovered}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newr_value color="purple lighten-1">
            <h2>{{global_stats.NewRecovered}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totd_value color="blue darken-2">
            <h2>{{global_stats.TotalDeaths}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Death Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newd_value color="light-blue darken-1">
            <h2>{{global_stats.NewDeaths}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5"> NewDeath Case</h3>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'global_stats'
        ]),
        totc_value: function(){
            return Math.floor(Math.random() * (90-80+1)+80)
        },
        newc_value: function(){
            return Math.floor(Math.random() * (30-20+1)+20)
        },
        totr_value: function(){
            return Math.floor(Math.random() * (60-50+1)+50)
        },
        newr_value: function(){
            return Math.floor(Math.random() * (15-10+1)+10)
        },
        totd_value: function(){
            return Math.floor(Math.random() * (25-20+1)+20)
        },
        newd_value: function(){
            return Math.floor(Math.random() * (10-5+1)+5)
        },
    },
    mounted() {
        this.$store.dispatch('loadGlobalStats');
    }
}
</script>