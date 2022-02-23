import store from '@/store';
import { requestAccess } from '@/helpers/http';

export default {
  // Получить список лайков для данного пользователя
  getLikeList: async field => {
    if (store.getters.isAuth) {
      const { data } = await requestAccess.get('/likes', { params: { field } });
      return data;
    }

    return [];
  },

  // Поставить лайк
  addLike: async params => {
    const { data } = await requestAccess.put('/likes/add', params);
    return data;
  },

  // Убрать лайк
  deleteLike: async params => {
    const { data } = await requestAccess.put('/likes/delete', params);
    return data;
  }
};