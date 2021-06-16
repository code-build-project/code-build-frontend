<template>
  <div class="button-wrap">
    <button
      class="button"
      :class="`button-${buttonType}`"
      @click="$emit('click')"
    >
      <icon-premium
        v-if="iconPosition === 'left'"
        class="button__icon-left"
        :width="iconWidth + 'px'"
        :height="iconHeight + 'px'"
      />

      <slot>Кнопка</slot>

      <icon-arrow
        v-if="iconPosition === 'right'"
        class="button__icon-right"
        :width="iconWidth + 'px'"
        :height="iconHeight + 'px'"
      />
    </button>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'
import IconPremium from '@/icons/IconPremium.vue'

export default {
  name: 'VButton',
  components: { IconArrow, IconPremium },
  props: {
    // Название типа кнопки
    buttonType: {
      type: String,
      default: 'header'
    },
    // Позиция иконки
    iconPosition: {
      type: String,
      default: ''
    },
    // Ширина иконки
    iconWidth: {
      type: String,
      default: '30'
    },
    // Высота иконки
    iconHeight: {
      type: String,
      default: '30'
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.button {
  @extend .cb_row-center;
  align-items: center;

  border-style: solid;
  border-radius: 8px;

  &__icon-left {
    margin-right: 0.5em;
  }

  &__icon-right {
    margin-left: 0.5em;
  }

  // Типы кнопок
  &-header {
    width: 168px;
    height: 60px;

    font-family: 'Circe';
    font-size: 18px;
    color: #ffffff;
    border: none;
    background: #ee3465;

    &:hover {
      box-shadow: 0px 12px 18px -13px #ee3465;
    }
  }

  &-buy-premium {
    width: 204px;
    height: 55px;

    font-family: 'Circe';
    font-size: 16px;
    color: #ffffff;
    border: none;
    background: #ee3465;

    &:hover {
      box-shadow: 0px 12px 18px -13px #ee3465;
    }
  }

  &-intro {
    width: 298px;
    height: 84px;

    font-family: 'Circe';
    font-size: 24px;
    color: #256cfe;
    border-color: #256cfe;
    border-width: 0.1em;
    background: transparent;

    ::v-deep path {
      stroke: #256cfe;
    }

    &:hover {
      color: #ffffff;
      background: #256cfe;

      ::v-deep path {
        stroke: #ffffff;
      }
    }
  }

  &-courses {
    width: 200px;
    height: 60px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: #ffffff;
    border-color: #256cfe;
    border-width: 0.1em;
    background: transparent;

    &:hover {
      background: #256cfe;
    }
  }

  &-articles {
    width: 200px;
    height: 60px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: #ffffff;
    border-color: #256cfe;
    border-width: 0.1em;
    background: transparent;

    &:hover {
      background: #256cfe;
    }
  }

  &-reviews {
    width: 230px;
    height: 60px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: #256cfe;
    border-color: #256cfe;
    border-width: 0.1em;
    background: transparent;

    &:hover {
      color: #ffffff;
      background: #256cfe;
    }
  }

  &-reg {
    width: 374px;
    height: 70px;

    font-family: 'EuclidCircular';
    font-size: 20px;
    color: #272a37;
    border-color: #b1b8c6;
    border-width: 1px;
    background: transparent;

    &:hover {
      color: #ffffff;
      background: #256cfe;
    }
  }

  &-auth {
    width: 374px;
    height: 70px;

    font-family: 'EuclidCircular';
    font-size: 20px;
    color: #ffffff;
    background: #256cfe;
    border-color: #b1b8c6;
    border-width: 1px;
  }

  &-interval {
    width: 190px;
    height: 70px;

    font-family: 'Circe';
    font-size: 20px;
    color: #272a37;
    border-color: #b1b8c6;
    border-width: 1px;
    background: transparent;

    &:hover {
      color: #ffffff;
      background: #256cfe;
    }
  }

  &-success {
    width: 190px;
    height: 70px;

    font-family: 'Circe';
    font-size: 20px;
    color: #ffffff;
    border-color: #b1b8c6;
    border-width: 1px;
    background: #256cfe;
  }

  &-player {
    width: 206px;
    height: 53px;

    font-family: 'Circe';
    font-size: 15px;
    color: #ffffff;
    border: none;
    background: #ee3465;
  }

  &-subscrube {
    width: 188px;
    height: 60px;

    font-family: 'Circe';
    font-size: 18px;
    color: #272A37;
    background: transparent;

    border: 1px solid #E4E4E4;
    border-radius: 8px;

    &:hover {
      border: none;
      color: #FFFFFF;
      background: #EE3465;
      box-shadow: 0px 12px 18px -13px #EE3465;
    }
  }
}
</style>