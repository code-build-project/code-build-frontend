import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';
import './directives/clickOutside';

// Добавление токена в заголовок axios и адрес сервера
const token = localStorage.token || '';
// axios.defaults.baseURL = 'https://serene-shelf-39995.herokuapp.com';
axios.defaults.baseURL = 'http://127.0.1.1:5000/';
axios.defaults.headers.common['Authorization'] = token.substring(7);

// Доавление axios в прототипы, чтобы не импортировать в каждый файл
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    // Настройка для того чтобы правильно обрабатывался Vue-router на сервере
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  },
  render: h => h(App),
}).$mount('#app');