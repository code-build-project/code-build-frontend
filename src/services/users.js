import store from '@/store';
import User from '@/models/user';
import storage from '@/helpers/storage';
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
     * Изменение данных пользователя
     * @param {string} name - новое имя пользователя
     * @param {boolean} isChangePassword - флаг на изменение пароля
     * @param {string} oldPassword - текущий пароль пользователя
     * @param {string} newPassword - новый пароль пользователя
     */
    async change({ name, isChangePassword, oldPassword, newPassword }) {
        const { data } = await this.apiAccess.put('/user/change', {
            name,
            isChangePassword,
            oldPassword,
            newPassword
        });
        storage.setTokens(data);
        window.location.reload();
    }
}