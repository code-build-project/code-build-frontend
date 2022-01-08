export const Filters = [
  { id: '', name: 'Все курсы', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' },
  { id: '1', name: 'Игры', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' },
  { id: '2', name: 'Сайты', gradient: 'linear-gradient(120.78deg, rgba(235, 204, 39, 0.84) 1.57%, rgba(242, 8, 8, 0.86) 98.08%)' },
  { id: '3', name: 'Языки', gradient: 'radial-gradient(100% 100% at 50% 0%, #3EF286 0%, #15EEE1 100%)' },
  { id: '4', name: 'Прочее', gradient: 'linear-gradient(178.42deg, #DAF17C 1.34%, #14F2E5 97.44%)' },
  { id: '5', name: 'Платные', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' },
  { id: '6', name: 'Бесплатные', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' }
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
    this.gradient = course.gradient;
    this.likes = course.likes;
    this.image = course.image;
  }
}