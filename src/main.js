import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'

import App from './App.vue'
import router from './router'
import store from './store'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCat, faDog);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
