<template>
  <div class="card">
    <div class="card__poster" />

    <div
      class="card__info"
      @click="$emit('click')"
    >
      <div class="card__lesson-number">
        Урок №{{ lessonNamber }}
      </div>

      <div class="card__title">
        {{ title }}
      </div>

      <div class="card__footer">
        <div class="card__footer-item">
          <icon-timer
            :fill="'#3A3F4F'"
            width="15"
            height="15"
          />
          <span class="cb_left5">{{ time }}</span>
        </div>

        <div class="card__footer-item">
          <icon-open-eye
            :fill="'#3A3F4F'"
            width="17"
            height="14"
          />
          <span class="cb_left5">{{ views }}</span>
        </div>
      </div>
    </div>

    <div
      class="card__icon-heart"
      @click="isLike = !isLike"
    >
      <icon-heart :fill="isLike ? '#EE3465' : 'transparent'" />
    </div>
  </div>
</template>

<script>
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'
import IconHeart from '@/icons/IconHeart.vue'

export default {
  name: 'VCourseCard',
  components: { 
    IconTimer,
    IconOpenEye,
    IconHeart,
  },
  props: {
    // Номер урока
    lessonNamber: {
      type: String,
      default: '1',
    },
    // Название урока
    title: {
      type: String,
      default: 'Установка всего необходимого',
    },
    // Время урока
    time: {
      type: String,
      default: '1 ч. 25 м.',
    },
    // Количество просмотров урока
    views: {
      type: String,
      default: '300',
    },
  },
  data() {
    return {
      isLike: false,
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 268px;
  height: 338px;

  &__poster {
    width: 268px;
    height: 181px;

    background: #C4C4C4;
    border-radius: 8px 8px 0px 0px;
  }

  &__info {
    @extend .cb_column-between;
    align-items: stretch;

    width: 268px;
    height: 157px;

    padding: 17px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 0px 0px 8px 8px;
  }

  &__lesson-number {
    cursor: pointer;
    
    font-family: 'Circe';
    font-size: 15px;
    line-height: 18px;
    color: #256CFE;
  }

  &__title {
    width: 200px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 21px;
    color: #3A3F4F;
  }

  &__footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 12px;
    color: #3A3F4F;
  }

  &__footer-item {
    @extend .cb_row-between;
    height: 40px;

    padding: 0px 27px 0px 24px;

    border: 1px solid #EDEDED;
    border-radius: 7px;
  }

  &__icon-heart {
    @extend .cb_center;
    position: absolute;

    top: 19px;
    right: 19px;
    cursor: pointer;
  }
}
</style>