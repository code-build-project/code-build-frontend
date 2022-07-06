import Tag from '@/models/tag';
import Likes from '@/services/likes';
import Course from '@/models/course';
import AbstractService from '@/services/abstractService';

const apiLikes = new Likes();

export default class Courses extends AbstractService {
    /**
     * Получение списка курсов
     * @param {string} tag - тег курсов по которым идёт фильтрация
     */
    async getCoursesList(params) {
        let likes = await apiLikes.getLikeList('courses');

        const { data } = await this.api.get(`/courses`, { params });
        return data.map(item => new Course(item, likes));
    }

    /**
     * Получение курса
     * @param {string} id - id курса
     */
    async getCourse(params) {
        let likes = await apiLikes.getLikeList('courses');

        const { data } = await this.api.get(`/course`, { params });
        return new Course(data, likes);
    }

    /**
     * Получение списка пролайканных курсов
     */
    async getFavorites() {
        let likes = await apiLikes.getLikeList('courses');

        const { data } = await this.apiAccess.get(`/courses/favorites`);
        return data.map(item => new Course(item, likes));
    }

    /**
     * Получение списка тегов курсов
     */
    async getTags() {
        const { data } = await this.api.get('/courses/tags');
        return data.map(item => new Tag(item));
    }

    /**
     * Получение списка популярных курсов
     * @param {string} id - id курса которого не должно быть в списке
     */
    async getPopulars(params) {
        let likes = await apiLikes.getLikeList('courses');

        const { data } = await this.api.get('/courses/popular-courses', { params });
        return data.map(item => new Course(item, likes));
    }
}