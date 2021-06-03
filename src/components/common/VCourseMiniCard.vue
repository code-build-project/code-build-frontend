<template>
  <div class="card">
    <div class="card__poster" />

    <div class="card__info">
      <div class="card__level">
        <span class="cb_right5">Сложность</span>

        <icon-ellipse
          v-for="item in [1,2,3,4,5]"
          :key="item" 
          class="cb_left2"
          width="6" 
          height="6" 
          :fill="level >= item ? '#EE3465' : '#3A3F4F'"
        />
      </div>

      <div class="card__title">
        {{ title }}
      </div>

      <div class="card__footer">
        <div class="card__footer-item">
          <icon-video />
          <span class="cb_left5">{{ lessons }}</span>
        </div>

        <div class="card__footer-item">
          <icon-timer />
          <span class="cb_left5">{{ time }}</span>
        </div>

        <div class="card__footer-item">
          <icon-open-eye />
          <span class="cb_left5">{{ views }}</span>
        </div>
      </div>
    </div>

    <div
      v-if="fire"
      class="card__icon-fire"
    >
      <icon-fire />
    </div>
  </div>
</template>

<script>
import IconEllipse from '@/icons/IconEllipse.vue'
import IconVideo from '@/icons/IconVideo.vue'
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'
import IconFire from '@/icons/IconFire.vue'

export default {
  name: 'VCourseMiniCard',
  components: { 
    IconEllipse,
    IconVideo,
    IconTimer,
    IconOpenEye,
    IconFire,
  },
  props: {
    // Уровень сложности
    level: {
      type: String,
      default: '1',
    },
    // Название курса
    title: {
      type: String,
      default: 'Название курса',
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
    // Метка о популярности курса
    fire: {
      type: Boolean,
      default: false,
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

  &__poster {
    width: 268px;
    height: 208px;

    background: #256CFE;
    border-radius: 7px 7px 0px 0px;
  }

  &__info {
    @extend .cb_column-between;
    align-items: stretch;

    width: 268px;
    height: 142px;

    padding: 17px;
    box-sizing: border-box;

    background: #272A37;
    border-radius: 0px 0px 7px 7px;
  }

  &__level {
    display: flex;
    align-items: center;
    
    font-family: 'EuclidCircular';
    font-size: 11px;
    line-height: 19px;
    color: #FFFFFF;
  }

  &__title {
    width: 200px;

    font-family: 'EuclidCircular';
    font-size: 13px;
    line-height: 21px;
    color: #FFFFFF;
  }

  &__footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 11px;
    line-height: 24px;
    color: #FFFFFF;
  }

  &__footer-item {
    @extend .cb_row-between;

    padding-left: 10px;
    padding-right: 10px;

    border: 1px solid #383C4A;
    border-radius: 5px;
  }

  &__icon-fire {
    @extend .cb_center;
    position: absolute;

    top: -20px;
    right: -20px;

    width: 50px;
    height: 50px;

    background: #EE3465;
    border-radius: 50%;
  }
}
</style>