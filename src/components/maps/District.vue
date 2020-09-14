<template>
    <div>
        <v-row>
            
            <v-col cols="12" xs="12" sm="12" md="9" lg="9">
                <district-density />
                <!-- <nepal-map /> -->
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="3" lg="3" class="text-center">
                <v-bottom-navigation class="pr-2" :value="activeBtn" color="deep-purple" shift>
                    <v-btn class="mx-auto">
                        <v-icon>mdi-alpha-d-circle-outline</v-icon>
                    </v-btn>
                    <v-text-field label="Search District" v-model="received" append-icon="mdi-emoticon-confused" color="deep-purple darken-1"></v-text-field>
                </v-bottom-navigation>
                <!-- <district-list /> -->
                <v-expansion-panels inset focusable hover class="districtList mt-3">
                    <v-expansion-panel 
                                    v-for="(NepalData, index) in filteredStats" 
                                    :key="index" 
                                    class="grey lighten-3" 
                                    @click="clicked(NepalData)" 
                                    >
                        <v-expansion-panel-header class="mx-auto">
                        {{NepalData.properties.DISTRICT}}
                        <template v-slot:actions>
                            <v-icon color="primary">$expand</v-icon>
                        </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                        <div class="mt-2">
                            <span>Province: </span>
                            <span class="blue-grey--text">{{NepalData.properties.PR_NAME}}</span>
                        </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Data from '@/assets/District.json'
// import DistrictList from '@/components/maps/DistrictList'
import DistrictDensity from '@/components/maps/DistrictDensity'
// import NepalMap from '@/components/maps/NepalMap'


export default {
    components: {
        // DistrictList,
        DistrictDensity,
        // NepalMap
    },
    data() {
        return {
            activeBtn: 1,
            NepalDatas: [],
            received: ''
        }
    },
    computed: {
       filteredStats: function(){
            return this.NepalDatas.filter((stat) => {
                return stat.properties.DISTRICT.match(this.received.charAt(0).toUpperCase() + this.received.slice(1));
            });
        }, 
    },
    methods: {
      clicked: function(NepalData) {
        this.$root.$emit('clicked-district', NepalData)
      },
    },
    created(){
        this.NepalDatas = Data.features
    },
}
</script>

<style scoped>
.districtList{
    max-height: 75vh;
    overflow-y: scroll;
    scrollbar-width: none;
}
.districtList::-webkit-scrollbar { 
    width: 0;
    height: 0;
}
</style>