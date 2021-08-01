<template>
  <div class="card" :style="{ height: height + 'px' }">
    <div class="card__score">
      <v-icon class="card__icon-star" path="img/star.svg" />
      <span>{{ score }}</span>
    </div>

    <div class="card__text">
      {{ text }}
    </div>

    <div class="card__avatar">
      <div class="card__avatar-img" />

      <div class="card__avatar-info">
        <h1 class="card__avatar-name">
          {{ name }}
        </h1>

        <div class="card__avatar-date">
          {{ date }}
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
    // Высота карты
    height: {
      type: String,
      default: '335'
    },
    // Оценка
    score: {
      type: String,
      default: '4,5'
    },
    // Текст
    text: {
      type: String,
      default: `Всем привет! Мне 27, я из Королёва.  
        По окончании школы я связал свою жизнь 
        с полиграфией и поступил в Университет 
        Печати им. Ивана Фёдорова. Работаю 
        дизайнером наружной рекламы и мне 
        надоело. Всем привет! Мне 27, я из.`
    },
    // Имя автора
    name: {
      type: String,
      default: 'Автор'
    },
    // Дата публикации
    date: {
      type: String,
      default: '21 января 2021'
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 367px;

  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;

  border: 1.5px solid #dce7ff;
  border-radius: 8px;

  &__score {
    @extend .flex_row-center-between;
    width: 60px;
    height: 30px;

    padding: 0px 10px 0px 10px;
    box-sizing: border-box;

    background: #ecf2ff;
    border-radius: 5px;
  }

  &__text {
    margin-top: 16px;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.025em;
    color: #3e4462;
  }

  &__avatar {
    @extend .flex_row;
    margin-top: 35px;
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
  border-color: #256cfe;
  cursor: pointer;
}
</style>