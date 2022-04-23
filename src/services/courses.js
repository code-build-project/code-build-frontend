import Likes from '@/services/likes.js';
import { Filters } from '@/models/courses';
import { Course } from '../models/courses.js';
import AbstractService from '@/services/abstractService.js';

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
   * Получение фильтров курсов
   */
  getFilters() {
    return Filters;
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