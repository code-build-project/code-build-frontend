export default class Course {
    constructor(course, likes = []) {
        this.id = course.id;
        this.title = course.title;
        this.subtitle = course.subtitle;
        this.level = course.level;
        this.lessons = course.lessons;
        this.time = course.time;
        this.views = course.views;
        this.tags = course.tags;
        this.isLike = likes.includes(course.id);
        this.gradient = course.gradient;
        this.image = course.image;
    }
}