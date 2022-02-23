import apiLikes from '@/services/likes.js';
import { Lesson } from '../models/lessons.js';
import { request, requestAccess } from '@/helpers/http';

export default {
  // Получить список уроков для курса
  getLessons: async params => {
    let likes = await apiLikes.getLikeList('lessons');

    const { data } = await request.get('/lessons', { params });
    return data.map(item => new Lesson(item, likes));
  },

  // Получить список пролайканных уроков для курса
  getFavoriteLessons: async () => {
    let likes = await apiLikes.getLikeList('lessons');

    const { data } = await requestAccess.get('/lessons/favorites');
    return data.map(item => new Lesson(item, likes));
  },
};