<template>
    <div>
        <h1 class="subheading grey--text">Myths</h1>
        <v-container>
            <v-row>
                <v-col>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn small depressed color="searchbtn--text" @click="sortBy('myth')" v-on="on">
                                <v-icon left>mdi-emoticon-confused</v-icon>
                                <span class="caption text-lowercase">By Myth</span>
                            </v-btn>
                        </template>
                        <span>Sort list by Myth !!!</span>
                    </v-tooltip>
                </v-col>
                <v-col>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn small depressed color="searchbtn--text" @click="sortBy('reality')" v-on="on">
                                <v-icon left>mdi-emoticon-cool</v-icon>
                                <span class="caption text-lowercase">By Reality</span>
                            </v-btn>
                        </template>
                        <span>Sort list by Reality</span>
                    </v-tooltip>
                </v-col>
                <v-col>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn small depressed color="searchbtn--text" @click="sortBy('date')" v-on="on">
                                <v-icon left>mdi-calendar-month</v-icon>
                                <span class="caption text-lowercase">By Date</span>
                            </v-btn>
                        </template>
                        <span>Sort list by Date !!!</span>
                    </v-tooltip>
                </v-col>
                <v-col>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn small depressed color="searchbtn--text" @click="sortBy('source_name')" v-on="on">
                                <v-icon left>mdi-account-check</v-icon>
                                <span class="caption text-lowercase">By Source</span>
                            </v-btn>
                        </template>
                        <span>Sort list by Source</span>
                    </v-tooltip>
                </v-col> 
                <v-col >
                    <v-text-field label="Search Myth" v-model="received" append-icon="mdi-emoticon-confused" color="deep-purple darken-1"></v-text-field>
                </v-col>       
            </v-row>
        </v-container>
        <v-container mx-auto grey lighten-3 class="myths">
            <v-card flat hover v-for="Mythdata in filteredMythDatas" :key="Mythdata._id" height="160px" @click.stop="dialog = true" @click="clicked(Mythdata)">
                <v-row :class="`pa-3 myth ${Mythdata.source_name}`">
                    <v-col col="1" xs="1" sm="1" md="1" lg="1" xl="1">
                        <v-responsive class="pt-7" justify="center" align="center">
                            <v-avatar size="70">
                                <img :src="Mythdata.image_url" alt="Myth Image">
                            </v-avatar>
                        </v-responsive>
                    </v-col>
                    <v-col col="2" xs="2" sm="2" md="2" lg="2" xl="2">
                        <div class="caption grey--text text-center">Myth</div>
                        <div class="body-2">{{Mythdata.myth}}</div>
                    </v-col>
                    <v-col col="5" xs="5" sm="5" md="5" lg="5" xl="5">
                        <div class="caption grey--text text-center">Reality</div>
                        <div class="body-2">{{Mythdata.reality}}</div>
                    </v-col>
                    <v-col col="2" xs="2" sm="2" md="2" lg="2" xl="2">
                        <div class="caption grey--text text-center">Date</div>
                        <div class="text-center my-12">{{Mythdata.created_at | date-filter}}</div>
                    </v-col>
                    <v-col col="2" xs="2" sm="2" md="2" lg="2" xl="2" class="text-center">
                        <div class="caption grey--text text-center">Source</div>
                        <v-chip small :class="`source ${Mythdata.source_name} white--text  caption my-12`">{{Mythdata.source_name}}</v-chip>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
            <v-dialog v-model="dialog" max-width="600" class="grey">
                <v-card class="mx-auto" dark shaped>
                    <v-responsive align="center">
                            <v-avatar size="300" class="mt-4" tile>
                                <img :src="dialogData.image_url" alt="Myth Image">
                            </v-avatar>
                        </v-responsive>
                    <v-card-title class="ma-3 body-2 font-weight-bold">
                        Source: {{dialogData.source_name}}
                    </v-card-title>
                    <v-card-subtitle>
                        <span class="font-weight-bold">Myth:</span> {{dialogData.myth}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn class="ma-3 blue" small dark ripple rounded :href="dialogData.source_url">
                            Original post
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="visible = !visible">
                            <v-icon>{{ visible ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="visible">
                            <v-divider></v-divider>
                            <v-card-title class="grey--text font-weight-bold">
                                Reality:
                            </v-card-title>
                            <v-card-text class="grey--text">
                                {{dialogData.reality}}
                            </v-card-text>

                        </div>
                    </v-expand-transition>
                </v-card>
            </v-dialog>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Mythdatas: [],
            received: '',
            dialog: false,
            dialogData: {},
            visible:false
        }
    },
    created() {
        axios.get('https://nepalcorona.info/api/v1/myths').then((res) => {
            this.Mythdatas = res.data.data
        })
    },
    methods:{
        sortBy(prop) {
            this.Mythdatas.sort((a,b) => a[prop] > b[prop] ? 1:-1)
        },
        clicked: function(Mythdata) {
            this.dialogData = Mythdata
            console.log(this.dialogData)
        }
    },
    computed: {
        filteredMythDatas: function(){
            return this.Mythdatas.filter((data) => {
                return data.myth.match(this.received);
            });
        },
    },
}
</script>
<style scoped>
.myth.WHO {
    border-left:4px solid #1E88E5;
}
.myth.UNICEF {
    border-left:4px solid #651FFF;
}
.myth {
    border-left:4px solid #F57C00;
}
.myth.NepalCorona{
    border-left:4px solid #689F38;
}
.myth.Ministry{
    border-left:4px solid #E53935;
}
.myth.Emergency{
    border-left:4px solid #D50000;
}
.v-chip.source.WHO {
    background: #1E88E5;
}
.v-chip.source.UNICEF {
    background: #651FFF;
}
.v-chip.source {
    background: #F57C00;
}
.v-chip.source.NepalCorona{
    background: #689F38;
}
.v-chip.source.Ministry{
    background: #E53935;
}
.v-chip.source.Emergency{
    background: #D50000;
}
.myths{
    max-height: 80vh;
    overflow-y: scroll;
    /* scrollbar-width: none; */
}
/* .myths::-webkit-scrollbar { 
    width: 0;
    height: 0;
} */
</style>