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
      <v-button 
        fontFamily="EuclidCircular"
        fontSize="18"
        :isIcon="false"
      >
        Показать еще
      </v-button>
    </div>
  </div>
</template>

<script>
import VReviewCard from '@/components/common/VReviewCard.vue';
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Reviews',
  components: { 
    VReviewCard,
    VButton,
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  width: 1160px;
  padding: 100px 0px 80px 0px;

  &__title {
    font-family: 'ObjectSans';
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

  // общие классы
  &_row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 20px;
  }
}
</style>
