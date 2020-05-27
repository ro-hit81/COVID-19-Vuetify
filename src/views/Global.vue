<template>
  <div class="global grey lighten-3">
    <h1 class="subheading grey--text">Global</h1>
    
    <v-container class="grey lighten-4 my-2">
      <v-row justify="center">
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totc_value color="deep-orange darken-1">
            <h2>{{statsGlobal.TotalConfirmed}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newc_value color="pink lighten-1">
            <h2>{{statsGlobal.NewConfirmed}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Confirmed Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totr_value color="light-green accent-3">
            <h2>{{statsGlobal.TotalRecovered}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newr_value color="purple lighten-1">
            <h2>{{statsGlobal.NewRecovered}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">New Recovered Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=totd_value color="blue darken-2">
            <h2>{{statsGlobal.TotalDeaths}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5">Total Death Case</h3>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4" class="text-center">
          <v-progress-circular :rotate="360" :size="180" :width="40" :value=newd_value color="light-blue darken-1">
            <h2>{{statsGlobal.NewDeaths}}</h2>
          </v-progress-circular>
          <h3 class="blue-grey--text darken-4 text-center mt-5"> NewDeath Case</h3>
        </v-col>
      </v-row>

    </v-container>
    <h1 class="subheading grey--text">Stats</h1>

    <v-container class="my-3" grey lighten-3>
      
      <v-row>
        <v-col>
          <h3 class="grey--text">
            <span>Sort by:</span>
          </h3>
        </v-col>

        <v-col class="text-center">
          <v-btn outlined block small color="success" class="blue-grey--text darken-4 text-center mt-5">
            <span>{{statsGlobalCountries[0].Date | date-ext}}</span>
          </v-btn>
        </v-col>

        <v-col class="text-center">
          <v-btn outlined block small color="success" class="blue-grey--text darken-4 text-center mt-5">
            <span>{{statsGlobalCountries[0].Date | time-ext}} GMT</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-text-field label="Search Country" v-model="received" append-icon="mdi-flag"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="my-4">
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('Country')" v-on="on">
                <v-icon left>mdi-flag</v-icon>
                <span class="caption text-lowercase">By Country Name</span>
              </v-btn>
            </template>
            <span>Sort list by country in alphabetical order !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('TotalConfirmed')" v-on="on">
                <v-icon left>mdi-account-group</v-icon>
                <span class="caption text-lowercase">By Total Confirmed</span>
              </v-btn>
            </template>
            <span>Sort list by Total Confirmed case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('NewConfirmed')" v-on="on">
                <v-icon left>mdi-account-switch-outline</v-icon>
                <span class="caption text-lowercase">By New Confirmed</span>
              </v-btn>
            </template>
            <span>Sort list by New Confirmed case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('TotalRecovered')" v-on="on">
                <v-icon left>mdi-account-check</v-icon>
                <span class="caption text-lowercase">By Total Recovered</span>
              </v-btn>
            </template>
          <span>Sort list by Total Recovered case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('NewRecovered')" v-on="on">
                <v-icon left>mdi-account-star</v-icon>
                <span class="caption text-lowercase">By New Recovered</span>
              </v-btn>
            </template>
            <span>Sort list by New Recovered case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text" @click="sortBy('TotalDeaths')" v-on="on">
                <v-icon left>mdi-account-remove</v-icon>
                <span class="caption text-lowercase">By Total Deaths</span>
              </v-btn>
            </template>
            <span>Sort list by Total Death case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>

        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small depressed color="searchbtn--text " @click="sortBy('NewDeaths')" v-on="on">
                <v-icon left>mdi-account-alert</v-icon>
                <span class="caption text-lowercase">By New Deaths</span>
              </v-btn>
            </template>
            <span>Sort list by New Deaths case from highest to lowest !!!</span>
          </v-tooltip>
        </v-col>        
        
      </v-row>

      <v-card>

         <v-row class="text-center pa-3">

          <v-col>
            <div class="caption stat_title--text">Country Name</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">Total Confirmed</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">New Confirmed</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">Total Recovered</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">New Recovered</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">Total Deaths</div><br>
          </v-col>
          <v-col>
            <div class="caption stat_title--text">New Deaths</div><br>
          </v-col>

        </v-row>

      </v-card>

      <v-card v-for="country in filteredStats" :key="country.Country" justify="center" class="text-center" hover>

        <v-row >

          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.Country}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.TotalConfirmed}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.NewConfirmed}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.TotalRecovered}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.NewRecovered}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.TotalDeaths}}</div>
          </v-col>
          <v-col xs12 sm6>
            <div class="caption stat_content--text">{{country.NewDeaths}}</div>
          </v-col>

        </v-row>

        <v-divider></v-divider>

      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
data() {
  return{
    statsGlobal: [
        
      ],
    statsGlobalCountries : [

    ],
    received: '',
    }
  },
  methods:{
    sortBy(prop) {
      this.statsGlobalCountries.sort((a,b) => a[prop] > b[prop] ? -1:1)
    },

  },
  created() {
    this.$http.get(process.env.VUE_APP_GlobalStatAPI).then(function(data) {
      // console.log(data);
      this.statsGlobal = data.body.Global;
      this.statsGlobalCountries = data.body.Countries;
    });
  },
  computed:{
    filteredStats: function(){
      return this.statsGlobalCountries.filter((stat) => {
        return stat.Country.match(this.received);
      });
    },
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
  }  

}
</script>