<template>
  <div class="reg__wrap">
    <div class="reg">
      <h1 class="reg__title">
        Зарегистрируйся в codebuild и получи бесплатный доступ к более чем 20 курсам
      </h1>

      <div class="reg__input">
        <div class="reg__input-legend">
          Email
        </div>

        <input class="reg__input-field" value="" placeholder="your.email@example.com" />

        <v-icon class="reg__icon-arrow" path="img/arrow.svg" width="23px" height="23px" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'BlockRegistration',
  components: { VIcon }
};
</script>

<style lang="scss" scoped>
.reg__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
}

.reg {
  @extend .flex_row-center-between;
  width: 1160px;
  height: 364px;

  &__title {
    width: 380px;

    font-family: 'Circe';
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -0.025em;
    color: $color-white;
  }

  &__input {
    position: relative;
    width: 496px;
    height: 76px;
    margin-top: 20px;

    font-family: 'Circe';
    border-bottom: 1px solid $color-white;
  }

  &__input-legend {
    font-family: 'Circe';
    font-size: 17px;
    color: $color-white;
  }

  &__input-field {
    margin-top: 15px;

    font-size: 26px;
    letter-spacing: -0.02em;

    border: none;
    background: transparent;
    color: $color-white;

    outline: none;

    &::placeholder {
      color: #518aff;
    }
  }
}

// icons
.reg__icon {
  &-arrow {
    @extend .flex_row-center-center;
    position: absolute;
    width: 50px;
    height: 50px;

    right: 0px;
    bottom: 20px;

    border: 2px solid #3a7afe;
    border-radius: 10px;
    stroke: $color-white;
  }
}

// hovers
:hover.reg {
  &__icon-arrow {
    cursor: pointer;
    stroke: $color-blue;
    background: $color-white;
  }
}
</style>