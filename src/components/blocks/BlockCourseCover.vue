<template>
  <div class="cover__wrap">
    <div class="cover">
      <div class="cover__header">
        <div class="cover__route">
          <div class="cover__route-item">
            Code build
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">
            Видеокурсы
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">
            Создание сайта с нуля на CMS WordPress
          </div>
        </div>

        <v-icon
          class="cover__icon-heart"
          path="img/heart.svg"
          :fill="isLike ? '#EE3465' : 'transparent'"
          @click="isLike = !isLike"
        />
      </div>

      <h1 class="cover__title">
        Создание сайта с нуля на CMS WordPress
      </h1>

      <h2 class="cover__subtitle">
        Представляем вам курс по изучению CMS WordPress, а также созданию сайта с полного нуля на
        движке WordPress.<br />
        В курсе мы научимся работать с движком, а также создадим небольшой сайт на его основе.
      </h2>

      <div class="cover__attributes">
        <div class="cover__attributes-item">
          <v-icon class="cover__icon-attribute" path="img/video.svg" />
          6 уроков
        </div>

        <div class="cover__attributes-item ml-10px">
          <v-icon class="cover__icon-attribute" path="img/timer.svg" />
          1 ч. 25 м.
        </div>

        <div class="cover__attributes-item ml-10px">
          <v-icon class="cover__icon-attribute" path="img/openEye.svg" />
          300
        </div>

        <div class="cover__attributes-item ml-10px">
          #Сайты
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'BlockCourseCover',
  components: {
    VIcon
  },
  data() {
    return {
      isLike: false
    };
  }
};
</script>

<style lang="scss" scoped>
.cover__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
}

.cover {
  @extend .flex_column;
  width: 1160px;
  height: 532px;

  &__header {
    @extend .flex_row-center-between;
    margin-top: 86px;
  }

  &__route {
    @extend .flex_row;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: $color-white;
  }

  &__route-item {
    @extend .flex_row-center-center;
  }

  &__title {
    width: 900px;
    margin-top: 35px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 69px;
    letter-spacing: -1px;
    color: $color-white;
  }

  &__subtitle {
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: $color-white;
  }

  &__attributes {
    @extend .flex_row;
    margin-top: 30px;
  }

  &__attributes-item {
    @extend .flex_row-center-between;
    font-family: 'Circe';
    font-size: 18px;
    color: $color-white;

    padding: 17px 25px 17px 25px;

    border: 1px solid #4884fe;
    border-radius: 9px;
  }
}

// icons
.cover__icon {
  &-arrow {
    width: 20px;
    height: 20px;
    margin-left: 20px;

    stroke: $color-white;
  }

  &-heart {
    @extend .flex_row-center-center;
    width: 18px;
    height: 16px;

    cursor: pointer;
    stroke: $color-white;
  }

  &-attribute {
    width: 22px;
    height: 22px;
    margin-right: 10px;

    fill: $color-white;
  }
}
</style>