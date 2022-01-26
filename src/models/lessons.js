export class Lesson {
  constructor(lesson, likes = []) {
    this.id = lesson.id;
    this.number = lesson.number;
    this.title = lesson.title;
    this.time = lesson.time;
    this.views = lesson.views;
    this.courseId = lesson.courseId;
    this.isLike = likes.includes(lesson.id);
    this.image = lesson.image;
    this.video = lesson.video;
  }
}