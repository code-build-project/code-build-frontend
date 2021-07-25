<template>
  <div class="subscribe__wrap">
    <div class="subscribe">
      <div class="subscribe__main">
        <h1 class="subscribe__title">Подпишись на codebuild</h1>

        <h2 class="subscribe__subtitle">
          Присоединяйся к сообществу программистов, узнавай много нового из мира IT и будь в курсе
          всех событий!
        </h2>
      </div>

      <div class="subscribe__social">
        <v-icon class="subscribe__icon-social" path="img/youtube.svg" width="31px" height="25px" />
        <v-icon class="subscribe__icon-social" path="img/vk.svg" width="35px" height="21px" />
        <v-icon class="subscribe__icon-social" path="img/insta.svg" width="31px" height="31px" />
        <v-icon class="subscribe__icon-social" path="img/telegram.svg" width="32px" height="27px" />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'BlockSubscribe',
  components: {
    VIcon
  }
};
</script>

<style lang="scss" scoped>
.subscribe__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
}

.subscribe {
  @extend .flex_row-center-between;
  width: 1160px;
  height: 315px;

  &__main {
    @extend .flex_column;
  }

  &__social {
    @extend .flex_row-center-between;
    width: 532px;
  }

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -0.01em;
    color: $color-white;
  }

  &__subtitle {
    width: 470px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 31px;
    letter-spacing: -0.025em;
    color: $color-white;
  }
}

// icons
.subscribe__icon {
  &-social {
    @extend .flex_row-center-center;
    width: 100px;
    height: 100px;

    border: 2px solid #3a7afe;
    border-radius: 21px;
    fill: $color-white;
  }
}

// hovers
:hover.subscribe {
  &__icon-social {
    cursor: pointer;
    background: #3a7afe;
  }
}
</style>