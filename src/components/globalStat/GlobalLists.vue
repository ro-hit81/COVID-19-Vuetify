<template>
    <v-container class="my-3 grey lighten-4 my-2">
      
        <!-- <v-row>
            <v-col>
                <h3 class="grey--text">
                    <span>Sort by:</span>
                </h3>
            </v-col>
            <v-col class="text-center">
                <v-tooltip top>
                    <template v-slot:activator = '{on}'>
                        <v-btn outlined block small color="success" class="blue-grey--text darken-4 text-center mt-5" v-on="on">
                            <span>{{globalDateConvert.global_date}}</span>
                        </v-btn>
                    </template>
                    <span>List is updated at this date !!!</span>
                </v-tooltip>
            </v-col>

            <v-col class="text-center">
                <v-tooltip top>
                    <template v-slot:activator = '{on}'>
                        <v-btn outlined block small color="success" class="blue-grey--text darken-4 text-center mt-5" v-on="on">
                            <span>{{globalDateConvert.global_time}} GMT</span>
                        </v-btn>
                     </template>
                    <span>List is updated at this time !!!</span>
                </v-tooltip>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By Country Name</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By Total Confirmed</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By New Confirmed</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By Total Recovered</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By New Recovered</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By Total Deaths</span>
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
                            <span class="caption text-lowercase indigo--text text-darken-4">By New Deaths</span>
                        </v-btn>
                    </template>
                    <span>Sort list by New Deaths case from highest to lowest !!!</span>
                </v-tooltip>
            </v-col>        
        </v-row>

        <v-card>
            <v-row class="text-center pa-3 grey lighten-4 my-3">
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

        <v-container class="table-stat">
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
      </v-container> -->
        <v-card>
            <v-row>
                <v-col>
                    <v-card-title>Global Stats List</v-card-title>
                </v-col>
            <v-spacer></v-spacer>
                <v-col>
                    <v-text-field
                        label="Search Country or any statistical value"
                        color="deep-purple accent-2"
                        v-model="received"
                        clearable
                        append-icon="mdi-flag"
                    >
                    </v-text-field>
                </v-col>
             </v-row>
            <v-data-table
                class="elevation-1"
                :headers="headers"
                :items="country_stats"
                :items-per-page="10"
                :sort-by="['Country']"
                :search="received"
                loading="true"
                loading-text="!!! Sorry for the delay. Fetching data ..... Please wait !!!"
            >
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    data() {
        return{
            received: '',
            headers: [
            {
                text: 'Country',
                align: 'start',
                value: 'Country',
            },
            { text: 'Total Confirmed', value: 'TotalConfirmed' },
            { text: 'New confirmed', value: 'NewConfirmed' },
            { text: 'Total Recovered', value: 'TotalRecovered' },
            { text: 'New Recovered', value: 'NewRecovered' },
            { text: 'Total Deaths', value: 'TotalDeaths' },
            { text: 'New Deaths', value: 'NewDeaths' },
            ],
            country: []
        }
    },
    // methods:{
    //     sortBy(prop) {
    //         this.country_stats.sort((a,b) => a[prop] > b[prop] ? -1:1)
    //     },
    // },
    computed: {
        ...mapState([
            'country_stats',
        ]),
        ...mapGetters([
            'globalDateConvert'
        ]),
        // filteredStats: function(){
        //     return this.country_stats.filter((stat) => {
        //         return stat.Country.match(this.received.charAt(0).toUpperCase() + this.received.slice(1));
        //     });
        // },
    },
    mounted() {
        this.$store.dispatch('loadGlobalStats')
    },
}
</script>

<style>
.table-stat{
  overflow-y: scroll;
  height: 500px;
}
</style>