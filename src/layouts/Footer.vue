<template>
  <div class="footer__wrap">
    <div class="footer">
      <div class="cb_row-between">
        <icon-logo class="footer__logo" stroke="#FFFFFF"/>

        <div class="footer__social">
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

        <div class="footer__nav">
          <div class="footer__links">
            <span class="footer__links-item">О проекте</span>
            <span class="footer__links-item">Блог</span>
            <span class="footer__links-item">Видеокурсы</span>
          </div>

          <icon-rus-flag />
        </div>
      </div>

      <hr class="footer__line"/>

      <div class="cb_row-between cb_top15">
        <span class="footer__copyright">
          <icon-copyright />
          Все права защищены — 2021 год
        </span>

        <span class="footer__copy">
          Пишите: help@codebuild.com
          <div 
            class="footer__icon" 
            style="width: 28px; height: 28px; border-radius: 6px"
          >
            <icon-copy />
          </div>
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

<style lang="scss" scoped>
.footer__wrap {
  @extend .cb_center;
  width: 100%;
  background: #171717;
}
  
.footer {
  @extend .cb_column-center;
  width: 1160px;
  height: 276px;

  font-family: 'Circe';
  font-size: 25px;
  color: white;

  &__social {
    @extend .cb_row-between;
    min-width: 220px;
  }

  &__nav {
    @extend .cb_row-between;
    width: 500px;
  }

  &__links {
    @extend .cb_row-between;
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
    @extend .cb_row-between;
    width: 215px;

    font-size: 14px;
    color: #444754;
  }

  &__copy {
    @extend .cb_row-between;
    width: 225px;

    font-size: 14px;
    color: #444754;
  }

  &__icon {
    @extend .cb_center;
    width: 44px; 
    height: 44px;

    border: 1px solid #272A37;
    border-radius: 9px;
  }
}

// hovers
:hover.footer {
  &__logo {
    cursor: pointer;

    ::v-deep {
      path {
        fill: #171717;
      }

      rect {
        fill: #FFFFFF;
      }
    }
  }

  &__icon {
    background: #272A37;
    cursor: pointer;
  }

  &__links-item {
    cursor: pointer;
    color: #256CFE;
  }
}
</style>
