<template>
  <div class="cover__wrap">
    <div class="cover">
      <div class="cb_row-between">
        <div class="cover__route">
          <div class="cb_center">
            Code build 
            <icon-arrow
              class="cb_left20"
              width="20"
              height="20"
            />
          </div>
          <div class="cb_center cb_left20">
            Видеокурсы 
            <icon-arrow
              class="cb_left20"
              width="20"
              height="20"
            />
          </div>
          <div class="cb_center cb_left20">
            Создание сайта с нуля на CMS WordPress 
          </div>
        </div>

        <icon-heart />
      </div>

      <div class="cover__title">
        Создание сайта с нуля на CMS WordPress
      </div>

      <div class="cover__subtitle">
        Представляем вам курс по изучению CMS WordPress, а также созданию сайта с полного нуля на движке WordPress.<br /> 
        В курсе мы научимся работать с движком, а также создадим небольшой сайт на его основе.
      </div>

      <div class="cb_row cb_top35">
        <div class="cover__attribute">
          <icon-video />
          <span class="cb_left10">6 уроков</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-timer />
          <span class="cb_left10">1 ч. 25 м.</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-open-eye />
          <span class="cb_left10">300</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'
import IconHeart from '@/icons/IconHeart.vue'
import IconVideo from '@/icons/IconVideo.vue'
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

export default {
  name: 'CourseCover',
  components: {
    IconArrow,
    IconHeart,
    IconVideo,
    IconTimer,
    IconOpenEye,
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.cover__wrap {
  @extend .cb_center;
  width: 100%;
  background: #256cfe;
}

.cover {
  @extend .cb_column-center;
  width: 1160px;
  height: 462px;

  &__route {
    @extend .cb_row;
    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: #FFFFFF;
  }

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #FFFFFF;

    margin-top: 30px;
  }

  &__subtitle {
    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

    margin-top: 15px;
  }

  &__attribute {
    @extend .cb_row-between;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 16px;
    color: #FFFFFF;

    padding: 17px 25px 17px 25px;

    border: 1px solid #4884fe;
    border-radius: 9px;
  }
}

</style>