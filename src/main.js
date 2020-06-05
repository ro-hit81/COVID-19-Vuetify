import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('@/assets/corona_case.png'),
  iconUrl: require('@/assets/corona_case.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
