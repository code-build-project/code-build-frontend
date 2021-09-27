import request from '@/helpers/http';

export default {
  // Получить список уроков для курса
  getLessons: async params => {
    const response = await request.get(`/lessons`, { params });
    return response.data;
  },

  // Получить список пролайканных уроков для курса
  getFavoriteLessons: async params => {
    const response = await request.get(`/lessons/favorites`, { params });
    return response.data;
  },

  // Поставить лайк уроку и добавить в фавориты
  addLike: async params => {
    const response = await request.post('/lessons/add-like', params);
    return response.data;
  },

  // Убрать лайк у урока и удалить из фаворитов
  deleteLike: async params => {
    const response = await request.post('/lessons/delete-like', params);
    return response.data;
  }
};