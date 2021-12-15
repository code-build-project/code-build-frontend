import request from '@/helpers/http';
import { Filters } from '@/models/articles';
import { Article } from "../models/articles.js";

export default {
  // Получить список статьей
  getArticleList: async params => {
    const { data } = await request.get(`/articles`, { params });
    return data.map((item) => new Article(item));
  },

  // Получить статью по id
  getArticle: async params => {
    const { data } = await request.get(`/article`, { params });
    return new Article(data);
  },

  // Получить список пролайканных статьей
  getFavoriteArticles: async params => {
    const { data } = await request.get(`/articles/favorites`, { params });
    return data.map((item) => new Article(item));
  },

  // Получить фильтры для статьей
  getFilters: () => {
    return Filters;
  },

  // Поставить лайк статье и добавить в фавориты
  addLike: async params => {
    const { data } = await request.post('/articles/add-like', params);
    return data;
  },

  // Убрать лайк у статьи и удалить из фаворитов
  deleteLike: async params => {
    const { data } = await request.post('/articles/delete-like', params);
    return data;
  }
};