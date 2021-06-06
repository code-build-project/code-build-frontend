<template>
  <div class="reg__wrap">
    <div class="reg">
      <div class="reg__info">
        Зарегистрируйся в codebuild и получи бесплатный доступ к более чем 20 курсам
      </div>

      <div class="reg__input">
        <div class="reg__input-legend">
          Email
        </div>

        <input
          class="reg__input-field"
          value=""
          placeholder="your.email@example.com"
        />

        <div class="reg__input-icon">
          <icon-arrow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'

export default {
  name: 'BlockRegistration',
  components: { IconArrow }
}
</script>

<style lang="scss" scoped>
.reg__wrap {
  @extend .cb_center;
  width: 100%;
  background: #256cfe;
}

.reg {
  @extend .cb_row-between;
  width: 1160px;
  height: 364px;

  &__info {
    width: 380px;

    font-family: 'Circe';
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -0.025em;
    color: #ffffff;
  }

  &__input {
    position: relative;
    width: 496px;
    height: 80px;

    font-family: 'Circe';
    border-bottom: 1px solid #ffffff;
  }

  &__input-legend {
    font-family: 'Circe';
    font-size: 17px;
    line-height: 19px;
    color: #ffffff;
  }

  &__input-field {
    margin-top: 20px;

    font-size: 26px;
    line-height: 19px;
    letter-spacing: -0.02em;

    border: none;
    background: transparent;
    color: #ffffff;

    outline: none;

    &::placeholder {
      color: #518aff;
    }
  }

  &__input-icon {
    @extend .cb_center;
    position: absolute;
    width: 50px;
    height: 50px;

    right: 0px;
    bottom: 20px;

    border: 2px solid #3a7afe;
    border-radius: 10px;
  }
}

// hovers
:hover.reg {
  &__input-icon {
    background: #ffffff;
    cursor: pointer;

    ::v-deep path {
      stroke: #256cfe;
    }
  }
}
</style>