import request from '@/helpers/http';
import { Lesson } from '../models/lessons.js';

export default {
  // Получить список уроков для курса
  getLessons: async params => {
    const { data } = await request.get(`/lessons`, { params });
    return data.map(item => new Lesson(item));
  },

  // Получить список пролайканных уроков для курса
  getFavoriteLessons: async params => {
    const { data } = await request.get(`/lessons/favorites`, { params });
    return data.map(item => new Lesson(item));
  },

  // Поставить лайк уроку и добавить в фавориты
  addLike: async params => {
    const { data } = await request.post('/lessons/add-like', params);
    return data;
  },

  // Убрать лайк у урока и удалить из фаворитов
  deleteLike: async params => {
    const { data } = await request.post('/lessons/delete-like', params);
    return data;
  }
};