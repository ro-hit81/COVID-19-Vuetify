import axios from 'axios'
const data = []
const date = []
const options = []
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
  console.log(data)
})
