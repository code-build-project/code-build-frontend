import Vue from 'vue';
import Vuex from 'vuex';
import request from '@/helpers/http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    popup: {
      isShow: false,
      name: ''
    }
  },

  getters: {
    user: state => {
      return state.user;
    },

    getPopup: state => {
      return state.popup;
    }
  },

  mutations: {
    // Запись данных пользователя
    setUser(state, payload) {
      state.user = payload;
    },
    
    openPopup(state, payload) {
      state.popup.isShow = true;
      state.popup.name = payload;
    },

    closePopup(state) {
      state.popup.isShow = false;
      state.popup.name = '';
    }
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