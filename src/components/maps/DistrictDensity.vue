<template>
    <v-col cols="12" xs="12" sm="12" md="9" lg="9">
    </v-col>
</template>

<script>
import axios from 'axios'
const coronaData = []
axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
  const array = res.data
  const groups= array.reduce((acc, arr) => {
      const district = arr.district
      if(!acc[district]) {
          acc[district]= []
      }
      acc[district].push(arr)
      return acc
  }, {})
  const groupingDistrict = Object.keys(groups).map((district) => {
      return {
          district: district,
          district_id: parseInt(district),
          infected: groups[district].length,
      }
  })
  coronaData.push(...groupingDistrict)
  console.log(coronaData)
})

export default {
    
}
</script>