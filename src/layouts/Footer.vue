<template>
  <div class="footer__wrap">
    <div class="footer">
      <div class="footer_row">
        <icon-logo border="white"/>

        <div class="footer__social">
          <div class="footer_icon">
            <icon-you-tube />
          </div>

          <div class="footer_icon">
            <icon-vk />
          </div>
          
          <div class="footer_icon">
            <icon-instagram />
          </div>

          <div class="footer_icon">
            <icon-telegram />
          </div>
        </div>

        <div class="footer__nav">
          <div class="footer__links">
            <span>О проекте</span>
            <span>Блог</span>
            <span>Видеокурсы</span>
          </div>

          <icon-rus-flag />
        </div>
      </div>

      <hr class="footer__line"/>

      <div class="footer_row footer_top15">
        <span class="footer__copyright">
          <icon-copyright />
          Все права защищены — 2021 год
        </span>

        <span class="footer__copy">
          Пишите: help@codebuild.com
          <icon-copy />
        </span>
      </div>
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
.footer__wrap {
  @extend .footer_center;
  width: 100%;
  background: #171717;
}
  
.footer {
  @extend .footer_column-center;
  width: 1160px;
  height: 276px;

  font-family: 'Circe';
  font-size: 25px;
  color: white;

  &__social {
    @extend .footer_row;
    min-width: 220px;
  }

  &__nav {
    @extend .footer_row;
    width: 500px;
  }

  &__links {
    @extend .footer_row;
    width: 340px;

    font-size: 17px;
    line-height: 18px;
  }

  &__line {
    height: 1px;
    border: none; 
    margin-top: 50px;
    background-color: #444754; 
  }

  &__copyright {
    @extend .footer_row;
    width: 215px;

    font-size: 14px;
    color: #444754;
  }

  &__copy {
    @extend .footer_row;
    width: 210px;

    font-size: 14px;
    color: #444754;
  }

  // общие классы
  &_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_column-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &_icon {
    @extend .footer_center;
    width: 44px;
    height: 44px;

    border: 1px solid #272A37;
    border-radius: 9px;
  }

  &_top15 {
    margin-top: 15px;
  }
}
</style>
