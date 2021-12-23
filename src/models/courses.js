export const Filters = [
  { id: '', name: 'Все курсы' },
  { id: '1', name: 'Игры' },
  { id: '2', name: 'Сайты' },
  { id: '3', name: 'Языки' },
  { id: '4', name: 'Прочее' },
  { id: '5', name: 'Платные' },
  { id: '6', name: 'Бесплатные' }
];

export class Course {
  constructor(course) {
    this.id = course.id;
    this.title = course.title;
    this.subtitle = course.subtitle;
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