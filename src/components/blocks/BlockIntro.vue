<template>
  <div class="intro__wrap">
    <div class="intro">
      <div class="intro__title cb_top170">
        Повысь<br />
        свои навыки программирования вместе с
        <span class="cb_color-blue">codebuild</span>
      </div>

      <div class="intro__subtitle cb_top30">
        Платные и бесплатные видеокурсы по программированию для новичков и middle-разработчиков
      </div>

      <v-button class="intro__button cb_top80" @click="$router.push('/courses')">
        Начать учиться
        <icon-arrow class="cb_left9 cb_top3" stroke="#256cfe" width="30" height="30" />
      </v-button>

      <!-- Иконки заднего фона -->
      <icon-iphone class="intro__iphone" />

      <icon-ipad class="intro__ipad" />
      <!-- Иконки заднего фона -->
    </div>
  </div>
</template>

<script>
import IconIpad from '@/icons/IconIpad.vue';
import IconArrow from '@/icons/IconArrow.vue';
import IconIphone from '@/icons/IconIphone.vue';

import VButton from '@/components/common/VButton.vue';

export default {
  name: 'BlockIntro',
  components: {
    IconIpad,
    IconArrow,
    IconIphone,
    VButton
  }
};
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

  &__button {
    ::v-deep .button {
      width: 298px;
      height: 84px;

      font-family: 'Circe';
      font-size: 24px;
      color: #256cfe;
      border: 2px solid #256cfe;
      background: transparent;
    }
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

// hovers
:hover.intro {
  &__button {
    ::v-deep .button {
      color: #ffffff;
      background: #256cfe;

      path {
        stroke: #ffffff;
      }
    }
  }
}
</style>