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
        console.log(res)
        const global_stats = res.data.Global
        commit('SET_GLOBAL_STATS', global_stats);
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadCountryStats({commit}) {
      axios.get(process.env.VUE_APP_GlobalStatAPI).then( (res) => {
        const country_stats = res.data.Countries
        commit('SET_COUNTRY_STATS', country_stats)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  modules: {
  }
})
