import { Lesson } from '../models/lessons.js';
import { request, requestAccess } from '@/helpers/http';

export default {
  // Получить список уроков для курса
  getLessons: async params => {
    const { data } = await request.get('/lessons', { params });
    return data.map(item => new Lesson(item));
  },

  // Получить список пролайканных уроков для курса
  getFavoriteLessons: async () => {
    const { data } = await requestAccess.get('/lessons/favorites');
    return data.map(item => new Lesson(item));
  },

  // Поставить лайк уроку и добавить в фавориты
  addLike: async params => {
    const { data } = await requestAccess.post('/lessons/add-like', params);
    return data;
  },

  // Убрать лайк у урока и удалить из фаворитов
  deleteLike: async params => {
    const { data } = await requestAccess.post('/lessons/delete-like', params);
    return data;
  }
};