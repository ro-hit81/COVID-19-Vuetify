<template>
    <v-container>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="2" lg="3" class="text-center">
                <province-list />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="9" lg="9">
                <province-density />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProvinceList from '@/components/maps/ProvinceList'
import ProvinceDensity from '@/components/maps/ProvinceDensity'


export default {
    components: {
        ProvinceList,
        ProvinceDensity
    },
    data() {
        return {
            
        }
    }
}
</script>