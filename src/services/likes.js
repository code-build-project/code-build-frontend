import store from '@/store';
import AbstractService from '@/services/abstractService.js';

export default class Likes extends AbstractService {
  // TO DO - доделать в конце
  /**
   *  Получение списка лайков для пользователя
   *  @param {string} field - название коллекции(articels, courses, lessons)
   */
  async getLikeList(field) {
    if (store.getters.isAuth) {
      const { data } = await this.apiAccess.get('/likes', { params: { field } });
      return data;
    }

    return [];
  }

  /**
   *  Добавление лайка
   *  @param {string} id - id ресурса
   *  @param {string} field - название коллекции(articels, courses, lessons)
   */
  async add(params) {
    const { data } = await this.apiAccess.put('/likes/add', params);
    return data;
  }

  /**
   *  Удаление лайка
   *  @param {string} id - id ресурса
   *  @param {string} field - название коллекции(articels, courses, lessons)
   */
  async delete(params) {
    const { data } = await this.apiAccess.put('/likes/delete', params);
    return data;
  }
}