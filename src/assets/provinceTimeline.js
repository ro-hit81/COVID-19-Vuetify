import axios from 'axios'

const data = []
const date =[]
const source =[]

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
  const  groupingDate = Object.keys(groups).map((date) => {
    return {
      date: date,
      infos: groups[date]
    }
  })
  const sortedData = groupingDate.sort((a, b) => {
    var dateA = new Date(a.date) , dateB = new Date(b.date)
    return dateA - dateB
  })
  for(let i=0; i< sortedData.length; i++) {
    date.push(sortedData[i].date)
    const new_array = sortedData[i].infos
    const new_groups = new_array.reduce((new_groups, provInfo) => {
      const province = provInfo.province
      if(!new_groups[province]) {
        new_groups[province] = []
      }
      new_groups[province].push(provInfo)
      return new_groups
    }, {})
    const groupingData = Object.keys(new_groups).map((province) => {
      return {
        province: province,
        cases: new_groups[province].length,
      }
    })
    data.push(groupingData)
  }
  const group = data.reduce((acc, arr, i) => {
  for(const province in acc) {
    acc[province].push(0);
  }
  for(const {province,cases} of arr) {
    if(!acc[province])
    acc[province] = [province, ...Array(i).fill(0)]
    acc[province][i+1] =cases
  }
  return acc
}, {})
  const data_source = Object.values(group)
  date.unshift("Province")
  source.push(...[date].concat(data_source))
  source[1].splice(0, 1, "Province 1")
  source[2].splice(0, 1, "Province 2")
  source[3].splice(0, 1, "Bagmati Pradesh")
  source[4].splice(0, 1, "Gandaki Pradesh")
  source[5].splice(0, 1, "Province 5")
  source[6].splice(0, 1, "Karnali Pradesh")
  source[7].splice(0, 1, "Sudurpashchim Pradesh")
  console.log(source)
})

export default {
  legend: {},
  tooltip: {
      trigger: 'axis',
      showContent: false
  },
  dataset: {
      source: source
  },
  xAxis: {type: 'category'},
  yAxis: {gridIndex: 0},
  grid: {
    right: '5%',
    bottom: '20%'
  },
  series: [
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      symbol: 'diamond',
      symbolSize: 5,
      lineStyle: {
        color: '#4A148C',
        width: 2
      },
      itemStyle: {
        color: '#4A148C',
      },
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#651FFF',
        width: 2
      },
      itemStyle: {
        color: '#651FFF',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#D50000',
        width: 2
      },
      itemStyle: {
        color: '#D50000',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#2979FF',
        width: 2
      },
      itemStyle: {
        color: '#2979FF',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#00E5FF',
        width: 2
      },
      itemStyle: {
        color: '#00E5FF',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#00E676',
        width: 2
      },
      itemStyle: {
        color: '#00E676',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    {
      type: 'line',
      smooth: true,
      smoothMonotone: 'x',
      seriesLayoutBy: 'row',
      lineStyle: {
        color: '#F57F17',
        width: 2
      },
      itemStyle: {
        color: '#F57F17',
      },
      symbol: 'diamond',
      symbolSize: 5,
    },
    // {
    //   type: 'pie',
    //   id: 'pie',
    //   radius: '30%',
    //   center: ['50%', '25%'],
    //   label: {
    //       formatter: '{b}: {@2020-01-24} ({d}%)'
    //   },
    //   encode: {
    //       itemName: 'Province',
    //       value: '2020-01-24',
    //       tooltip: '2020-01-24'
    //   }
    // }
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 95,
      end: 100
    },
    {
      start: 0,
      end:10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }
  ],
  animationDuration: 5000
}