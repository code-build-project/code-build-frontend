export const Filters = [
  { id: 1, name: 'Все курсы', tag: '' },
  { id: 2, name: 'Игры', tag: 'game' },
  { id: 3, name: 'Сайты', tag: 'web' },
  { id: 4, name: 'Языки', tag: 'language' },
  { id: 5, name: 'Прочее', tag: 'other' },
  { id: 6, name: 'Платные', tag: 'paid' },
  { id: 7, name: 'Бесплатные', tag: 'free' }
];

export class Course {
  constructor(course) {
    this.id = course.id;
    this.title = course.title;
    this.level = course.level;
    this.lessons = course.lessons;
    this.time = course.time;
    this.views = course.views;
    this.tags = course.tags;
    this.likes = course.likes;
    this.courseName = course.courseName;
    this.image = course.image;
  }
}