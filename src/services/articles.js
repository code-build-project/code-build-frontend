import request from '@/helpers/http';

export default {
  // Получить список статьей
  getArticles: async params => {
    const response = await request.get(`/articles`, { params });
    return response.data;
  },

  // Получить фильтры для статьей
  getFilters: async () => {
    const response = await request.get('/filters/articles');
    return response.data;
  }
};