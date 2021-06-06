<template>
  <div class="cover__wrap">
    <div class="cover">
      <div class="cover__route cb_top86">
        <div class="cb_row">
          <div class="cb_center">
            Code build
            <icon-arrow
              class="cb_left20"
              width="20"
              height="20"
            />
          </div>
          <div class="cb_center cb_left20">
            Статьи
            <icon-arrow
              class="cb_left20"
              width="20"
              height="20"
            />
          </div>
          <div class="cb_center cb_left20">
            Make art NONSNS again. Как абсурд в искусстве придаёт смысл обыденным вещам
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
        Make art NONSNS again.<br />
        Как абсурд в искусстве придаёт <br />
        смысл обыденным вещам
      </div>

      <div class="cover__subtitle cb_top20">
        Современное искусство, спекуляции и ирония. Группа NONSNS рассказала<br />
        о своём шоу для «Гаража» и дизайне, который сделал это шоу убедительным.
      </div>

      <div class="cb_row cb_top30">
        <div class="cover__attribute">
          <icon-timer
            width="22"
            height="22"
          />
          <span class="cb_left10">Время прочтения: 15 м.</span>
        </div>

        <div class="cover__attribute cb_left10">
          <icon-open-eye
            width="23"
            height="20"
          />
          <span class="cb_left10">300</span>
        </div>

        <div class="cover__attribute cb_left10">
          #Дизайн
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'
import IconHeart from '@/icons/IconHeart.vue'
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

export default {
  name: 'BlockArticleCover',
  components: {
    IconArrow,
    IconHeart,
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
  height: 600px;

  &__route {
    @extend .cb_row-between;
    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: #ffffff;
  }

  &__title {
    width: 1030px;
    height: 217px;

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