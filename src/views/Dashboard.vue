<template>
  <v-container id="dashboard" fluid tag="section" >
    <v-row>
      <v-col cols="12" lg="4" md="3">
        <v-card class="mt-9 card_hold mx-auto"  max-width="410" height="300" ripple rounded>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-title>COVID-19</v-card-title>
          <v-card-subtitle>Cases in Nepal</v-card-subtitle>
          <v-card-actions>
            <v-icon small class="ml-1">mdi-alarm-check</v-icon>
            <span class="caption ml-2"> updated 10 minutes ago</span>
          </v-card-actions>
        </v-card>
        <v-sheet color="blue lighten-1" max-width="390" height="210" class="sheet_hold mx-auto" elevation="4" rounded>
          <LineChart/>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="4" md="3">
        <v-card class="mt-9 card_hold mx-auto"  max-width="410" height="300" ripple rounded>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-title>COVID-19</v-card-title>
          <v-card-subtitle>Cases in Nepal</v-card-subtitle>
          <v-card-actions>
            <v-icon small class="ml-1">mdi-alarm-check</v-icon>
            <span class="caption ml-2"> updated 10 minutes ago</span>
          </v-card-actions>
        </v-card>
        <v-sheet color="green darken-1" max-width="390" height="210" class="sheet_hold mx-auto" elevation="4" rounded>
          <LineChart/>
        </v-sheet>
      </v-col>
      <v-col cols="12" lg="4" md="3">
        <v-card class="mt-9 card_hold mx-auto"  max-width="410" height="300" ripple rounded>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-subtitle>Nepal</v-card-subtitle>
          <v-card-title>COVID-19</v-card-title>
          <v-card-subtitle>Cases in Nepal</v-card-subtitle>
          <v-card-actions>
            <v-icon small class="ml-1">mdi-alarm-check</v-icon>
            <span class="caption ml-2"> updated 10 minutes ago</span>
          </v-card-actions>
        </v-card>
        <v-sheet color="green darken-1" max-width="390" height="210" class="sheet_hold mx-auto" elevation="4" rounded>
          <LineChart/>
        </v-sheet>
      </v-col>
      
    </v-row>
    
  </v-container>
</template>
 
<script>
import LineChart from '@/components/LineChart'

export default {
  components: {
    LineChart: LineChart
  }

}
</script>
<style scoped>
.card_hold{
  display: block;
}
.sheet_hold{
  position: relative;
  margin-top: -340px;
}
</style>
