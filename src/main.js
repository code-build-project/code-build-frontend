import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './directives/clickOutside';

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