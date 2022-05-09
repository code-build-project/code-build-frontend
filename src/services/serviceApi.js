import Reg from '@/services/reg';
import Auth from '@/services/auth';
import Users from '@/services/users';
import Likes from '@/services/likes';
import Courses from '@/services/courses';
import Lessons from '@/services/lessons';
import Reviews from '@/services/reviews';
import Articles from '@/services/articles';

export default class ServiceApi {
    constructor() {
        this.reg = new Reg();
        this.auth = new Auth();
        this.users = new Users();
        this.likes = new Likes();
        this.courses = new Courses();
        this.lessons = new Lessons();
        this.reviews = new Reviews();
        this.articles = new Articles();
    }
}