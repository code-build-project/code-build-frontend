import request from '@/helpers/http';
import storage from '@/helpers/storage';

export default {
  // Авторизоваться и получить токен
  logIn: async params => {
    const response = await request.post(`/login`, params);
    
    storage.setTokens('local', response.data);
    return response.data;
  },

  // Выйти из под своего пользователя
  logOut: () => {
    storage.clearTokens('local');
    window.location.href = '/auth';
  },
};