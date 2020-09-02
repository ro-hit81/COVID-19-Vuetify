import axios from 'axios'

const data = []
const date= []
let options= []

axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
  const array = res.data
  const groups = array.reduce((groups, info) =>{
    const date = info.reportedOn;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(info);
    return groups;
  }, {});
  const groupingDate = Object.keys(groups).map((date) =>{
    return{
      date: date,
      infos: groups[date]
    };
    
  })
  const sortedData = groupingDate.sort((a,b) => {
    var dateA = new Date(a.date) , dateB = new Date(b.date)
    return  dateA - dateB
  })
  for(let i=0; i< sortedData.length; i++) {
    date.push(sortedData[i].date)
    const array = sortedData[i].infos
    data.push(array)
  }
  const timelineData = data.map(series => ({
    series:{
      data: series.map(i => [i.point.coordinates[0], i.point.coordinates[1], i.id, i.reportedOn, i.gender, i.label])
    }
  }))
  timelineData.forEach((_, index) => {
    if(index == 0) return
    timelineData[index].series.data = [...timelineData[index - 1].series.data, ...timelineData[index].series.data,]
  })
  options.push(...timelineData)
})

export default {
  timeline: {
    axisType: 'category',
    data: date,
    autoPlay: false,
    playInterval: 800,
    symbol:'diamond',
    symbolSize: 3,
    itemStyle: {
        color: '#ccc',
        emphasis: {
          color: '#EA80FC'
        }
    },
    lineStyle: {
        color: '#CE93D8',
        emphasis: {
          color: '#AB47BC'
        }
    },
    label: {
        color: '#FFFFFF',
        emphasis: {
          color: '#AB47BC'
        }
    },
    checkpointStyle: {
        color: '#FFFFFF',
        borderColor: '#AB47BC',
        borderWidth: 2,
        symbol: 'diamond',
        symbolSize: 12
    },
    controlStyle: {
        borderColor: '#AB47BC',
        itemSize: 20,
        emphasis: {
          borderColor: '#AB47BC'
        }
    }
  },
  options: options,
  baseOption: {
    title: {
      text: 'COVID-19 Timeline',
      subtext: 'cases in NEPAL',
      left: 'center',
      textStyle: {
        color: '#E0E0E0'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params){
      return ('Reported on : ' + params.value[3] + '<br>' +'Gender : ' + params.value[4] + '<br>' + 'Case number : ' + params.value[5].slice(8) ) }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'leaflet',
        data: [],
        symbolSize: 6
      }
    ],
    visualMap: {
      type: 'continuous',
      min: 39,
      max: 40,
      itemWidth: '14',
      itemHeight: '14',
      realtime: true,
      inRange: {
          color: ['#D50000', '#D50000'],
          opacity: [0.6, 0.8]
      },
      dimension: 1,
      textStyle: {
        color: '#FFFFFF'
      },
      formatter: function(){
        return 'Cases'}
    },
    leaflet: {
      label: {
        emphasis: {
          show: true
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#BDBDBD',
          borderColor: '#111'
        },
        emphasis: {
          areaColor: '#F5F5F5'
        }
      },
      center: [83.9856, 28.2096],
      tiles: [{
        urlTemplate: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      }],
      zoom: 7.2
    }
  }
}