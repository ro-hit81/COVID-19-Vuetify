<template>
    <v-col cols="3" class="text-center">
        <h3>District List</h3>
        <v-expansion-panels inset focusable hover class="districtList mt-3">
          <v-expansion-panel v-for="NepalData in NepalDatas" :key="NepalData.properties.OBJECTID" class="grey lighten-3">
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
</template>

<script>
import Data from '@/assets/Nepal.json'

export default {
    data(){
        return{
            NepalDatas: [],
        }
    },
    created(){
        this.NepalDatas = Data.features
    } 
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