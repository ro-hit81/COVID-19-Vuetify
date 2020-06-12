<template>
    <v-container class="grey lighten-4 my-5">
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value="nepal_stats.tested_positive*85/nepal_stats.tested_positive" color="red">
            <h1>{{nepal_stats.tested_positive}}</h1>
          </v-progress-circular>
          <h2 class="blue-grey--text darken-4 text-center mt-5">Total Confirmed Case</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-progress-circular :rotate="270" :size="180" :width="40" :value="nepal_stats.in_isolation*60/nepal_stats.in_isolation" color="pink">
            <h1>{{nepal_stats.in_isolation}}</h1>
          </v-progress-circular>
          <h2 class="blue-grey--text darken-4 text-center mt-5">Active Case</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-progress-circular :rotate="180" :size="180" :width="40" :value="nepal_stats.recovered*35/nepal_stats.recovered" color="success">
            <h1>{{nepal_stats.recovered}}</h1>
          </v-progress-circular>
          <h2 class="blue-grey--text darken-4 text-center mt-5">Recovered Case</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-progress-circular :rotate="60" :size="180" :width="40" :value="nepal_stats.deaths*20/nepal_stats.deaths" color="primary">
            <h1>{{nepal_stats.deaths}}</h1>
          </v-progress-circular>
          <h2 class="blue-grey--text darken-4 text-center mt-5">Death Case</h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-card shaped raised color="deep-orange lighten-2">
            <span class="white--text display-1">{{nepal_stats.tested_total}}</span>
            <h3 class="grey black--text text-center mt-4">Total Tested</h3>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-card shaped raised color="pink lighten-2">
            <span class="white--text display-1">{{nepal_stats.quarantined}}</span>
            <h3 class="grey black--text text-center mt-4">Quarantined</h3>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-card shaped raised color="indigo lighten-2">
            <span class="white--text display-1">{{nepal_stats.tested_rdt}}</span>
            <h3 class="grey black--text text-center mt-4">RDT Tested</h3>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-card shaped raised color="blue lighten-2" >
            <span class="white--text display-1">{{nepal_stats.pending_result}}</span>
            <h3 class="grey black--text text-center mt-4">Pending Result</h3>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn outlined color="success" class="blue-grey--text darken-4 text-center mt-5" v-on="on">
                <span>{{dateConvert.nepal_date}}</span>
              </v-btn>
            </template>
            <span>Stat is update at this date !!!</span>
          </v-tooltip>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Date</h3>
        </v-col>

        <v-col cols="12" xs="12" sm="6" md="6" lg="3" class="text-center">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn outlined color="success" class="blue-grey--text darken-4 text-center mt-5" v-on="on">
                <span>{{dateConvert.nepal_time}} GMT</span>
              </v-btn>
              <h3 class="blue-grey--text darken-4 text-center mt-5">Time</h3>  
            </template>
            <span>Stat is updated at this time !!!</span>
          </v-tooltip>
        </v-col>
      </v-row>
      
    </v-container>
    
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    computed: {
        ...mapState([
            'nepal_stats'
        ]),
        ...mapGetters([
            'dateConvert'
        ]),
    },
    mounted: function() {
        this.$store.dispatch('loadNepalStats')
    }
    
}
</script>
<style scoped>

</style>