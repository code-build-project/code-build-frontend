import store from '@/store';
import Lesson from '@/models/lesson';
import AbstractService from '@/services/abstractService';

export default class Lessons extends AbstractService {
    /**
     * Получение списка уроков для курса
     * @param {string} courseId - id курса
     */
    async getLessonList(params) {
        let likes = await store.dispatch('likes/getLikeList', 'lessons');

        const { data } = await this.api.get('/lessons', { params });
        return data.map(item => new Lesson(item, likes));
    }

    /**
     * Получение списка пролайканных уроков
     */
    async getFavorites() {
        let likes = await store.dispatch('likes/getLikeList', 'lessons');

        const { data } = await this.apiAccess.get('/lessons/favorites');
        return data.map(item => new Lesson(item, likes));
    }

    /**
     * Увеличение количества просмотров урока
     * @param {string} id - id урока
     * @param {string} courseId - id курса
     */
     async addView(params) {
        const { data } = await this.api.put('/lessons/add-view', params);
        return data;
    }
}