import storage from '@/helpers/storage';
import { requestAccess } from '@/helpers/http';

const token = storage.getTokens('local').token;

export default {
  // Записать данные пользователя в сторадж
  getUser: async () => {
    if(!token) return;

    try {
      const { data } = await requestAccess.get('/user');
      storage.setUser('local', data);
    } catch {
      storage.setUser('local', {});
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