<template>

    <v-container class="grey lighten-4 my-2">
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="270" :size="180" :width="40" :value="global_stats.TotalConfirmed*90/global_stats.TotalConfirmed" color="deep-orange darken-1">
            <h3>{{global_stats.TotalConfirmed}}</h3>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="90" :size="180" :width="40" :value="global_stats.NewConfirmed*30/global_stats.NewConfirmed" color="pink lighten-1">
            <h3>{{global_stats.NewConfirmed}}</h3>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="0" :size="180" :width="40" :value="global_stats.TotalRecovered*55/global_stats.TotalRecovered" color="light-green accent-3">
            <h3>{{global_stats.TotalRecovered}}</h3>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="180" :size="180" :width="40" :value="global_stats.NewRecovered*17/global_stats.NewRecovered" color="purple lighten-1">
            <h3>{{global_stats.NewRecovered}}</h3>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="60" :size="180" :width="40" :value="global_stats.TotalDeaths*30/global_stats.TotalDeaths" color="blue darken-2">
            <h3>{{global_stats.TotalDeaths}}</h3>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Death Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="120" :size="180" :width="40" :value="global_stats.NewDeaths*10/global_stats.NewDeaths" color="light-blue darken-1">
            <h3>{{global_stats.NewDeaths}}</h3>
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