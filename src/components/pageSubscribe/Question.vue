<template>
  <div class="question" @click="isDropdown = !isDropdown">
    <div class="question__title">
      Какие преимущества даёт Премиум подписка?

      <v-icon
        class="question__icon-angle-bracket"
        path="img/angleBracketMenu.svg"
        :style="isDropdown ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
      />
    </div>

    <div
      class="question__dropdown"
      :class="isDropdown ? 'animation-appearance' : 'animation-disappearance'"
    >
      Премиум подписка даёт вам доступ к платным курсам и их обновлениям, в течении выбранного срока
      подписки.
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'SubscribeQuestion',
  components: {
    VIcon
  },

  data() {
    return {
      isDropdown: false
    };
  }
};
</script>

<style lang="scss" scoped>
.question {
  @extend .flex_column;
  width: 550px;
  padding: 34px 0px 34px 0px;
  border-bottom: 1px solid $color-silver;
  cursor: pointer;

  &__title {
    @extend .flex_row-center-between;

    font-family: 'Circe';
    font-size: 20px;
    color: $color-black;
    background: $color-white;
    position: relative;
  }

  &__dropdown {
    font-family: 'Circe';
    font-weight: 350;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-black;
    animation: slidegdz 0.7s linear forwards;
  }
}

.animation-appearance {
  opacity: 0;
  animation: appearance 0.7s linear forwards;
}

@keyframes appearance {
  0% {
    margin-top: -30px;
  }
  100% {
    opacity: 1;
    margin-top: 15px;
  }
}

.animation-disappearance {
  opacity: 1;
  animation: disappearance 0.7s linear forwards;
}

@keyframes disappearance {
  0% {
    margin-top: 15px;
  }
  100% {
    margin-top: -30px;
    opacity: 0;
  }
}

// icons
.question__icon {
  &-angle-bracket {
    width: 16px;
    height: 12px;

    stroke: #323232;
    stroke-width: 6px;
  }
}

// hovers
:hover.question {
  .question__title {
    color: $color-blue;
  }

  .question__icon-angle-bracket {
    stroke: $color-blue;
  }
}
</style>