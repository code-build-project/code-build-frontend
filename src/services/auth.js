import router from '@/router';
import storage from '@/helpers/storage';
import AbstractService from '@/services/abstractService.js';

export default class Auth extends AbstractService { 
  /**
   * Авторизовация. Получение токена
   * @param {string} email - почта пользователя
   * @param {string} password - почта пользователя
   */
  async logIn(params) {
    const { data } = await this.api.post('/login', params);

    storage.setTokens('local', data);
    return data;
  }

  /**
   * Регистрация
   * @param {string} name - имя пользователя
   * @param {string} email - почта пользователя
   */
  async signIn(params) {
    await this.api.post('/sign', params);
  }

  /**
   * Подтверждение регистрации. Получение токена
   * @param {string} email - почта пользователя
   * @param {string} password - пароль который пришел на почту
   */
  async completionSignIn(params) {
    const { data } = await this.api.post('/confirm-sign', params);
    storage.setTokens('local', data);
    router.push('/').then(() => location.reload());
  }

  /**
   * Восстановление пароля
   * @param {string} email - почта пользователя
   */
  async recovery(params) {
    await this.api.post('/recovery-password', params);
  }

  /**
   * Выйти из личного кабинета
   */
  logOut() {
    storage.clearTokens('local');
    window.location.href = '/';
  }
}