import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('date-ext', function(value){
  return value.slice(0, 10)
});

Vue.filter('time-ext', function(value){
  return value.slice(11, 19)
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
