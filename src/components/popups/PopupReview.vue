<template>
  <div class="card">
    <v-icon class="card__icon-close" path="img/close.svg" @click="closePopup()" />

    <div class="card__score">
      <v-icon class="card__icon-star" path="img/star.svg" />
      <span>4,5</span>
    </div>

    <div class="card__text">
      Всем привет! Мне 27, я из Королёва. По окончании школы я связал свою жизнь с полиграфией и
      поступил в Университет Печати им. Ивана Фёдорова. Работаю дизайнером наружной рекламы и мне
      надоело. Всем привет! Мне 27, я из.
    </div>

    <div class="card__footer">
      <div class="card__avatar-img" />

      <div class="card__avatar-info">
        <h1 class="card__avatar-name">
          Кристина Белова
        </h1>

        <div class="card__avatar-date">
          21 января 2021
        </div>
      </div>
    </div>

    <!-- Внешние кнопки -->
    <v-icon class="card__icon-bracket-left" path="img/angleBracketPopup.svg" />
    <v-icon class="card__icon-bracket-right" path="img/angleBracketPopup.svg" />
    <!-- Внешние кнопки -->
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'PopupReview',
  components: {
    VIcon
  },
  methods: {
    closePopup() {
      this.$store.commit('closePopup');
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  @extend .flex_column-start-center;
  position: relative;
  width: 764px;
  height: 600px;
  padding: 40px;
  box-sizing: border-box;

  font-family: 'Circe';

  background: $color-white;
  border-radius: 29px;

  &__score {
    @extend .flex_row-center-center;
    width: 116px;
    height: 58px;
    margin-top: 38px;

    font-size: 29px;
    letter-spacing: -0.9px;
    color: #3e4462;

    padding: 0px 10px 0px 10px;
    box-sizing: border-box;

    background: #ecf2ff;
    border-radius: 9px;
  }

  &__text {
    width: 615px;
    text-align: center;
    margin-top: 40px;
    overflow: hidden;

    font-size: 25px;
    line-height: 36px;
    color: #3e4462;
  }

  &__footer {
    @extend .flex_row;
    margin-top: 60px;
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
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.55px;
    color: #18214d;
  }

  &__avatar-date {
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #b0b7c8;
  }
}

// icons
.card__icon {
  &-close {
    width: 23px;
    height: 23px;

    align-self: flex-end;
    stroke: $color-gray;
    cursor: pointer;
  }

  &-star {
    width: 26px;
    height: 25px;
    margin-right: 10px;

    fill: $color-blue;
  }

  &-bracket-left,
  &-bracket-right {
    position: absolute;
    width: 23px;
    height: 39px;

    top: 300px;
    cursor: pointer;
    stroke: $color-white;
  }

  &-bracket-left {
    left: -100px;
    transform: rotate(180deg);
  }

  &-bracket-right {
    right: -100px;
    transform: rotate(0deg);
  }
}
</style>