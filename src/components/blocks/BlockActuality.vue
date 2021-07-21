<template>
  <div class="actuality__wrap" @mousemove="mousemove">
    <div ref="actuality" class="actuality">
      <h1 class="actuality__title">
        <span class="flex_row-center-center"> Вы с нуля освоите профессию </span>
        разработчика и сможете добавить
        <span class="flex_row-center-center"> в арсенал необходимые навыки. </span>
      </h1>

      <h2 class="actuality__subtitle">
        <span class="flex_row-center-center"> Мы помогаем новичкам стать профессиональными </span>
        программистами, а опытным разработчикам получать
        <span class="flex_row-center-center"> новые знания и расти профессионально </span>
      </h2>

      <!-- Иконки заднего фона -->
      <v-icon
        class="actuality_icon"
        path="img/apple.svg"
        width="19px"
        height="24px"
        style="left: 16%; top: 133px; padding: 17px 20px 20px 21px"
        :style="[{ top: getIconPositionY(133, 30) }, { left: getIconPositionX(312, 30) }]"
      />

      <div
        class="actuality_icon"
        style="left: 46%; top: 70px; padding: 32px 32px 32px 32px"
        :style="[{ top: getIconPositionY(70, 46) }, { left: getIconPositionX(877, 46) }]"
      >
        <icon-code-box />
      </div>

      <div
        class="actuality_icon"
        style="left: 76%; top: 135px; padding: 53px 53px 53px 53px"
        :style="[{ top: getIconPositionY(135, 70) }, { left: getIconPositionX(1462, 70) }]"
      >
        <icon-command-line />
      </div>

      <div
        class="actuality_icon"
        style="left: 14%; top: 379px; padding: 31px 32px 31px 32px"
        :style="[{ top: getIconPositionY(379, 45) }, { left: getIconPositionX(1751, 45) }]"
      >
        <icon-css3 />
      </div>

      <div
        class="actuality_icon"
        style="left: 91%; top: 420px; padding: 20px 20px 20px 20px"
        :style="[{ top: getIconPositionY(420, 30) }, { left: getIconPositionX(267, 30) }]"
      >
        <icon-html />
      </div>

      <div
        class="actuality_icon"
        style="left: 5%; top: 631px; padding: 20px 20px 20px 20px"
        :style="[{ top: getIconPositionY(631, 30) }, { left: getIconPositionX(89, 30) }]"
      >
        <icon-lock />
      </div>

      <div
        class="actuality_icon"
        style="left: 23%; top: 670px; padding: 32px 38px 32px 38px"
        :style="[{ top: getIconPositionY(670, 46) }, { left: getIconPositionX(448, 46) }]"
      >
        <icon-cursor />
      </div>

      <div
        class="actuality_icon"
        style="left: 48%; top: 763px; padding: 20px 20px 20px 20px"
        :style="[{ top: getIconPositionY(763, 30) }, { left: getIconPositionX(912, 30) }]"
      >
        <icon-git-merge />
      </div>

      <div
        class="actuality_icon"
        style="left: 75%; top: 644px; padding: 32px 33px 32px 33px"
        :style="[{ top: getIconPositionY(631, 46) }, { left: getIconPositionX(1448, 46) }]"
      >
        <icon-bug />
      </div>
      <!-- Иконки заднего фона -->
    </div>
  </div>
</template>

<script>
import IconCodeBox from '@/icons/IconCodeBox.vue';
import IconCommandLine from '@/icons/IconCommandLine.vue';
import IconCss3 from '@/icons/IconCss3.vue';
import IconHtml from '@/icons/IconHtml.vue';
import IconLock from '@/icons/IconLock.vue';
import IconCursor from '@/icons/IconCursor.vue';
import IconGitMerge from '@/icons/IconGitMerge.vue';
import IconBug from '@/icons/IconBug.vue';

import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'BlockActuality',
  components: {
    IconCodeBox,
    IconCommandLine,
    IconCss3,
    IconHtml,
    IconLock,
    IconCursor,
    IconGitMerge,
    IconBug,
    VIcon
  },
  data() {
    return {
      cursor: {
        X: 0,
        Y: 0
      }
    };
  },
  methods: {
    mousemove(mouse) {
      // Координаты курсора относительно данного блока
      this.cursor.Y = mouse.pageY - this.$refs.actuality.offsetTop;
      this.cursor.X = mouse.pageX - this.$refs.actuality.offsetLeft;
    },

    getIconPositionY(iconPositionY, iconRadius) {
      // Если курсор ниже иконки, двигаем вверх
      if (this.cursor.Y - iconRadius >= iconPositionY) {
        return iconPositionY - 20 + 'px';
      }
      // Если курсор выше иконки, двигаем вниз
      else {
        return iconPositionY + 20 + 'px';
      }
    },

    getIconPositionX(iconPositionX, iconRadius) {
      // Если курсор правее иконки, двигаем влево
      if (this.cursor.X - iconRadius >= iconPositionX) {
        return iconPositionX - 20 + 'px';
      }
      // Если курсор левее иконки, двигаем вправо
      else {
        return iconPositionX + 20 + 'px';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.actuality__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
  overflow: hidden;
}

.actuality {
  @extend .flex_column-center-center;
  position: relative;
  height: 900px;
  min-width: 1920px;

  color: $color-white;

  &__title {
    font-family: 'ObjectSans';
    font-size: 45px;
    line-height: 55px;
    letter-spacing: -0.01em;
  }

  &__subtitle {
    margin-top: 30px;

    font-family: 'Circe';
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
  }

  &_icon {
    @extend .flex_row-center-center;
    position: absolute;

    background: #3a7afe;
    border: 2px solid #3a7afe;
    border-radius: 21%;

    transition: all 1s ease-in-out;
  }
}
</style>