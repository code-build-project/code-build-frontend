import storage from '@/helpers/storage.js';
import apiLikes from '@/services/likes.js';
import { Filters } from '@/models/articles';
import { Article } from '../models/articles.js';
import { request, requestAccess } from '@/helpers/http';

const token = storage.getTokens('local').token;

export default {
  // Получить список статьей
  getArticleList: async params => {
    let likes = [];
    if(token) likes = await apiLikes.getLikeList('articles');

    const { data } = await request.get('/articles', { params });
    return data.map(item => new Article(item, likes));
  },

  // Получить статью по id
  getArticle: async params => {
    const { data } = await request.get('/article', { params });

    let tags = [];
    let gradient = '';

    Filters.forEach(item => {
      const isTag = data.tags.includes(item.id);
      if (isTag) {
        tags.push('#' + item.name);
        if(!gradient)  gradient = item.gradient;
      }
    });

    data.tags = tags;
    data.gradient = gradient;
    return new Article(data);
  },

  // Получить список пролайканных статьей
  getFavoriteArticles: async () => {
    const { data } = await requestAccess.get('/articles/favorites');
    return data.map(item => new Article(item));
  },

  // Получить фильтры для статьей
  getFilters: () => {
    return Filters;
  },

  // Получить список популярных статьей
  getPopularArticleList: async params => {
    const { data } = await request.get('/articles/popular-articles', { params });
    return data.map(item => new Article(item));
  }
};