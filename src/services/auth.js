import router from '@/router';
import storage from '@/helpers/storage';
import { request } from '@/helpers/http';

export default {
  // Авторизоваться и получить токен
  logIn: async params => {
    const { data } = await request.post('/login', params);

    storage.setTokens('local', data);
    return data;
  },

  // Регистрация
  signIn: async params => {
    await request.post('/sign', params);
  },

  // Подтверждение регистрации
  completionSignIn: async params => {
    const { data } = await request.post('/completion-registration', params);
    storage.setTokens('local', data);
    router.push('/').then(() => location.reload());
  },

  // Подтверждение регистрации
  recoveryPassword: async params => {
    await request.post('/recovery-password', params);
  },

  // Выйти из под своего пользователя
  logOut: () => {
    storage.clearTokens('local');
    window.location.href = '/';
  }
};