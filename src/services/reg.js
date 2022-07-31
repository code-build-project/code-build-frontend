import router from '@/router';
import storage from '@/helpers/storage';
import AbstractService from '@/services/abstractService';

export default class Reg extends AbstractService {
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
    async completion(params) {
        const { data } = await this.api.post('/sign/confirm', params);
        storage.setTokens(data);
    }
}