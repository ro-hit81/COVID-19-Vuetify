<template>
    <div>
        <h1 class="text-center">
          <span class="subheading grey--text mt-4">Choropleth Map </span>
          <span class="subtitle-2 grey--text" > (Maps are one way binded on purpose)</span>
        </h1>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <province-density />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <district-density />
        </v-col>
      </v-row>
    </div>
</template>

<script>
import DistrictDensity from '@/components/maps/DistrictDensity'
import ProvinceDensity from '@/components/maps/ProvinceDensity'

export default {
    components: {
        DistrictDensity,
        ProvinceDensity
    }
}
</script>