<template>
  <div class="reviews">
    <div class="reviews__title">Отзывы о наших курсах</div>

    <div class="reviews__list">
      <v-review-card class="reviews__list-item" />

      <v-review-card class="reviews__list-item">
        <template #text>
          Всем привет! Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из. Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из.Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из. Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь.
        </template>
      </v-review-card>

      <v-review-card class="reviews__list-item" />

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item">
        <template #text>
          Всем привет! Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из. Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из.Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь 
          с полиграфией и поступил в Университет 
          Печати им. Ивана Фёдорова. 
          Работаю дизайнером наружной рекламы и мне надоело. 
          Всем привет! Мне 27, я из. Всем привет! 
          Мне 27, я из Королёва.  
          По окончании школы я связал свою жизнь.
        </template>
      </v-review-card>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

    </div>

    <div class="reviews_row">
      <div class="reviews__button">
        Показать еще
      </div>
    </div>
  </div>
</template>

<script>
import VReviewCard from '@/components/common/VReviewCard.vue';

export default {
  name: 'Reviews',
  components: { 
    VReviewCard,
  }
}
</script>

<style lang="scss" scoped>
  .reviews {
    padding: 100px 380px 80px 380px;
    // box-sizing: border-box;

    &__title {
      font-family: 'ObjectSans';
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 44px;
      letter-spacing: -1.5px;
      color: #18214D;
    }

    &__list {
      margin-top: 50px;

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      height: 800px;

      overflow: hidden;
    }

    &__list-item {
      margin-bottom: 30px;
    }

    &__button {
      width: 228px;
      height: 60px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #256CFE;
      border-radius: 8px;

      font-family: 'EuclidCircular';
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;
      color: #256CFE;
    }

    // общие классы
    &_row {
      display: flex;
      flex-direction: row;
      justify-content: center;

      padding: 20px;
    }
  }
</style>
