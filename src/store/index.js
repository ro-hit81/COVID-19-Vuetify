import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import NepalData from '@/assets/Nepal.json'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    date:'',
    nepal_stats: [],
    global_stats: [],
    country_stats:[],
    top10_countries: [],
    // nepal_data: NepalData,
    // District: [],
    
  },
  mutations: {
    SET_STATS (state, nepal_stats) {
      state.nepal_stats = nepal_stats
    },
    SET_GLOBAL_STATS (state, global_stats) {
      state.global_stats = global_stats
    },
    SET_COUNTRY_STATS (state, country_stats) {
      state.country_stats = country_stats
    },
    SET_TOP_COUNTRY_STATS (state, top10_countries) {
      state.top10_countries = top10_countries
    },
    SET_DATE (state, date) {
      state.date = date
    }
  },
  getters:{
    dateConvert: state => {
      let updated_at = state.nepal_stats.updated_at
      const nepal_date = updated_at && updated_at.slice(0,10)
      const nepal_time = updated_at && updated_at.slice(11,19)
      return {nepal_date, nepal_time};
    },
    globalDateConvert: state => {
      let date = state.date 
      const global_date = date && date.slice(0,10)
      const global_time = date && date.slice(11,19)
      return {global_date, global_time}
    },
    // districts: state => {
    //   const Districts = state.nepal_data.features.properties.DISTRICT
    //   return console.log(Districts)
    // }
  },
  actions: {
    loadNepalStats({commit}) {
      axios.get('https://nepalcorona.info/api/v1/data/nepal').then((res) => {
        const nepal_stats = res.data
        commit('SET_STATS', nepal_stats)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadGlobalStats({commit}) {
      axios.get('https://api.covid19api.com/summary').then((res) => {
        const global_stats = res.data.Global
        const country_stats = res.data.Countries
        const top10_countries = country_stats.sort((a, b) => {
          return b.TotalConfirmed - a.TotalConfirmed
        }).slice(0,10)
        const date = res.data.Date
        commit('SET_GLOBAL_STATS', global_stats);
        commit('SET_COUNTRY_STATS', country_stats);
        commit('SET_TOP_COUNTRY_STATS', top10_countries);
        commit('SET_DATE', date)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
  },
  modules: {
  }
})
