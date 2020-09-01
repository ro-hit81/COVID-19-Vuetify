import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.use(VueLayers)

Vue.filter('date-filter', function(value) {
  const filtered_date = value && value.slice(0,10)
  return(filtered_date)
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
