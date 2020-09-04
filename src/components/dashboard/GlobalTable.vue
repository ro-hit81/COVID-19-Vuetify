<template>
    <v-container class="mt-12">
    <h1 class="subheading grey--text text-center">Top 10 COVID-19 Infected Countries</h1>
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
        <v-card v-for="country in top10_countries" :key="country.Country" justify="center" class="text-center" hover>
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
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            countries: []
        }
    },
    computed: {
        ...mapState([
            'top10_countries',
        ]),
    },
    mounted() {
        this.$store.dispatch('loadGlobalStats')
    },
    // method: {
    //     filteredStats: function() {
    //         this.countries = this.country_stats 
    //         return this.countries.sort((a, b) => {
    //             return b.TotalConfirmed - a.TotalConfirmed
    //         })
    //     }
    // }
}
</script>