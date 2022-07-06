import ServiceApi from '@/services/serviceApi.js';

export default {
    install: Vue => {
        Vue.prototype.$service = new ServiceApi();
    }
};