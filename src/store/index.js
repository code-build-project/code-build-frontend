import Vue from 'vue';
import Vuex from 'vuex';
import tags from './tags';
import likes from './likes';
import alert from './alert';

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
    },

    modules: {
        tags,
        likes,
        alert
    }
});