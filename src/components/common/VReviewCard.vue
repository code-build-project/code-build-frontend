<template>
  <div class="card" :style="{ height: height + 'px' }" @click="$emit('click')">
    <div class="card__score">
      <v-icon class="card__icon-star" path="img/star.svg" />
      <span>{{ review.score }}</span>
    </div>

    <div class="card__text">
      {{ review.text }}
    </div>

    <div class="card__footer">
      <img class="card__avatar-img" alt="" :src="review.image" />

      <div class="card__avatar-info">
        <h1 class="card__avatar-name">
          {{ review.name }}
        </h1>

        <div class="card__avatar-date">
          {{ review.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VReviewCard',
  components: {
    VIcon
  },
  props: {
    // Информация об отзыве
    review: {
      type: Object,
      default: () => {
        return {
          // Оценка
          score: '',
          // Текст
          text: '',
          // Имя автора
          name: '',
          // Дата публикации
          date: '',
          // Аватарка пользователя
          image: ''
        };
      }
    },
    // Высота карты
    height: {
      type: String,
      default: '335'
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  @extend .flex_column;
  position: relative;
  width: 367px;

  padding: 30px;
  overflow: hidden;

  border: 1.5px solid #dce7ff;
  border-radius: 8px;

  &__score {
    @extend .flex_row-center-between;
    width: 60px;
    min-height: 30px;
    line-height: 0;

    padding: 0px 10px 0px 10px;

    background: #ecf2ff;
    border-radius: 5px;
  }

  &__text {
    margin-top: 16px;
    overflow: hidden;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.025em;
    color: #3e4462;
  }

  &__footer {
    @extend .flex_row-center;
    position: absolute;
    width: 100%;
    height: 110px;
    bottom: 30px;
    padding-top: 60px;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 29.69%,
      #ffffff 100%
    );
  }

  &__avatar-img {
    width: 56px;
    height: 56px;

    background: $color-blue;
    border-radius: 11.9226px;
  }

  &__avatar-info {
    @extend .flex_column-center;
    margin-left: 17px;
  }

  &__avatar-name {
    font-family: 'Circe';
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.55px;
    color: #18214d;
  }

  &__avatar-date {
    font-family: 'Circe';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #b0b7c8;
  }
}

// icons
.card__icon {
  &-star {
    width: 15px;
    height: 13px;

    fill: $color-blue;
  }
}

// hovers
:hover.card {
  border-color: $color-blue;
  cursor: pointer;
}
</style>