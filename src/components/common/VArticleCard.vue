<template>
  <div class="card">
    <div class="card__poster">

    </div>

    <div class="card__info">
      <div class="card__info-header">
        <span>{{ date }}</span>
      </div>

      <div class="card__info-text">
        <slot name="text">Новые открытия в сфере искусственного интеллекта</slot>
      </div>

      <div class="card__info-footer">
        <div class="card__info-footer_item">
          <icon-timer />
          <span class="card_left5">Время прочтения: 15 м.</span>
        </div>

        <div class="card__info-footer_item">
          <icon-open-eye />
          <span class="card_left5">1200</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

export default {
  name: 'VCourseCard',
  components: { 
    IconTimer,
    IconOpenEye,
  },
  props: {
    date: {
      type: String,
      default: '12 апреля 2021',
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
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    color: #4C5169;
  }

  &__info-text {
    width: 240px;

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

      padding-left: 13px;
      padding-right: 13px;

      border: 1px solid #383C4A;
      border-radius: 5px;
    }
  }

  // общие классы
  &_left5 {
    margin-left: 5px;
  }
}
</style>
