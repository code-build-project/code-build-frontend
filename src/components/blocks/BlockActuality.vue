<template>
  <div class="actuality">
    <div class="actuality__title cb_top300">
      <span class="cb_center"> Вы с нуля освоите профессию </span>
      разработчика и сможете добавить
      <span class="cb_center"> в арсенал необходимые навыки. </span>
    </div>

    <div class="actuality__subtitle cb_top30">
      <span class="cb_center">
        Мы помогаем новичкам стать профессиональными
      </span>
      программистами, а опытным разработчикам получать
      <span class="cb_center"> новые знания и расти профессионально </span>
    </div>

    <!-- Иконки заднего фона -->
    <div
      class="actuality_icon"
      style="left: 16%; top: 133px; padding: 17px 20px 20px 21px"
    >
      <icon-apple />
    </div>

    <div
      class="actuality_icon"
      style="left: 46%; top: 70px; padding: 32px 32px 32px 32px"
    >
      <icon-code-box />
    </div>

    <div
      class="actuality_icon"
      style="left: 76%; top: 135px; padding: 53px 53px 53px 53px"
    >
      <icon-command-line />
    </div>

    <div
      class="actuality_icon"
      style="left: 14%; top: 379px; padding: 31px 32px 31px 32px"
    >
      <icon-css3 />
    </div>

    <div
      class="actuality_icon"
      style="left: 91%; top: 420px; padding: 20px 20px 20px 20px"
    >
      <icon-html />
    </div>

    <div
      class="actuality_icon"
      style="left: 5%; top: 631px; padding: 20px 20px 20px 20px"
    >
      <icon-lock />
    </div>

    <div
      class="actuality_icon"
      style="left: 23%; top: 670px; padding: 32px 38px 32px 38px"
    >
      <icon-cursor />
    </div>

    <div
      class="actuality_icon"
      style="left: 48%; top: 763px; padding: 20px 20px 20px 20px"
    >
      <icon-git-merge />
    </div>

    <div
      class="actuality_icon"
      style="left: 75%; top: 644px; padding: 32px 33px 32px 33px"
    >
      <icon-bug />
    </div>
    <!-- Иконки заднего фона -->
  </div>
</template>

<script>
import IconApple from '@/icons/IconApple.vue'
import IconCodeBox from '@/icons/IconCodeBox.vue'
import IconCommandLine from '@/icons/IconCommandLine.vue'
import IconCss3 from '@/icons/IconCss3.vue'
import IconHtml from '@/icons/IconHtml.vue'
import IconLock from '@/icons/IconLock.vue'
import IconCursor from '@/icons/IconCursor.vue'
import IconGitMerge from '@/icons/IconGitMerge.vue'
import IconBug from '@/icons/IconBug.vue'

export default {
  name: 'BlockActuality',
  components: {
    IconApple,
    IconCodeBox,
    IconCommandLine,
    IconCss3,
    IconHtml,
    IconLock,
    IconCursor,
    IconGitMerge,
    IconBug
  }
}
</script>

<style lang="scss" scoped>
.actuality {
  @extend .cb_column;
  align-items: center;
  position: relative;
  height: 900px;
  width: 100%;

  background: #256cfe;
  color: #ffffff;

  &__title {
    font-family: 'ObjectSans';
    font-size: 45px;
    line-height: 55px;
    letter-spacing: -0.01em;
  }

  &__subtitle {
    font-family: 'Circe';
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
  }

  &_icon {
    @extend .cb_center;
    position: absolute;

    background: #3a7afe;
    border: 2px solid #3a7afe;
    border-radius: 20px;
  }
}
</style>