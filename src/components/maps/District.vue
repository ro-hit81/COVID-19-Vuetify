<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="2" lg="3" class="text-center">
                <v-bottom-navigation :value="activeBtn" color="deep-purple" grow shift>
                    <v-btn class="mx-auto">
                        <span>DISTRICTS</span>
                        <v-icon>mdi-alpha-d-circle-outline</v-icon>
                    </v-btn>
                </v-bottom-navigation>
                <district-list />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="9" lg="9">
                <!-- <district-density /> -->
                <nepal-map />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import DistrictList from '@/components/maps/DistrictList'
// import DistrictDensity from '@/components/maps/DistrictDensity'
import NepalMap from '@/components/maps/NepalMap'


export default {
    components: {
        DistrictList,
        // DistrictDensity,
        NepalMap
    },
    data() {
        return {
            activeBtn: 1
        }
    }
}
</script>