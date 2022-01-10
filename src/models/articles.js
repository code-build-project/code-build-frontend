export const Filters = [
  { id: '', name: 'Все статьи', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' },
  { id: '1', name: 'Игры', gradient: 'linear-gradient(112.92deg, #33D3F7 3.03%, #8357FF 95.65%)' },
  { id: '2', name: 'Сайты', gradient: 'linear-gradient(116.3deg, #090808 1.62%, #757470 97.61%)' },
  { id: '3', name: 'Языки', gradient: 'radial-gradient(100% 100% at 50% 0%, #3EF286 0%, #15EEE1 100%)' },
  { id: '4', name: 'Прочее', gradient: 'linear-gradient(178.42deg, #DAF17C 1.34%, #14F2E5 97.44%)' },
  { id: '5', name: 'Лучшее', gradient: 'linear-gradient(115.36deg, #3B4EFA 2.26%, #3C2626 97.2%)' }
];

export class Article {
  constructor(article) {
    this.id = article.id;
    this.title = article.title;
    this.subtitle = article.subtitle;
    this.date = article.date;
    this.views = article.views;
    this.tags = article.tags;
    this.gradient = article.gradient;
    this.likes = article.likes;
    this.image = article.image;
    this.content = article.content;
  }
}