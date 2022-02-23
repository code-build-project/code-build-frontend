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
        <a
          v-for="(item, index) in $options.socialList"
          :key="index"
          :href="item.url"
          target="_blank"
        >
          <v-icon class="subscribe__icon-social" :path="item.path" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
  name: 'BlockSubscribe',
  components: {
    VIcon
  },
  socialList: [
    {
      url: 'https://example.ru',
      path: 'img/youtube.svg'
    },
    {
      url: 'https://vk.com/shkiper195',
      path: 'img/vk.svg'
    },
    {
      url: 'https://instagram.com/code__build',
      path: 'img/insta.svg'
    },
    {
      url: 'https://t.me/codebuild',
      path: 'img/telegram.svg'
    }
  ]
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
    padding: 32px;

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