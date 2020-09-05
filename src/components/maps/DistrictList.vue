<template>
        <v-expansion-panels inset focusable hover class="districtList">
          <v-expansion-panel 
                        v-for="(NepalData, index) in NepalDatas" 
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
</template>

<script>
import Data from '@/assets/District.json'

export default {
    data(){
        return{
            NepalDatas: [],
        }
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