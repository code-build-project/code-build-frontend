<template>
  <div class="reviews">
    <div class="reviews__title">Отзывы о наших курсах</div>

    <div class="reviews__list">
      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item">
        <!-- <template #text>
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
        </template> -->
      </v-review-card>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>

      <v-review-card class="reviews__list-item"/>
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
    height: 1213px;

    padding: 100px 380px 100px 380px;
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
    }

    &__list-item {
      margin-bottom: 30px;
    }
  }
</style>
