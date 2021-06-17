<template>
  <div class="question">
    <div class="question__title" @click="isDropdown = !isDropdown">
      Какие преимущества даёт Премиум подписка?
      <icon-angle-bracket 
        class="question__icon"
        :style="isDropdown ? 'transform: rotate(-90deg)' : 'transform: rotate(90deg)'"
        width="16"
        height="12"
        stroke="#323232"
        stroke-width="6"
      />
    </div>

    <div v-if="isDropdown" class="question__dropdown cb_top15">
      Премиум подписка даёт вам доступ к платным курсам
      и их обновлениям, в течении выбранного срока подписки.
    </div>
  </div>
</template>

<script>
import IconAngleBracket from '@/icons/IconAngleBracket.vue'

export default {
  name: 'VQuestion',
  components: { 
    IconAngleBracket, 
  },

  props: {

  },
  
  data() {
    return {
      isDropdown: false
    }
  },
}
</script>

<style lang="scss" scoped>
.question {
  @extend .cb_column;
  width: 550px;

  padding: 34px 0px 34px 0px;

  border-bottom: 1px solid #E4E4E4;

  &__title {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 20px;
    color: #272A37;
  }

  &__dropdown {
    font-family: 'Circe';
    font-weight: 350;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #272A37;
  }
}

// hovers
:hover.question {
  .question__title {
    cursor: pointer;
    color: #256CFE;
  }

  .question__icon{
    cursor: pointer;

    ::v-deep {
      path {
        stroke: #256CFE;
      }
    }
  }
}
</style>