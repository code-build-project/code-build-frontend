<template>
  <div class="intro__wrap">
    <div class="intro">
      <h1 class="intro__title">
        Повысь<br />
        свои навыки программирования вместе с
        <span class="intro__title-blue">codebuild</span>
      </h1>

      <h2 class="intro__subtitle">
        Платные и бесплатные видеокурсы по программированию для новичков и middle-разработчиков
      </h2>

      <v-button class="intro__button" @click="$router.push('/courses')">
        Начать учиться
        <v-icon class="intro__icon-arrow" path="img/arrow.svg" />
      </v-button>

      <!-- Иконки заднего фона -->
      <v-icon class="intro__icon-iphone" path="img/iphone.svg" />

      <v-icon class="intro__icon-ipad" path="img/ipad.svg" />
      <!-- Иконки заднего фона -->
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'BlockIntro',
  components: {
    VIcon,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.intro__wrap {
  @extend .flex_row-center-center;
  width: 100%;

  background: transparent;
  overflow: hidden;
}

.intro {
  @extend .flex_column;
  position: relative;
  width: 1160px;
  height: 960px;

  &__title {
    width: 550px;
    margin-top: 170px;

    font-family: 'ObjectSans';
    font-size: 57px;
    line-height: 56px;
    letter-spacing: -0.01em;
    color: #15244b;
  }

  &__title-blue {
    @extend .intro__title;
    color: $color-blue;
  }

  &__subtitle {
    width: 400px;
    margin-top: 30px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 35px;
    color: #3e4462;
  }

  &__button {
    width: 298px;
    height: 84px;
    margin-top: 80px;

    font-family: 'Circe';
    font-size: 24px;
    color: $color-blue;
    border: 2px solid $color-blue;
  }
}

// icons
.intro__icon {
  &-arrow {
    width: 30px;
    height: 30px;

    margin-left: 9px;
    stroke: $color-blue;
  }

  &-iphone {
    position: absolute;
    width: 361px;
    height: 719px;
    left: 513px;
    top: 487px;
    z-index: 1;
  }

  &-ipad {
    position: absolute;
    width: 801px;
    height: 868px;
    left: 743px;
    top: 252px;
  }
}

// hovers
:hover.intro {
  &__button {
    color: $color-white;
    background: $color-blue;

    .intro__icon-arrow {
      stroke: $color-white;
    }
  }
}
</style>