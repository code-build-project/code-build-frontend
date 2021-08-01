<template>
  <div class="media">
    <div class="media__player">
      <div class="media__screen" />

      <div class="media__footer">
        <div class="media__footer-titles">
          <div class="media__lesson-number">
            Урок №1
          </div>
          <h1 class="media__title">
            Установка всего необходимого
          </h1>
        </div>

        <div class="media__footer-buttons">
          <v-icon class="media__icon-heart" path="img/heart.svg" width="16px" height="14px" />
          <v-button class="media__button">
            Смотреть на YouTube
          </v-button>
        </div>
      </div>

      <!-- Внешние кнопки -->
      <v-icon class="media__icon-close" path="img/close.svg" @click.native="$emit('close')" />
      <v-icon class="media__icon-bracket-left" path="img/angleBracketMedia.svg" />
      <v-icon class="media__icon-bracket-right" path="img/angleBracketMedia.svg" />
      <!-- Внешние кнопки -->
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'VMediaPlayer',
  components: {
    VIcon,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.media {
  @extend .flex_row-center-center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);

  &__player {
    position: relative;
    width: 1022px;
    height: 660px;

    padding: 35px;
    box-sizing: border-box;

    background: $color-white;
    border-radius: 8px;
  }

  &__screen {
    width: 952px;
    height: 498px;

    background: #202020;
  }

  &__footer {
    @extend .flex_row-center-between;
    margin-top: 29px;
  }

  &__footer-titles {
    @extend .flex_column;
  }

  &__footer-buttons {
    @extend .flex_row;
  }

  &__lesson-number {
    font-family: 'Circe';
    font-size: 17px;
    color: $color-blue;
  }

  &__title {
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 19px;
    color: #3a3f4f;
  }

  &__button {
    width: 206px;
    height: 53px;
    margin-left: 8px;

    font-family: 'Circe';
    font-size: 15px;
    color: $color-white;
    border: none;
    background: $color-pink;
  }
}

// icons
.media__icon {
  &-heart {
    @extend .flex_row-center-center;
    width: 53px;
    height: 53px;

    border: 0.8px solid #dedede;
    border-radius: 8px;

    fill: transparent;
    stroke: #dedede;
  }

  &-close {
    position: absolute;
    width: 100px;
    height: 100px;

    top: -100px;
    right: -30px;
    cursor: pointer;
  }

  &-bracket-left {
    position: absolute;
    width: 20px;
    height: 38px;

    top: 320px;
    left: -80px;
    cursor: pointer;
    stroke: $color-white;
    transform: rotate(180deg);
  }

  &-bracket-right {
    position: absolute;
    width: 20px;
    height: 38px;

    top: 320px;
    right: -80px;
    cursor: pointer;
    stroke: $color-white;
    transform: rotate(0deg);
  }
}
</style>