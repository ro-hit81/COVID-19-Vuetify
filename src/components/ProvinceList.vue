<template>
    <v-expansion-panels inset focusable hover class="provinceList mt-3">
        <v-expansion-panel 
                    v-for="(Province, index) in Provinces" 
                    :key="index" 
                    class="grey lighten-3" 
                    @click="clicked(NepalData)" 
                    >
        <v-expansion-panel-header class="mx-auto">
            {{Province.properties.PR_NAME}}
            <template v-slot:actions>
            <v-icon color="primary">$expand</v-icon>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div class="mt-2">
                <span>Province: </span>
            <span class="blue-grey--text">{{Province.properties.PROVINCE}}</span>
            </div>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import Data from '@/assets/Province.json'

export default {
    data(){
        return{
            Provinces: [],
        }
    },
    methods: {
    //   clicked: function(NepalData) {
    //     this.$root.$emit('clicked-district', NepalData)
    //   },
    },
    created(){
        this.Provinces = Data.features
    },
}
</script>

<style scoped>
.provinceList{
  max-height: 75vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
.provinceList::-webkit-scrollbar { 
    width: 0;
  height: 0;
}
</style>