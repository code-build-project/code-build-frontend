<template>
  <div class="intro">
    <div class="intro__title">
      Повысь<br/>
      свои навыки
      программирования 
      вместе с <span class="intro__title_blue">codebuild</span>
    </div>

    <div class="intro__subtitle">
      Платные и бесплатные видеокурсы 
      по программированию для новичков 
      и middle-разработчиков
    </div>

    <v-button />

    <icon-i-phone class="intro__iphone"/>
  </div>
</template>

<script>
import IconIPhone from '@/icons/IconIPhone.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Intro',
  components: { IconIPhone, VButton }
}
</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    height: 960px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include adaptiv-padding(380, 40);
    padding-bottom: 265px !important;
    padding-top: 180px !important;
    box-sizing: border-box;

    overflow: hidden;

    &__title {
      width: 550px;

      font-family: 'ObjectSans';
      font-style: normal;
      font-weight: normal;
      font-size: 57px;
      line-height: 56px;
      letter-spacing: -0.01em;

      color: #15244B;

      &_blue {
        color: #256CFE;
      }
    }

    &__subtitle {
      width: 400px;

      font-family: 'Circe';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 35px;

      color: #3E4462;
    }

    &__iphone {
      position: absolute;

      left: 910px;
      top: 487px;
    }
  }
</style>
