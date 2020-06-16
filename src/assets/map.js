// import axios from 'axios'

// const data=[]
// const data_filtered= []
// let options = null
// axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
//   const array = res.data
//   const groups = array.reduce((groups, info) =>{
//     const date = info.reportedOn;
//     if (!groups[date]) {
//       groups[date] = [];
//     }
//     groups[date].push(info);
//     return groups;
//   }, {});
//   const sortedData = Object.keys(groups).map((date) =>{
//     return{
//       date,
//       infos: groups[date]
//     };
//   })
//   sortedData.push(data)
// })
// console.log(data)


// axios.get('https://data.nepalcorona.info/api/v1/covid').then((res) => {
//   const result = res.data
//   for (let i=0; i<= result.length; i++){
//     const resu = result[i];
//     data.push([
//       resu.point.coordinates[0],
//       resu.point.coordinates[1],
//       resu.age
//     ])
//     data_date.push(resu.reported0n)
//   }
//   options = result.map(function (day) {
//     return {
//         series: {
//             data: day
//         }
//     };
// })
// })

// function convertData (data) {
//   const res = []
//   for (let i = 0; i < data.length; i++) {
//     const geoCoord = geoCoordMap[data[i].name]
//     if (geoCoord) {
//       res.push({
//         name: data[i].name,
//         value: geoCoord.concat(data[i].value)
//       })
//     }
//   }
//   return res
// }
export default {
  timeline: {
    axisType: 'category',
    data: [],
    autoPlay: true,
    playInterval: 500,
    symbolSize: 8,
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
  options: null,
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
        symbolSize: function (value) {
          return value[2] > 0 ? Math.log(value[2]) * 3 : 0;
        }
      }
    ],
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 100,
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