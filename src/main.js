import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import './directives/clickOutside';
import services from './plugins/services';

Vue.config.productionTip = false;
Vue.use(services);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');