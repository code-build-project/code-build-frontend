import Auth from '@/services/auth.js';
import Users from '@/services/users.js';
import Likes from '@/services/likes.js';
import Courses from '@/services/courses.js';
import Lessons from '@/services/lessons.js';
import Reviews from '@/services/reviews.js';
import Articles from '@/services/articles.js';

export default class ServiceApi {
  constructor() {
    this.auth = new Auth();
    this.users = new Users();
    this.likes = new Likes();
    this.courses = new Courses();
    this.lessons = new Lessons();
    this.reviews = new Reviews();
    this.articles = new Articles();
  }
}