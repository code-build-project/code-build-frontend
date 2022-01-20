import storage from '@/helpers/storage.js';

const user = storage.getUser('local');

export class Lesson {
  constructor(lesson) {
    this.id = lesson.id;
    this.number = lesson.number;
    this.title = lesson.title;
    this.time = lesson.time;
    this.views = lesson.views;
    this.courseId = lesson.courseId;
    this.likes = lesson.likes;
    this.isLike = lesson.likes.includes(user.id);
    this.image = lesson.image;
    this.video = lesson.video;
  }
}