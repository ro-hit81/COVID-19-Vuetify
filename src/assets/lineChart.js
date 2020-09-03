import axios from 'axios'

const data = []
const date= []

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
    data.push(array.length)
  }
})

export default {
  title: {
    text: 'Covid-19 Cases (NEPAL)',
    textStyle: {
      color: '#ffffff',
      fontWeight: 'normal'
    },
    subtext: 'On daily basis',
    subtextStyle: {
      color: '#CFD8DC'
    },
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
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
          }
        }
      },
      restore: {
        show: true,
        title: 'Reset zoom',
        emphasis: {
          iconStyle: {
            borderColor: '#76ff03'
          }
        }
      }
    },
    iconStyle: {
      borderColor: '#fff'
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
  series: [{
    data: data,
    type: 'line',
    symbol: 'diamond',
    symbolSize: 3,
    itemStyle: {
      color: '#bb6fde',
    },
    lineStyle: {
      color: '#ffffff',
      width: 2
    },
  }],
  dataZoom: {
    type: 'inside'
  },
  animationDuration: 10000
}