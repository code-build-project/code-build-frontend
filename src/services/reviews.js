import request from '@/helpers/http';
import { Review } from "../models/reviews.js";

export default {
  // Получить список отзывов
  getReviews: async () => {
    const { data } = await request.get(`/reviews`);
    return data.map((item) => new Review(item));
  },
};