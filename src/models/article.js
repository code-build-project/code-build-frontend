export default class Article {
  constructor(article, likes = []) {
    this.id = article.id;
    this.title = article.title;
    this.subtitle = article.subtitle;
    this.date = article.date;
    this.views = article.views;
    this.tags = article.tags;
    this.isLike = likes.includes(article.id);
    this.gradient = article.gradient;
    this.image = article.image;
    this.content = article.content;
  }
}