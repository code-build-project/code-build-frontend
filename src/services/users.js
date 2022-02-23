import store from '@/store';
import storage from '@/helpers/storage';
import { User } from '@/models/users.js';
import { requestAccess } from '@/helpers/http';

export default {
  // Записать данные пользователя в сторадж
  getUser: async () => {
    try {
      const { data } = await requestAccess.get('/user');
      store.commit('setUser', new User(data))
    } catch {
      store.commit('setUser', {})
      console.log('Пользователь не авторизован!');
    }
  },

  // Изменить имя пользователя
  changeUserName: async params => {
    const { data } = await requestAccess.put('/user/change-name', params);
    storage.setTokens('local', data);
    window.location.reload();
  }
};