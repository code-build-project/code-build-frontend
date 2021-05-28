<template>
  <div class="card">
    <div class="card__poster">

    </div>

    <div class="card__info">
      <div class="card__info-lesson">
        {{ lessonNamber }}
      </div>

      <div class="card__info-text">
        {{ title }}
      </div>

      <div class="card__info-footer">
        <div class="card__info-footer_item">
          <icon-timer :fill="'#3A3F4F'" width="15" height="15"/>
          <span class="cb_left5">{{ time }}</span>
        </div>

        <div class="card__info-footer_item">
          <icon-open-eye :fill="'#3A3F4F'" width="17" height="14"/>
          <span class="cb_left5">{{ views }}</span>
        </div>
      </div>
    </div>

    <div class="card__icon-heart">
      <icon-heart />
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
    lessonNamber: {
      type: String,
      default: 'Урок №1',
    },
    // Название курса
    title: {
      type: String,
      default: 'Установка всего необходимого',
    },
    // Количество уроков
    lessons: {
      type: String,
      default: '6 уроков',
    },
    // Общее время курса
    time: {
      type: String,
      default: '1 ч. 25 м.',
    },
    // Количество просмотров курса
    views: {
      type: String,
      default: '300',
    },
  },
  data() {
    return {}
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

    background: #256CFE;
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

  &__info-lesson {
    display: flex;
    align-items: center;
    
    font-family: 'Circe';
    font-size: 15px;
    line-height: 18px;
    color: #256CFE;
  }

  &__info-text {
    width: 200px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 21px;
    color: #3A3F4F;
  }

  &__info-footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 12px;
    color: #3A3F4F;

    &_item {
      @extend .cb_row-between;
      height: 40px;

      padding: 0px 27px 0px 24px;

      border: 1px solid #EDEDED;
      border-radius: 7px;
    }
  }

  &__icon-heart {
    @extend .cb_center;
    position: absolute;

    top: 19px;
    right: 19px;
  }
}
</style>
