import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './directives/clickOutside';
import services from './plugins/services';

Vue.config.productionTip = false;
Vue.use(services);

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