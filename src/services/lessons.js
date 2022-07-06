import Likes from '@/services/likes';
import Lesson from '@/models/lesson';
import AbstractService from '@/services/abstractService';

const apiLikes = new Likes();

export default class Lessons extends AbstractService {
    /**
     * Получение списка уроков для курса
     * @param {string} courseId - id курса
     */
    async getLessonList(params) {
        let likes = await apiLikes.getLikeList('lessons');

        const { data } = await this.api.get('/lessons', { params });
        return data.map(item => new Lesson(item, likes));
    }

    /**
     * Получение списка пролайканных уроков
     */
    async getFavorites() {
        let likes = await apiLikes.getLikeList('lessons');

        const { data } = await this.apiAccess.get('/lessons/favorites');
        return data.map(item => new Lesson(item, likes));
    }
}