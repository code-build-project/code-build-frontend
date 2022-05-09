import storage from '@/helpers/storage';
import AbstractService from '@/services/abstractService';

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