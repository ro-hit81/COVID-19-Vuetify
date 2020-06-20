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
      data: series.map(i => [i.point.coordinates[0], i.point.coordinates[1]])
    }
  }))
  timelineData.forEach((_, index) => {
    if(index == 0) return
    timelineData[index].series.data = [...timelineData[index - 1].series.data, ...timelineData[index].series.data]
  })
  options.push(...timelineData)
})

export default {
  timeline: {
    axisType: 'category',
    data: date,
    autoPlay: false,
    playInterval: 500,
    symbolSize: 10,
    tooltip: {
        formatter: function (params) {
            return params.name;
        }
    },
    itemStyle: {
        color: '#ccc'
    },
    lineStyle: {
        color: '#eee'
    },
    label: {
        color: '#999'
    },
    checkpointStyle: {
        color: 'red'
    },
    controlStyle: {
        borderColor: '#bbb'
    }
  },
  options: options,
  baseOption: {
    title: {
      text: 'COVID-19 Timeline',
      subtext: 'cases in NEPAL',
      left: 'center',
      textStyle: {
        color: '#546E7A'
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'leaflet',
        data: [],
        symbolSize: 10
        // symbolSize: function (value) {
        //   return value[2] > 0 ? Math.log(value[2]) * 3 : 0;
        // }
      }
    ],
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 10,
      inRange: {
          color: ['orange', 'red'],
          opacity: [0.5, 0.8]
      },
      dimension: 2
    },
    leaflet: {
      map: 'Nepal',
      label: {
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#F3E5F5',
          borderColor: '#4A148C'
        },
        emphasis: {
          areaColor: '#CE93D8'
        }
      },
      center: [84, 28],
      roam: true,
      zoom: 7,
      tiles: [{
        urlTemplate: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
    }]
    }
  }
}