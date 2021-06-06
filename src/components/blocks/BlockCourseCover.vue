<template>
  <div class="cover__wrap">
    <div class="cover">
      <div class="cb_row-between cb_top86">
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

        <div
          class="cover__icon-heart"
          @click="isLike = !isLike"
        >
          <icon-heart :fill="isLike ? '#EE3465' : 'transparent'" />
        </div>
      </div>

      <div class="cover__title cb_top35">
        Создание сайта с нуля на CMS WordPress
      </div>

      <div class="cover__subtitle cb_top20">
        Представляем вам курс по изучению CMS WordPress, а также созданию сайта с полного нуля на
        движке WordPress.<br />
        В курсе мы научимся работать с движком, а также создадим небольшой сайт на его основе.
      </div>

      <div class="cb_row cb_top30">
        <div class="cover__attribute">
          <icon-video
            width="20"
            height="20"
          />
          <span class="cb_left10">6 уроков</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-timer
            width="22"
            height="22"
          />
          <span class="cb_left10">1 ч. 25 м.</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-open-eye
            width="23"
            height="20"
          />
          <span class="cb_left10">300</span>
        </div>

        <div class="cover__attribute cb_left10">
          #Сайты
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
  name: 'BlockCourseCover',
  components: {
    IconArrow,
    IconHeart,
    IconVideo,
    IconTimer,
    IconOpenEye
  },
  data() {
    return {
      isLike: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cover__wrap {
  @extend .cb_center;
  width: 100%;
  background: #256cfe;
}

.cover {
  @extend .cb_column;
  width: 1160px;
  height: 532px;

  &__route {
    @extend .cb_row;
    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
  }

  &__title {
    width: 900px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 69px;
    letter-spacing: -1px;
    color: #ffffff;
  }

  &__subtitle {
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

  &__icon-heart {
    @extend .cb_center;
    cursor: pointer;
  }
}
</style>