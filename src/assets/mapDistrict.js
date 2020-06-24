import axios from 'axios'

const data = []
const data_top5 =[]
const district_list = []
const district_cases=[]

axios.get('https://data.nepalcorona.info/api/v1/districts').then((res) => {
    const array = res.data.map(item => ({
        id: item.id,
        centroid: item.centroid,
        district_name: item.title_en
    }))
    district_list.push(...array)
})
axios.get('https://data.nepalcorona.info/api/v1/covid/summary').then((res) => {
    const array = res.data.district.cases.map(item => ({
        id: item.district,
        cases: item.count
    }))
    district_cases.push(...array)
    const mergingList = district_list.map(a => ({
        ...(district_cases.find((b) => (b.id === a.id) && b) || {cases: 0, }), ...a
        })
    )
    for(let i=0; i< mergingList.length; i++) {
        data.push([
            mergingList[i].centroid.coordinates[0],
            mergingList[i].centroid.coordinates[1],
            mergingList[i].cases,
            mergingList[i].district_name
        ])
    }
    const cases = mergingList.sort((a,b) => {
        return b.cases - a.cases
    })
    const top5= cases.slice(0,5)
    for(let i=0; i< top5.length; i++) {
        data_top5.push([
            top5[i].centroid.coordinates[0],
            top5[i].centroid.coordinates[1],
            top5[i].cases,
            top5[i].district_name
        ])
    }
})
export default {
    title: {
        text: 'COVID-19 Case',
        textStyle: {
            color: '#ffffff',
            fontWeight: 'normal'
        },
        subtext: 'District wise',
        subtextStyle: {
            color: '#CFD8DC'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'left',
        data: ['Cases','Top 5 cases'],
        textStyle: {
            color: '#fff'
        }
    },
    toolbox: {
        left: 'right',
        bottom: 'bottom',
        feature: {
            saveAsImage: {
                type: 'png',
                title: 'save as image',
                name: 'COVID-19 Case District Wise',
                excludeComponents: ['toolbox'],
                backgroundColor: '#FF6F00',
                emphasis: {
                    iconStyle: {
                        borderColor: '#76FF03',
                    },
                }
            },
            restore: {
                show: true,
                title: 'Reset Zoom',
                emphasis: {
                    iconStyle: {
                        borderColor: '#76FF03',
                    }
                }
            }
        },
        iconStyle: {
            borderColor: '#fff',
        }
    },
    series: [
        {
            name: 'Cases',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: data,
            roam: true,
            symbolSize: function(params) {
                return params[2] > 50 ? params[2]/30 : 3
            },
            tooltip: {
                formatter: function (val) {
                    return val.value[3] + ' district has ' + val.value[2] +' cases.'
                },
                backgroundColor: '#FFB74D'
            },
            itemStyle: {
                normal: {
                    color: '#1565c0'
                }
            }
        },
        {
            name: 'Top 5 cases',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: data_top5,
            symbolSize: function(params) {
                return params[2]/40
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            tooltip: {
                formatter: function(val) {
                    return val.value[3] +' district is in Top-5 list with ' + val.value[2] + ' cases.'
                },
                backgroundColor: '#FFB74D'
            },
            itemStyle: {
                normal: {
                    color: '#aa00ff',
                    shadowBlur: 10,
                    shadowColor: '#ea80fc'
                }
            }
        }
    ],
    geo: {
        type: 'map',
        map: 'NepalDistrict',
        label: {
            emphasis: {
                show: true
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#B0BEC5',
                borderColor: '#000000'
            },
            emphasis: {
                areaColor: '#FFE0B2'
            }
        }
    }
}