<template>
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
.subscribe {
  height: 315px;

  @include adaptiv-padding(380, 40);
  padding-bottom: 100px !important;
  padding-top: 100px !important;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #256cfe;

  &__left-side {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__right-side {
    width: 532px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-family: 'ObjectSans';
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  &__subtitle {
    width: 470px;

    font-family: 'Circe';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 31px;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

  &__icon {
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid #3A7AFE;
    box-sizing: border-box;
    border-radius: 21px;
  }
}
</style>
