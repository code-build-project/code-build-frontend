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

          <div class="cover__route-item ml-20px">Создание сайта с нуля на CMS WordPress</div>
        </div>

        <v-icon
          class="cover__icon-heart"
          path="img/heart.svg"
          :fill="isLike ? '#EE3465' : 'transparent'"
          @click="isLike = !isLike"
        />
      </div>

      <h1 class="cover__title">Создание сайта с нуля на CMS WordPress</h1>

      <h2 class="cover__subtitle">
        Представляем вам курс по изучению CMS WordPress, а также созданию сайта с полного нуля на
        движке WordPress.<br />
        В курсе мы научимся работать с движком, а также создадим небольшой сайт на его основе.
      </h2>

      <div class="cb_row cb_top30">
        <div class="cover__attribute">
          <icon-video width="20" height="20" />
          <span class="cb_left10">6 уроков</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-timer width="22" height="22" />
          <span class="cb_left10">1 ч. 25 м.</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-open-eye width="23" height="20" />
          <span class="cb_left10">300</span>
        </div>

        <div class="cover__attribute cb_left10">#Сайты</div>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

import IconVideo from '@/icons/IconVideo.vue';
import IconTimer from '@/icons/IconTimer.vue';
import IconOpenEye from '@/icons/IconOpenEye.vue';

export default {
  name: 'BlockCourseCover',
  components: {
    VIcon,
    IconVideo,
    IconTimer,
    IconOpenEye
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
  background: #256cfe;
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
    color: #ffffff;
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
    color: #ffffff;
  }

  &__subtitle {
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }

  &__attribute {
    @extend .cb_row-between;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 16px;
    color: #ffffff;

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