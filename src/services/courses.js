import request from '@/helpers/http';

export default {
  // Получить список курсов
  getCourses: async params => {
    const response = await request.get(`/courses`, { params });
    return response.data;
  },

  // Получить список пролайканных курсов
  getFavoriteCourses: async params => {
    const response = await request.get(`/courses/favorites`, { params });
    return response.data;
  },

  // Получить фильтры для курсов
  getFilters: async () => {
    const response = await request.get('/filters/courses');
    return response.data;
  },

  // Поставить лайк курсу и добавить в фавориты
  addLike: async params => {
    const response = await request.post('/courses/add-like', params);
    return response.data;
  },

  // Убрать лайк у курса и удалить из фаворитов
  deleteLike: async params => {
    const response = await request.post('/courses/delete-like', params);
    return response.data;
  }
};