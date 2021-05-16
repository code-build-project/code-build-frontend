<template>
  <div class="card">
    <div class="card__score">
      <icon-star />
      <span>4,5</span>
    </div>

    <div class="card__text">
      <slot name="text">
        Всем привет! Мне 27, я из Королёва.  
        По окончании школы я связал свою жизнь 
        с полиграфией и поступил в Университет 
        Печати им. Ивана Фёдорова. Работаю 
        дизайнером наружной рекламы и мне 
        надоело. Всем привет! Мне 27, я из.
      </slot>
    </div>

    <div class="card_row card_top35">
      <div class="card__avatar-img">

      </div>

      <div class="card_column card_left17">
        <div class="card__avatar-name">Кристина Белова</div>
        <div class="card__avatar-date">21 января 2021</div>
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
};
</script>

<style lang="scss" scoped>
.card {
  width: 367px;
  height: 335px;

  padding: 30px;
  box-sizing: border-box;

  border: 1.5px solid #DCE7FF;
  border-radius: 8px;

  &__score {
    width: 60px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 10px 0px 10px;
    box-sizing: border-box;

    background: #ECF2FF;
    border-radius: 5px;
  }

  &__text {
    margin-top: 16px;

    font-family: 'Circe';
    font-style: normal;
    font-weight: normal;
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
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.55px;
    color: #18214D;
  }

  &__avatar-date {
    font-family: 'Circe';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
    color: #B0B7C8;
  }

  // общие классы
  &_column {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &_row {
    display: flex;
    flex-direction: row;
  }

  &_left17 {
    margin-left: 17px;
  }

  &_top35 {
    margin-top: 35px;
  }
}
</style>
