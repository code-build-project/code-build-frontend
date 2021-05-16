<template>
  <div class="footer">
    <div class="footer__row">
      <icon-logo />

      <div class="footer__row footer__social">
        <div class="footer__icon">
          <icon-you-tube />
        </div>

        <div class="footer__icon">
          <icon-vk />
        </div>
        
        <div class="footer__icon">
          <icon-instagram />
        </div>

        <div class="footer__icon">
          <icon-telegram />
        </div>
      </div>

      <div class="footer__row footer__nav">
        <div class="footer__row footer__links">
          <span>О проекте</span>
          <span>Блог</span>
          <span>Видеокурсы</span>
        </div>

        <icon-rus-flag />
      </div>
    </div>

    <hr class="footer__line m_top50"/>

    <div class="footer__row m_top15">
      <span class="footer__row footer__copyright">
        <icon-copyright />
        Все права защищены — 2021 год
      </span>

      <span class="footer__row footer__copy">
        Пишите: help@codebuild.com
        <icon-copy />
      </span>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue'
import IconYouTube from '@/icons/IconYouTube.vue'
import IconRusFlag from '@/icons/IconRusFlag.vue'
import IconVk from '@/icons/IconVk.vue'
import IconInstagram from '@/icons/IconInstagram.vue'
import IconTelegram from '@/icons/IconTelegram.vue'
import IconCopyright from '@/icons/IconCopyright.vue'
import IconCopy from '@/icons/IconCopy.vue'


export default {
  components: { 
    IconLogo, 
    IconYouTube, 
    IconRusFlag,
    IconVk,
    IconInstagram,
    IconTelegram,
    IconCopyright,
    IconCopy,
  },

  computed: {},

  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss">
.footer {
  height: 276px;

  @include adaptiv-padding(380, 40);
  padding-top: 67px !important;
  padding-bottom: 67px !important;
  box-sizing: border-box;

  font-family: 'Circe';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;

  color: white;
  background: #171717;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__social {
    min-width: 220px;
  }

  &__icon {
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #272A37;
    border-radius: 9.36774px;
  }

  &__nav {
    @include percent-width(500, 1160);
  }

  &__links {
    @include percent-width(340, 500);

    font-size: 17px;
    line-height: 18px;
  }

  &__line {
    height: 1px;
    border: none; 
    background-color: #444754; 
  }

  &__copyright {
    width: 215px;

    font-size: 14px;
    color: #444754;
  }

  &__copy {
    width: 210px;

    font-size: 14px;
    color: #444754;
  }
}

.m {
  &_top15 {
    margin-top: 15px;
  }

  &_top50 {
    margin-top: 50px;
  }
}

// модификаторы состояния 
// .ms {
//   &_focus {

//   }
// }
</style>
