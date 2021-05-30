<template>
  <div class="intro__wrap">
    <div class="intro">
      <div class="intro__title cb_top170">
        Повысь<br />
        свои навыки программирования вместе с
        <span class="cb_color-blue">codebuild</span>
      </div>

      <div class="intro__subtitle cb_top30">
        Платные и бесплатные видеокурсы по программированию для новичков и
        middle-разработчиков
      </div>

      <v-button
        class="cb_top80"
        button-type="intro"
        icon-position="right"
      >
        Начать учиться
      </v-button>

      <!-- Иконки заднего фона -->
      <icon-iphone class="intro__iphone" />

      <icon-ipad class="intro__ipad" />
      <!-- Иконки заднего фона -->
    </div>
  </div>
</template>

<script>
import IconIphone from '@/icons/IconIphone.vue'
import IconIpad from '@/icons/IconIpad.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Intro',
  components: {
    IconIphone,
    IconIpad,
    VButton
  }
}
</script>

<style lang="scss" scoped>
.intro__wrap {
  @extend .cb_center;
  width: 100%;

  background: transparent;
  overflow: hidden;
}

.intro {
  @extend .cb_column;
  position: relative;
  width: 1160px;
  height: 960px;

  &__title {
    width: 550px;

    font-family: 'ObjectSans';
    font-size: 57px;
    line-height: 56px;
    letter-spacing: -0.01em;
    color: #15244b;
  }

  &__subtitle {
    width: 400px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 35px;
    color: #3e4462;
  }

  &__iphone {
    position: absolute;
    left: 513px;
    top: 487px;
    z-index: 1;
  }

  &__ipad {
    position: absolute;
    left: 743px;
    top: 252px;
  }
}
</style>