import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuth: false,
        user: {}
    },

    getters: {
        isAuth: state => state.isAuth,
        user: state => state.user
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload;

            if (state.user.id) {
                state.isAuth = true;
            } else state.isAuth = false;
        }
    }
});