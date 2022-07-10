import store from '@/store';
import storage from '@/helpers/storage';
import User from '@/models/user';
import AbstractService from '@/services/abstractService';

export default class Users extends AbstractService {
    /**
     *  Получение данных пользователя
     */
    async getUser() {
        try {
            const { data } = await this.apiAccess.get('/user');
            store.commit('setUser', new User(data));
        } catch {
            store.commit('setUser', {});
            console.log('Пользователь не авторизован!');
        }
    }

    /**
     * Изменение имени пользователя
     * @param {string} name - новое имя пользователя
     */
    async changeName(params) {
        const { data } = await this.apiAccess.put('/user/change-name', params);
        storage.setTokens(data);
        window.location.reload();
    }

    /**
     * Изменение пароля пользователя
     * @param {string} oldPassword - текущий пароль пользователя
     * @param {string} newPassword - новый пароль пользователя
     */
    async changePassword(params) {
        const { data } = await this.apiAccess.put('/user/change-password', params);
        storage.setTokens(data);
        window.location.reload();
    }
}