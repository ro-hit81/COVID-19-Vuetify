import axios from 'axios'

const date=[]
const totalCases= []
const totalRecoveries= []
const totalDeaths= []


axios.get('https://data.nepalcorona.info/api/v1/covid/timeline').then((res) => {
    const array = res.data    
    for (let i=0; i<array.length; i++) {
        date.push(array[i].date)
        totalCases.push(array[i].totalCases)
        totalRecoveries.push(array[i].totalRecoveries)
        totalDeaths.push(array[i].totalDeaths)
    }
})

export default {
    title: {
      text: 'Covid-19 Cases (NEPAL)',
      textStyle: {
        color: '#ffffff',
        fontWeight: 'normal'
      },
      left: 'center',
      bottom: 'bottom'
    },
    legend: {
        data: ['Cases', 'Recoveries', 'Deaths']
    },
    grid: {
        left: '15%',
        right: '5%',
        top: '15%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'line',
      },
    },
    toolbox: {
        left: 'right',
        bottom: 'bottom',
        feature: {
            saveAsImage: {
                type: 'png',
                title: 'save as image',
                name: 'Multiple Line Chart',
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
    
    xAxis: {
      type: 'category',
      data: date,
      axisLine: {
        lineStyle: {
          color: '#E0E0E0',
        }
      },
      axisPointer: {
        label: {
          formatter: function(params) {
            return 'Date: ' + params.value 
          },
          backgroundColor : '#FFB74D'
        },
  
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#E0E0E0',
        }
      },
      axisPointer:{
        label: {
          backgroundColor: '#FFB74D'
        }
      }
    },
    series: [
        {
            name: 'Cases',
            data: totalCases,
            type: 'line',
            symbol: 'diamond',
            symbolSize: 3,
            itemStyle: {
                color: '#C62828',
            },
            lineStyle: {
                color: '#D32F2F',
                width: 2
            },
        },
        {
            name: 'Recoveries',
            data: totalRecoveries,
            type: 'line',
            symbol: 'diamond',
            symbolSize: 3,
            itemStyle: {
                color: '#76FF03',
            },
            lineStyle: {
                color: '#64DD17',
                width: 2
            },
        },
        {
            name: 'Deaths',
            data: totalDeaths,
            type: 'line',
            symbol: 'diamond',
            symbolSize: 3,
            itemStyle: {
                color: '#1565C0',
            },
            lineStyle: {
                color: '#1565C0',
                width: 2
            },
        },
    ],
    dataZoom: {
      type: 'inside',
      filterMode: 'filter',
    },
    animation: true,
    animationDuration: 3000
  }