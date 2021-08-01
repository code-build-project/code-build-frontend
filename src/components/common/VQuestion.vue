<template>
  <div class="question">
    <div class="question__title" @click="isDropdown = !isDropdown">
      Какие преимущества даёт Премиум подписка?

      <v-icon
        class="question__icon-angle-bracket"
        path="img/angleBracketMenu.svg"
        :style="isDropdown ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
      />
    </div>

    <div v-if="isDropdown" class="question__dropdown">
      Премиум подписка даёт вам доступ к платным курсам и их обновлениям, в течении выбранного срока
      подписки.
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VQuestion',
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

  &__title {
    @extend .flex_row-center-between;

    font-family: 'Circe';
    font-size: 20px;
    color: $color-black;
  }

  &__dropdown {
    margin-top: 15px;
    font-family: 'Circe';
    font-weight: 350;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-black;
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
    cursor: pointer;
    color: $color-blue;
  }

  .question__icon-angle-bracket {
    cursor: pointer;
    stroke: $color-blue;
  }
}
</style>