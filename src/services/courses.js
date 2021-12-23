import request from '@/helpers/http';
import { Filters } from '@/models/courses';
import { Course } from '../models/courses.js';

const vm = this;

export default {
  // Получить список курсов
  getCoursesList: async params => {
    const { data } = await request.get(`/courses`, { params });
    return data.map(item => new Course(item));
  },

  // Получить статью по id
  getCourse: async params => {
    const { data } = await request.get(`/course`, { params });

    let tags = [];

    Filters.forEach(item => {
      const isTag = data.tags.includes(item.id);
      if(isTag) tags.push('#' + item.name)
    });

    data.tags = tags;
    return new Course(data);
  },

  // Получить список пролайканных курсов
  getFavoriteCourseList: async params => {
    const { data } = await request.get(`/courses/favorites`, { params });
    return data.map(item => new Course(item));
  },

  // Получить фильтры для курсов
  getFilters: () => {
    return Filters;
  },

  // Поставить лайк курсу и добавить в фавориты
  addLike: async params => {
    const { data } = await request.post('/courses/add-like', params);
    return data;
  },

  // Убрать лайк у курса и удалить из фаворитов
  deleteLike: async params => {
    const { data } = await request.post('/courses/delete-like', params);
    return data;
  }
};