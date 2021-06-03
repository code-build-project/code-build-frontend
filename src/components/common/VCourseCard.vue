<template>
  <div
    class="card"
    @click="$emit('click')"
  >
    <div class="card__poster" />

    <div class="card__info">
      <div class="card__level">
        <span class="cb_right5">Сложность</span>

        <icon-ellipse
          v-for="item in [1,2,3,4,5]"
          :key="item" 
          class="cb_left2"
          width="8" 
          height="8" 
          :fill="level >= item ? '#EE3465' : '#EDEDED'"
        />
      </div>

      <div class="card__title cb_top15">
        {{ title }}
      </div>

      <div class="card__footer cb_top35">
        <div class="card__footer-item cb_width112">
          <icon-video
            width="18"
            height="18"
            fill="#3A3F4F"
          />
          <span class="cb_left8">{{ lessons }}</span>
        </div>

        <div class="card__footer-item cb_width103">
          <icon-timer
            width="18"
            height="18"
            fill="#3A3F4F"
          />
          <span class="cb_left8">{{ time }}</span>
        </div>

        <div class="card__footer-item cb_width80">
          <icon-open-eye
            width="21"
            height="18"
            fill="#3A3F4F"
          />
          <span class="cb_left8">{{ views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconEllipse from '@/icons/IconEllipse.vue'
import IconVideo from '@/icons/IconVideo.vue'
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

export default {
  name: 'VCourseCard',
  components: { 
    IconEllipse,
    IconVideo,
    IconTimer,
    IconOpenEye,
  },
  props: {
    // Название курса
    title: {
      type: String,
      default: 'Название курса',
    },
    // Уровень сложности
    level: {
      type: String,
      default: '1',
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
  width: 367px;

  &__poster {
    height: 240px;

    background: #C4C4C4;
    border-radius: 8px 8px 0px 0px;
  }

  &__info {
    @extend .cb_column;
    height: 226px;

    padding: 21px 27px 27px 27px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 0px 0px 8px 8px;
  }

  &__level {
    @extend .cb_row;
    align-items: center;
    
    font-family: 'EuclidCircular';
    font-size: 15px;
    color: #3A3F4F;
  }

  &__title {
    width: 300px;
    height: 72px;

    font-family: 'Circe';
    font-size: 26px;
    line-height: 35px;
    color: #3A3F4F;
    letter-spacing: -0.01em;
  }

  &__footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 12px;
    color: #3A3F4F;
  }

  &__footer-item {
    @extend .cb_row-center;
    align-items: center;
    height: 40px;

    border: 1px solid #EDEDED;
    border-radius: 7px;
  }
}
</style>