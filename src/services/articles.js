import Likes from '@/services/likes.js';
import { Filters } from '@/models/articles';
import { Article } from '@/models/articles.js';
import AbstractService from '@/services/abstractService.js';

const apiLikes = new Likes();

export default class Articles extends AbstractService {
  /**
   * Получение списка статьей
   * @param {string} tag - тег статьей по которым идёт фильтрация
   */
  async getArticleList(params) {
    let likes = await apiLikes.getLikeList('articles');

    const { data } = await this.api.get('/articles', { params });
    return data.map(item => new Article(item, likes));
  }

  /**
   * Получение статьи
   * @param {string} id - id статьи
   */
  async getArticle(params) {
    let likes = await apiLikes.getLikeList('articles');
    
    const { data } = await this.api.get('/article', { params });

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
    return new Article(data, likes);
  }

  /**
   * Получение списка пролайканных статьей
   */
  async getFavorites() {
    let likes = await apiLikes.getLikeList('articles');

    const { data } = await this.apiAccess.get('/articles/favorites');
    return data.map(item => new Article(item, likes));
  }

  /**
   * Получение фильтров статьей
   */
  getFilters() {
    return Filters;
  }

  /**
   * Получение списка популярных статьей
   * @param {string} id - id статьи которой не должно быть в списке
   */
  async getPopulars(params) {
    let likes = await apiLikes.getLikeList('articles');

    const { data } = await this.api.get('/articles/popular-articles', { params });
    return data.map(item => new Article(item, likes));
  }
}