<template>
  <div class="subscribe__wrap">
    <div class="subscribe">
      <div class="subscribe__left-side">
        <div class="subscribe__title">Подпишись на codebuild</div>
        <div class="subscribe__subtitle">
          Присоединяйся к сообществу программистов, узнавай
          много нового из мира IT и будь в курсе всех событий!
        </div>
      </div>

      <div class="subscribe__right-side">
        <div class="subscribe__icon">
          <icon-you-tube width="37" height="37"/>
        </div>

        <div class="subscribe__icon">
          <icon-vk width="35" height="35"/>
        </div>

        <div class="subscribe__icon">
          <icon-instagram width="37" height="37"/>
        </div>

        <div class="subscribe__icon">
          <icon-telegram width="32" height="32"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconYouTube from '@/icons/IconYouTube.vue';
import IconVk from '@/icons/IconVk.vue';
import IconInstagram from '@/icons/IconInstagram.vue';
import IconTelegram from '@/icons/IconTelegram.vue';

export default {
  name: 'Subscribe',
  components: { 
    IconYouTube,
    IconVk,
    IconInstagram,
    IconTelegram,
  }
}
</script>

<style lang="scss" scoped>
.subscribe__wrap {
  @extend .cb_center;
  width: 100%;
  background: #256cfe;
}

.subscribe {
  @extend .cb_row-between;
  width: 1160px;
  height: 315px;

  &__left-side {
    @extend .cb_column;
  }

  &__right-side {
    @extend .cb_row-between;
    width: 532px;
  }

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  &__subtitle {
    width: 470px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 31px;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

  &__icon {
    @extend .cb_center;
    width: 100px;
    height: 100px;

    border: 2px solid #3A7AFE;
    box-sizing: border-box;
    border-radius: 21px;
  }
}
</style>
