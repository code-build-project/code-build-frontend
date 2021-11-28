import request from '@/helpers/http';
import { Filters } from '@/models/articles';

export default {
  // Получить список статьей
  getArticles: async params => {
    const response = await request.get(`/articles`, { params });
    return response.data;
  },

  // Получить статью по id
  getArticle: async params => {
    const response = await request.get(`/articles`, { params });
    return response.data;
  },

  // Получить список пролайканных статьей
  getFavoriteArticles: async params => {
    const response = await request.get(`/articles/favorites`, { params });
    return response.data;
  },

  // Получить фильтры для статьей
  getFilters: () => {
    return Filters;
  },

  // Поставить лайк статье и добавить в фавориты
  addLike: async params => {
    const response = await request.post('/articles/add-like', params);
    return response.data;
  },

  // Убрать лайк у статьи и удалить из фаворитов
  deleteLike: async params => {
    const response = await request.post('/articles/delete-like', params);
    return response.data;
  }
};