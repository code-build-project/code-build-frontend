import request from '@/helpers/http';

export default {
  // Получить список курсов
  getCourses: async params => {
    const response = await request.get(`/courses`, { params });
    return response.data;
  },

  // Получить фильтры для курсов
  getFilters: async () => {
    const response = await request.get('/filters/courses');
    return response.data;
  },

  // Получить список уроков для курса
  getLessons: async params => {
    const response = await request.get(`/lessons`, { params });
    return response.data;
  }
};