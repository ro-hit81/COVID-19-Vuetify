<template>
    <div  class="mx-5">
        <h1 class="subheading grey--text">FAQs</h1>
        <v-row class="mx-8" justify="center">
            <v-chip ripple class="ma-4 " color="deep-purple lighten-1" text-color="white" @click="all">
                <v-avatar left>
                    <v-icon>mdi-plus-circle</v-icon>
                </v-avatar>
                Expand All
            </v-chip>
            <v-chip ripple class="ma-4 " color="light-green darken-2" text-color="white">
                <v-avatar left class="light-green darken-4">
                    {{this.panel.length}}
                </v-avatar>
                Expanded
            </v-chip>
            <v-chip ripple class="ma-4 " color="brown darken-2" text-color="white" @click="none">
                <v-avatar left>
                    <v-icon>mdi-do-not-disturb</v-icon>
                </v-avatar>
                Collapse All
            </v-chip>
            <v-chip ripple class="ma-4 " color="success" text-color="white">
                <v-avatar left class="green darken-4">
                    {{tot_quest}}
                </v-avatar>
                Total Questions
            </v-chip>
            <v-chip ripple class="ma-4" color="orange" text-color="white">
                <v-avatar left class="orange darken-4">
                    {{shown_quest}}
                </v-avatar>
                Shown Questions
            </v-chip>
            <v-chip ripple class="ma-4" color="light-blue" text-color="white">
                <v-avatar left class="light-blue darken-4">
                    {{page}}
                </v-avatar>
                Page Number
            </v-chip>
        </v-row>

        <v-card class="mx-4 grey lighten-3" shaped>
            <v-card-title class="subtitle-2 grey--text">
                Expanded Question Index:
            </v-card-title>
            <v-card-subtitle class="font-italic font-weight-medium">
                {{ panel }}
            </v-card-subtitle>
        </v-card>

        <v-row class="my-2" justify="center">
            <v-col offset-md="4">
                <v-btn rounded color="lime darken-3" dark outlined @click="show_english= true; show_nepali= false">
                    <v-icon>mdi-alpha-e-circle</v-icon>
                    English
                </v-btn>
            </v-col>
            <v-col md="6">
                <v-btn rounded color="lime darken-3" dark outlined @click="show_english= false; show_nepali= true">
                    <v-icon>mdi-abugida-devanagari</v-icon>
                    Nepali
                </v-btn>
            </v-col>
        </v-row>

        <v-expansion-panels v-model="panel" multiple popout focusable hover v-show="show_english">
            <v-expansion-panel v-for="(Faqsdata,index) in Faqsdatas" :key="Faqsdata._id">
                <v-expansion-panel-header class="font-weight-bold blue-grey--text">
                    {{index+1}}) {{Faqsdata.question}}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="grey--text text-justify mx-4">
                    {{Faqsdata.answer}}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels v-model="panel" multiple popout focusable hover v-show="show_nepali">
            <v-expansion-panel v-for="(Faqsdata,index) in Faqsdatas" :key="Faqsdata._id">
                <v-expansion-panel-header class="font-weight-bold blue-grey--text">
                    {{index+1}}) {{Faqsdata.question_np}}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="grey--text text-justify mx-4">
                    {{Faqsdata.answer_np}}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data() {
        return {
            tot_quest: '',
            shown_quest: '',
            page: '',
            Faqsdatas: [],
            panel:[],
            data_length: '',
            show_english: true,
            show_nepali: false,
        }
    },
    created() {
        axios.get('https://nepalcorona.info/api/v1/faqs').then((res) => {
            this.tot_quest = res.data.limit
            this.shown_quest = res.data.total
            this.page = res.data.page
            this.Faqsdatas = res.data.data
            this.data_length = this.Faqsdatas.length
        })
    },
    methods: {
        all() {
            this.panel = [...Array(this.data_length).keys()].map((k, i)=> i)
        },
        none() {
            this.panel = []
        }
    },
}
</script>