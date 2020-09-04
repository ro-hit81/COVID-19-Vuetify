<template>
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" class="text-center">
        <v-bottom-navigation :value="activeBtn" color="deep-purple" grow shift>
            <v-btn @click="show_province= true; show_district= false">
                <span>PROVINCES</span>
                <v-icon>mdi-alpha-p-circle-outline</v-icon>
                <!-- <v-route></v-route> -->
            </v-btn>
            <v-btn @click="show_district= true; show_province= false">
                <span>DISTRICTS</span>
                <v-icon>mdi-alpha-d-circle-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <ProvinceList v-show="show_province"/>
        <DistrictList v-show="show_district"/>
    </v-col>
</template>

<script>
import DistrictList from '@/components/maps/DistrictList'
import ProvinceList from '@/components/maps/ProvinceList'


export default {
    components: {
        DistrictList: DistrictList,
        ProvinceList: ProvinceList
    },
    data() {
        return {
            activeBtn: 0,
            show_district: false,
            show_province: true,
        }
    }
}
</script>