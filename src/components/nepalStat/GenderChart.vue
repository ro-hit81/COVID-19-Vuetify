<template>
    <v-col  xs="12" sm="12" md="12">
        <v-card color="cyan lighten-5" height="600" class="mb-12 mx-3 mt-12">
            <v-card-title>COVID-19 cases(Gender Chart)</v-card-title>
            <v-chart
            
                autoresize
            >
            </v-chart>
        </v-card>
    </v-col>
</template>

<script>
import Echarts from 'vue-echarts'
import axios from 'axios'
 
const data = []
const date = []
let male, female, unknown = []

axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
    const array = res.data
    const groups = array.reduce((groups, info) => {
        const date = info.reportedOn
        if(!groups[date]) {
            groups[date] = []
        }
        groups[date].push(info)
        return groups
    }, {})
    const groupingDate = Object.keys(groups).map((date) => {
        return {
            date :date,
            infos: groups[date]
        }
    })
    const sortedData = groupingDate.sort((a, b) => {
        var dateA = new Date(a.date), dateB = new Date(b.date)
        return dateA - dateB
    })
    for(let i=0; i<sortedData.length; i++) {
        date.push(sortedData[i].date)
        const new_array = sortedData[i].infos
        const new_groups = new_array.reduce((new_groups, genderInfo) => {
            const gender = genderInfo.gender && genderInfo.gender.toLowerCase()
            if(!new_groups[gender]) {
                new_groups[gender] = []
            }
            new_groups[gender].push(genderInfo)
            return new_groups
        }, {})
        const groupingGender = Object.keys(new_groups).map((gender) => {
            return {
                gender: gender,
                cases: new_groups[gender].length
            }
        })
        data.push(groupingGender)
    }
    const group = data.reduce((acc, arr, i) => {
        for(const gender in acc) {
            acc[gender].push(0);
        }
        for(const {gender,cases} of arr) {
            if(!acc[gender])
            acc[gender] = [ ...Array(i).fill(0)]
            acc[gender][i] =cases
        }
        return acc
    }, {})
    male= group.male
    female = group.female
    unknown = group.null
    console.log(male, female, unknown)
})

export default {
    components: {
        'v-chart': Echarts,
    }
}
</script>