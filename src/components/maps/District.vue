<template>
    <v-container>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="2" lg="3" class="text-center">
                <district-list />
            </v-col>
            <district-density />
        </v-row>
    </v-container>
</template>

<script>
import DistrictList from '@/components/maps/DistrictList'
import DistrictDensity from '@/components/maps/DistrictDensity'


export default {
    components: {
        DistrictList,
        DistrictDensity
    },
    data() {
        return {
            
        }
    }
}
</script>