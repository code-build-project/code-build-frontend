<template>
  <div
    class="card"
    :style="{'height': height + 'px'}"
  >
    <div class="card__score">
      <icon-star />
      <span>{{ score }}</span>
    </div>

    <div class="card__text">
      {{ text }}
    </div>

    <div class="cb_row cb_top35">
      <div class="card__avatar-img" />

      <div class="cb_column-center cb_left17">
        <div class="card__avatar-name">
          {{ name }}
        </div>
        <div class="card__avatar-date">
          {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconStar from '@/icons/IconStar.vue';

export default {
  name: 'VReviewCard',
  components: {
    IconStar,
  },
  props: {
    // Высота карты
    height: {
      type: String,
      default: '335',
    },
    // Оценка
    score: {
      type: String,
      default: '4,5',
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
      default: 'Автор',
    },
    // Дата публикации
    date: {
      type: String,
      default: '21 января 2021',
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 367px;

  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;

  border: 1.5px solid #DCE7FF;
  border-radius: 8px;

  &__score {
    @extend .cb_row-between;
    width: 60px;
    height: 30px;

    padding: 0px 10px 0px 10px;
    box-sizing: border-box;

    background: #ECF2FF;
    border-radius: 5px;
  }

  &__text {
    margin-top: 16px;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.025em;
    color: #3E4462;
  }

  &__avatar-img {
    width: 56px;
    height: 56px;

    background: #256CFE;
    border-radius: 11.9226px;
  }

  &__avatar-name {
    font-family: 'Circe';
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.55px;
    color: #18214D;
  }

  &__avatar-date {
    font-family: 'Circe';
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #B0B7C8;
  }
}

// hovers
:hover.card {
  border-color: #256CFE;
  cursor: pointer;
}
</style>