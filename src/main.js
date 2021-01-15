import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import GameStore from '@/stores/GameStore'

Vue.use(VueResource);
Vue.config.productionTip = false

Vue.http.options.root = 'https://opentdb.com/api.php/';

new Vue({
  router,
  store: GameStore,
  render: h => h(App)
}).$mount('#app')
