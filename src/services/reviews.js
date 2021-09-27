import request from '@/helpers/http';

export default {
  // Получить список отзывов
  getReviews: async () => {
    const response = await request.get(`/reviews`);
    return response.data;
  },
};