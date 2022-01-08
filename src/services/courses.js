import { Filters } from '@/models/courses';
import { Course } from '../models/courses.js';
import { request, requestAccess } from '@/helpers/http';

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
    let gradient = '';

    Filters.forEach(item => {
      const isTag = data.tags.includes(item.id);
      if (isTag) {
        tags.push('#' + item.name);
        if(!gradient) gradient = item.gradient;
      }
    });

    data.tags = tags;
    data.gradient = gradient;
    return new Course(data);
  },

  // Получить список пролайканных курсов
  getFavoriteCourseList: async () => {
    const { data } = await requestAccess.get(`/courses/favorites`);
    return data.map(item => new Course(item));
  },

  // Получить фильтры для курсов
  getFilters: () => {
    return Filters;
  },

  // Поставить лайк курсу и добавить в фавориты
  addLike: async params => {
    const { data } = await requestAccess.post('/courses/add-like', params);
    return data;
  },

  // Убрать лайк у курса и удалить из фаворитов
  deleteLike: async params => {
    const { data } = await requestAccess.post('/courses/delete-like', params);
    return data;
  },

  // Получить список популярных статьей
  getPopularCourseList: async (params) => {
    const { data } = await request.get('/courses/popular-courses', { params });
    return data.map(item => new Course(item));
  }
};