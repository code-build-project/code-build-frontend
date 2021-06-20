import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';
import './directives/clickOutside';

// Добавление токена в заголовок axios
const token = localStorage.token || '';
axios.defaults.headers.common['Authorization'] = token.substring(7);

// Доавление axios в прототипы, чтобы не импортировать в каждый файл
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');