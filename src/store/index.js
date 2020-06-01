import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    nepal_stats: [],
    global_stats: [],
    country_stats:[],
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
  },
  getters:{
    dateConvert: state => {
      const nepal_date = state.nepal_stats.updated_at.slice(0,10)
      const nepal_time = state.nepal_stats.updated_at.slice(11,19)
      return {nepal_date, nepal_time};
    },
    globalDateConvert: state => {
      const global_date = state.country_stats[0].Date.slice(0,10)
      const global_time = state.country_stats[0].Date.slice(11,19)
      return {global_date, global_time}
    }
  },
  actions: {
    loadNepalStats({commit}) {
      axios.get(process.env.VUE_APP_NepalStatAPI).then((res) => {
        const nepal_stats = res.data
        commit('SET_STATS', nepal_stats)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadGlobalStats({commit}) {
      axios.get(process.env.VUE_APP_GlobalStatAPI).then((res) => {
        const global_stats = res.data.Global
        const country_stats = res.data.Countries

        commit('SET_GLOBAL_STATS', global_stats);
        commit('SET_COUNTRY_STATS', country_stats);

      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
  },
  modules: {
  }
})
