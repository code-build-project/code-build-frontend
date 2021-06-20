import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: undefined 
  },

  getters: {
    user: state => {
      return state.user;
    }
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },

  actions: {
    // Получение данных пользователя по токену
    authorize ({ commit }) {    
      axios.get('/user')
      .then((response) => {
        commit('setUser', response.data);
      })
    }
  },

  modules: {
  }
})