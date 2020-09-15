<template>
    <v-col  xs="12" sm="12" md="12">
      <h1 class="subheading grey--text">Gender versus chart</h1>
        <v-card color="orange lighten-5" height="600" class="mb-12 mx-3 mt-5">
            <v-chart
                :options="options"
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
const male = []
const female = []
const unknown = []
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
    male.push(...group.male)
    female.push(...group.female)
    unknown.push(...group.null)
})

var labelOption = {
    show: true,
    position: 'insideBottom',
    distance: 15,
    align: 'left',
    verticalAlign:'middle',
    rotate: 90,
    formatter: '{c}  {name|{a}}',
    fontSize: 10,
    rich: {
        name: {
            textBorderColor: '#fff'
        }
    }
};
export default {
    components: {
        'v-chart': Echarts,
    },
    data() {
        return {
            options: {
                color: ['#7C4DFF', '#F06292', '#00B0FF'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                toolbox: {
                    show: true,
                    itemSize: 30,
                    orient: 'vertical',
                    right: 25,
                    top: 'center',
                    iconStyle: {
                        borderColor: '#7C4DFF',
                        borderWidth: 2
                    },
                    feature: {
                        mark: {show: true},
                        dataView: {
                            show: true,
                            readOnly: true,
                            title: 'View data in table.',
                            lang: ['Data view', 'close'],
                            backgroundColor: '#B39DDB',
                            buttonColor: '#512DA8'
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar', 'stack', 'tiled'],
                            title: {
                                line: 'Line chart',
                                bar: 'Bar Chart',
                                stack: 'Stack Chart',
                                tiled: 'Tiles'
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Reset setting'
                        },
                        saveAsImage: {
                            show: true,
                            name: 'Male-Female Chart',
                            title: 'Save as image',
                            type: 'png',
                            pixelRatio: 10
                        }
                    }
                },
                legend: {
                    data: ['Female', 'Male', 'Undefined']
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        data: date
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Male',
                        type: 'bar',
                        barGap: 0,
                        label: labelOption,
                        data: male
                    },
                    {
                        name: 'Female',
                        type: 'bar',
                        label: labelOption,
                        data: female
                    },
                    {
                        name: 'Undefined',
                        type: 'bar',
                        label: labelOption,
                        data: unknown
                    }
                ],
                dataZoom: [
                    {
                    type: 'inside',
                    start: 97,
                    end: 100
                    },
                    {
                    start: 95,
                    end:100,
                    backgroundColor: '#FFF3E0',
                    dataBackround: {
                        areaStyle: {
                            color: '#FFF3E0',
                        },
                    },
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                        }
                    }
                ],
            }
        }
    }
}
</script>