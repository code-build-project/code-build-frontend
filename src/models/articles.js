export const Filters = [
  { id: '', name: 'Все статьи' },
  { id: '1', name: 'Игры' },
  { id: '2', name: 'Сайты' },
  { id: '3', name: 'Языки' },
  { id: '4', name: 'Прочее' },
  { id: '5', name: 'Лучшее' }
];

export class Article {
  constructor(article) {
    this.id = article.id;
    this.title = article.title;
    this.subtitle = article.subtitle;
    this.date = article.date;
    this.views = article.views;
    this.tags = article.tags;
    this.likes = article.likes;
    this.image = article.image;
    this.content = article.content;
  }
}