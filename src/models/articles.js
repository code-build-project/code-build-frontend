export const Filters = [
  { id: 1, name: 'Все статьи', tag: '' },
  { id: 2, name: 'Игры', tag: 'game' },
  { id: 3, name: 'Сайты', tag: 'web' },
  { id: 4, name: 'Языки', tag: 'language' },
  { id: 5, name: 'Прочее', tag: 'other' },
  { id: 6, name: 'Лучшее', tag: 'best' }
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