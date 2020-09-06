<template>
    <v-container class="mt-4">
    <h1 class="subheading grey--text text-center">Top 10 COVID-19 Infected Countries</h1>
        <v-card class="mt-4">
            <v-data-table
                class="elevation-1"
                :headers="headers"
                :items="top10_countries"
                loading="true"
                loading-text="!!! Sorry for the delay. Fetching data ..... Please wait !!!"
                hide-default-footer
            />
        </v-card>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
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
}
</script>