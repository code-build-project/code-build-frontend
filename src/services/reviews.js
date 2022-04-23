import { Review } from "../models/reviews.js";
import AbstractService from '@/services/abstractService.js';

export default class Reviews extends AbstractService {
  /**
   * Получение списка отзывов
   */
  async getReviewList() {
    const { data } = await this.api.get('/reviews');
    return data.map((item) => new Review(item));
  }
}