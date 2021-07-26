<template>
  <div class="card">
    <div class="card__poster" />

    <main class="card__main">
      <div class="card__date">
        {{ date }}
      </div>

      <h1 class="card__title">
        {{ title }}
      </h1>

      <div class="card__footer">
        <div class="card__footer-item" style="width: 155px">
          <v-icon class="card__icon-footer" path="img/timer.svg" />
          Время прочтения: 15 м.
        </div>

        <div class="card__footer-item" style="width: 70px">
          <v-icon class="card__icon-footer" path="img/openEye.svg" />
          1200
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VCourseCard',
  components: {
    VIcon
  },
  props: {
    // Название стаьи
    title: {
      type: String,
      default: 'Название статьи'
    },
    // Дата размещения статьи
    date: {
      type: String,
      default: '12 апреля 2021'
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  &__poster {
    width: 268px;
    height: 208px;

    background: $color-blue;
    border-radius: 7px 7px 0px 0px;
  }

  &__main {
    @extend .flex_column-between;
    align-items: stretch;
    width: 268px;
    height: 142px;

    padding: 17px;
    box-sizing: border-box;

    background: $color-black;
    border-radius: 0px 0px 7px 7px;
  }

  &__date {
    @extend .flex_row-center;

    font-family: 'EuclidCircular';
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    color: #4c5169;
  }

  &__title {
    width: 240px;

    font-family: 'EuclidCircular';
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: $color-white;
  }

  &__footer {
    @extend .flex_row-center-between;
  }

  &__footer-item {
    @extend .flex_row-center-center;
    height: 28px;

    font-family: 'Circe';
    font-size: 11px;
    line-height: 24px;
    color: $color-white;

    border: 1px solid #383c4a;
    border-radius: 5px;
  }
}

// icons
.card__icon {
  &-footer {
    width: 13px;
    height: 13px;
    margin-right: 5px;

    fill: $color-white;
  }
}
</style>