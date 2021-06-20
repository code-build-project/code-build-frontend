<template>
  <div class="media">
    <div class="media__player">
      <div class="media__screen" />

      <div class="cb_row-between cb_top29">
        <div class="cb_column">
          <div class="media__lesson-number">
            Урок №1
          </div>
          <div class="media__title cb_top20">
            Установка всего необходимого
          </div>
        </div>

        <div class="cb_row">
          <div class="media__icon">
            <icon-heart :stroke="'#DEDEDE'" />
          </div>

          <v-button class="media__button cb_left8">
            Смотреть на YouTube
          </v-button>
        </div>
      </div>

      <!-- Внешние кнопки -->
      <icon-close
        class="media__icon-close"
        @click.native="$emit('close')"
      />
      <icon-angle-bracket class="media__icon-bracket-left" />
      <icon-angle-bracket class="media__icon-bracket-right" />
      <!-- Внешние кнопки -->
    </div>
  </div>
</template>

<script>
import IconHeart from '@/icons/IconHeart.vue'
import IconClose from '@/icons/IconClose.vue'
import IconAngleBracket from '@/icons/IconAngleBracket.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'VMediaPlayer',
  components: {
    IconHeart,
    IconClose,
    IconAngleBracket,
    VButton
  },
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.media {
  @extend .cb_center;
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

    background: #ffffff;
    border-radius: 8px;
  }

  &__screen {
    width: 952px;
    height: 498px;

    background: #202020;
  }

  &__lesson-number {
    font-family: 'Circe';
    font-size: 17px;
    line-height: 16px;
    color: #256cfe;
  }

  &__title {
    font-family: 'Circe';
    font-size: 24px;
    line-height: 19px;
    color: #3a3f4f;
  }

  &__button {
    ::v-deep .button {
      width: 206px;
      height: 53px;

      font-family: 'Circe';
      font-size: 15px;
      color: #ffffff;
      border: none;
      background: #ee3465;
    }
  }

  &__icon {
    @extend .cb_center;
    width: 53px;
    height: 53px;

    border: 0.8px solid #dedede;
    border-radius: 8px;
  }

  &__icon-close {
    position: absolute;
    cursor: pointer;

    top: -100px;
    right: -30px;
  }

  &__icon-bracket-left {
    position: absolute;
    cursor: pointer;
    transform: rotate(180deg);

    top: 320px;
    left: -80px;
  }

  &__icon-bracket-right {
    position: absolute;
    cursor: pointer;

    top: 320px;
    right: -80px;
  }
}
</style>