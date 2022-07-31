import router from '@/router';
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

        storage.setTokens(data);
        return data;
    }

    /**
     * Восстановление пароля
     * @param {string} email - почта пользователя
     */
    async recovery(params) {
        await this.api.post('/login/recovery', params);
    }

    /**
     * Выйти из личного кабинета
     */
    logOut() {
        storage.clearTokens();
        router.push('/').then(() => location.reload());
    }
}