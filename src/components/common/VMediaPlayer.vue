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

          <v-button button-type="player cb_left8">
            Смотреть на YouTube
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconHeart from '@/icons/IconHeart.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'VMediaPlayer',
  components: {
    IconHeart, 
    VButton
  },
  props: {

  },
  data() {
    return {}
  },
  computed: {},
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
    width: 1022px;
    height: 660px;

    padding: 35px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 8px;
  }

  &__screen {
    width: 952px;
    height: 498px;

    background: #202020;
  }

  &__footer {

  }

  &__lesson-number {
    font-family: 'Circe';
    font-size: 17px;
    line-height: 16px;
    color: #256CFE;
  }

  &__title {
    font-family: 'Circe';
    font-size: 24px;
    line-height: 19px;
    color: #3A3F4F;
  }

  &__icon {
    @extend .cb_center;
    width: 53px;
    height: 53px;

    border: 0.8px solid #DEDEDE;
    border-radius: 8px;
  }
}
</style>