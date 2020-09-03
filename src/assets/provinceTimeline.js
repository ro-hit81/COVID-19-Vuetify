import axios from 'axios'

const data = []
const date =[]

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
  console.log(data_source)
})

export default {
  legend: {},
  tooltip: {
    trigger: 'axis',
    showContent: false
  },
  dataset: {
    source:[]
  },
  xAxis: {type: 'category'},
  yAxis: {gridIndex: 0 },
  grid: {top: '55%'},
  series: [
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {type: 'line', smooth: true, seriesLayoutBy: 'row'},
    {
      type: 'pie',
      id: 'pie',
      radius: '30%',
      center: ['50%', '25%'],
      label: {
        formatter: 'hello'
      },
      encode: {
        itemName: '1',
        value: 0,
        tooltip: 0
      }
    }
  ]
}