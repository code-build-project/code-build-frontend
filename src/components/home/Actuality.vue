<template>
  <div class="actuality">
    <div class="actuality__title">
      <span class="actuality_center">
        Вы с нуля освоите профессию
      </span>
      разработчика и сможете добавить
      <span class="actuality_center">
        в арсенал необходимые навыки.
      </span>
    </div>

    <div class="actuality__subtitle">
      <span class="actuality_center">
        Мы помогаем новичкам стать профессиональными 
      </span>
      программистами, а опытным разработчикам получать 
      <span class="actuality_center">
        новые знания и расти профессионально
      </span>
    </div>

    <!-- Иконки заднего фона -->
    <div class="actuality_icon" style="left: 312px; top: 133px; padding: 17px 20px 20px 21px">
      <icon-apple />
    </div>

    <div class="actuality_icon" style="left: 877px; top: 70px; padding: 32px 32px 32px 32px">
      <icon-code-box />
    </div>

    <div class="actuality_icon" style="left: 1462px; top: 135px; padding: 53px 53px 53px 53px">
      <icon-command-line />
    </div>

    <div class="actuality_icon" style="left: 267px; top: 379px; padding: 31px 32px 31px 32px">
      <icon-css3 />
    </div>

    <div class="actuality_icon" style="left: 1751px; top: 420px; padding: 20px 20px 20px 20px">
      <icon-html />
    </div>

    <div class="actuality_icon" style="left: 89px; top: 631px; padding: 20px 20px 20px 20px">
      <icon-lock />
    </div>

    <div class="actuality_icon" style="left: 448px; top: 670px; padding: 32px 38px 32px 38px">
      <icon-cursor />
    </div>

    <div class="actuality_icon" style="left: 912px; top: 763px; padding: 20px 20px 20px 20px">
      <icon-git-merge />
    </div>

    <div class="actuality_icon" style="left: 1448px; top: 644px; padding: 32px 33px 32px 33px">
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
  name: 'Actuality',
  components: { 
    IconApple,
    IconCodeBox,
    IconCommandLine,
    IconCss3,
    IconHtml,
    IconLock,
    IconCursor,
    IconGitMerge,
    IconBug,
  }
}
</script>

<style lang="scss" scoped>
  .actuality {
    position: relative;
    height: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include adaptiv-padding(380, 40);
    padding-bottom: 314px !important;
    padding-top: 314px !important;
    box-sizing: border-box;

    background: #256CFE;
    color: #FFFFFF;

    &__title {
      width: 788px;

      font-family: 'ObjectSans';
      font-size: 45px;
      line-height: 55px;
      letter-spacing: -0.01em;
    }

    &__subtitle {
      width: 496px;

      font-family: 'Circe';
      font-size: 22px;
      line-height: 29px;
      letter-spacing: -0.025em;
    }

    // общие классы
    &_center {
      display: flex;
      justify-content: center;
    }

    &_icon {
      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #3A7AFE;
      border: 2px solid #3A7AFE;
      border-radius: 20px;
    }
  }
</style>
