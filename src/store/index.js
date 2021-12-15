import Vue from 'vue';
import Vuex from 'vuex';
import request from '@/helpers/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
  },

  getters: {
    user: state => {
      return state.user;
    },
  },

  mutations: {
    // Запись данных пользователя
    setUser(state, payload) {
      state.user = payload;
    },
  }, 

  actions: {
    // Получение данных пользователя по токену
    authorize({ commit }) {
      request.get('/user').then(response => {
        commit('setUser', response.data);
      })
      .catch((err) => {
        console.log('Пользователь не авторизован!')
        console.log(err.response.data.message)
      })
    }
  },

  modules: {}
});