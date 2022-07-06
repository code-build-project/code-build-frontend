import Tag from '@/models/tag';
import Likes from '@/services/likes';
import Article from '@/models/article';
import AbstractService from '@/services/abstractService';

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
     * Получение списка тегов статей
     */
    async getTags() {
        const { data } = await this.api.get('/articles/tags');
        return data.map(item => new Tag(item));
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