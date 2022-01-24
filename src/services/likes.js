import { requestAccess } from '@/helpers/http';

export default {
  // Получить список лайков для данного пользователя
  getLikeList: async field => {
    const { data } = await requestAccess.get('/likes', { params: { field } });
    return data;
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