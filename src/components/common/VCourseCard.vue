<template>
  <div class="card">
    <div class="card__poster">

    </div>

    <div class="card__info">
      <div class="card__info-header">
        <icon-ellipse fill="#EE3465" />
        <icon-ellipse :fill="level !== 'Beginner' ? '#EE3465' : '#3A3F4F'"/>
        <icon-ellipse :fill="level === 'High' ? '#EE3465' : '#3A3F4F'"/>

        <span class="card_left5">{{ level }}</span>
      </div>

      <div class="card__info-text">
        <slot name="text">Создание сайта с нуля на CMS WordPress</slot>
      </div>

      <div class="card__info-footer">
        <div class="card__info-footer_item">
          <icon-video />
          <span class="card_left5">6 уроков</span>
        </div>

        <div class="card__info-footer_item">
          <icon-timer />
          <span class="card_left5">1 ч. 25 м.</span>
        </div>

        <div class="card__info-footer_item">
          <icon-open-eye />
          <span class="card_left5">300</span>
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
  name: 'VCourseCard',
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
    width: 268px;
    height: 142px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 17px;
    box-sizing: border-box;

    background: #272A37;
    border-radius: 0px 0px 7px 7px;
  }

  &__info-header {
    display: flex;
    align-items: center;
    
    font-family: 'EuclidCircular';
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 19px;
    color: #FFFFFF;
  }

  &__info-text {
    width: 200px;

    font-family: 'EuclidCircular';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
  }

  &__info-footer {
    display: flex;
    justify-content: space-between;

    font-family: 'Circe';
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 24px;
    color: #FFFFFF;

    &_item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-left: 10px;
      padding-right: 10px;

      border: 1px solid #383C4A;
      border-radius: 5px;
    }
  }

  &__icon-fire {
    position: absolute;

    top: -20px;
    right: -20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    background: #EE3465;
    border-radius: 50%;
  }

  // общие классы
  &_left5 {
    margin-left: 5px;
  }
}
</style>
