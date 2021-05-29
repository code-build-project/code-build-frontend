<template>
  <div class="card">
    <div class="card__poster">

    </div>

    <div class="card__info">
      <div class="card__info-header">
        <icon-ellipse fill="#EE3465" />
        <icon-ellipse :fill="level !== 'Beginner' ? '#EE3465' : '#3A3F4F'"/>
        <icon-ellipse :fill="level === 'High' ? '#EE3465' : '#3A3F4F'"/>

        <span class="cb_left5">{{ level }}</span>
      </div>

      <div class="card__info-text">
        {{ title }}
      </div>

      <div class="card__info-footer">
        <div class="card__info-footer_item">
          <icon-video />
          <span class="cb_left5">{{ lessons }}</span>
        </div>

        <div class="card__info-footer_item">
          <icon-timer />
          <span class="cb_left5">{{ time }}</span>
        </div>

        <div class="card__info-footer_item">
          <icon-open-eye />
          <span class="cb_left5">{{ views }}</span>
        </div>
      </div>
    </div>

    <div v-if="fire" class="card__icon-fire">
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
    level: {
      type: String,
      default: 'Beginner',
    },

    fire: {
      type: Boolean,
      default: false,
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

  &__info-header {
    display: flex;
    align-items: center;
    
    font-family: 'EuclidCircular';
    font-size: 11px;
    line-height: 19px;
    color: #FFFFFF;
  }

  &__info-text {
    width: 200px;

    font-family: 'EuclidCircular';
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
  }

  &__info-footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 11px;
    line-height: 24px;
    color: #FFFFFF;

    &_item {
      @extend .cb_row-between;

      padding-left: 10px;
      padding-right: 10px;

      border: 1px solid #383C4A;
      border-radius: 5px;
    }
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
