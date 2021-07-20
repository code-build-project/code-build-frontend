<template>
  <footer class="footer__wrap">
    <div class="footer">
      <!-- top row -->
      <div class="footer__main">
        <v-icon class="footer__icon-logo" path="img/logo.svg" @click.native="$router.push('/')" />

        <div class="footer__social">
          <v-icon class="footer__icon-social" path="img/youtube.svg" width="17px" height="13px" />
          <v-icon class="footer__icon-social" path="img/vk.svg" width="20px" height="11px" />
          <v-icon class="footer__icon-social" path="img/insta.svg" width="17px" height="17px" />
          <v-icon class="footer__icon-social" path="img/telegram.svg" width="18px" height="15px" />
        </div>

        <div class="footer__nav-wrap">
          <nav class="footer__nav">
            <router-link class="footer__nav-item" to="/"> О проекте </router-link>
            <router-link class="footer__nav-item" to="/articles"> Блог </router-link>
            <router-link class="footer__nav-item" to="/courses"> Видеокурсы </router-link>
          </nav>

          <v-icon class="footer__icon-flag" path="img/flag.svg" />
        </div>
      </div>
      <!-- top row -->

      <hr class="footer__line" />

      <!-- bottom row -->
      <div class="footer__bottom-row">
        <span class="footer__copyright">
          <v-icon
            class="footer__icon-copyright"
            path="img/copyright.svg"
            width="12px"
            height="12px"
          />
          Все права защищены — 2021 год
        </span>

        <span class="footer__copy">
          Пишите: help@codebuild.com
          <v-icon class="footer__icon-copy" path="img/copy.svg" width="11px" height="12px" />
        </span>
      </div>
      <!-- bottom row -->
    </div>
  </footer>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  components: {
    VIcon
  }
};
</script>

<style lang="scss" scoped>
.footer__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: #171717;
}

.footer {
  @extend .flex_column-center;
  width: 1160px;
  height: 276px;

  font-family: 'Circe';
  font-size: 25px;
  color: white;

  &__main {
    @extend .flex_row-center-between;
  }

  &__copy-right {
    @extend .flex_row-center-between;
    margin-top: 15px;
  }

  &__line {
    height: 1px;
    border: none;
    margin-top: 50px;
    background-color: #444754;
  }
}

// footer__top-row
.footer {
  &__social {
    @extend .flex_row-center-between;
    min-width: 220px;
  }

  &__nav-wrap {
    @extend .flex_row;
  }

  &__nav {
    @extend .flex_row-center-between;
    width: 340px;

    font-size: 17px;
    line-height: 18px;
  }
}

// footer__bottom-row
.footer {
  &__copyright {
    @extend .flex_row-center-between;
    width: 215px;

    font-size: 14px;
    color: #444754;
  }

  &__copy {
    @extend .flex_row-center-between;
    width: 225px;

    font-size: 14px;
    color: #444754;
  }
}

// icons
.footer__icon {
  &-logo {
    @extend .flex_row-center-center;
    width: 78px;
    height: 55px;

    border: 2px solid #ffffff;
    border-radius: 4.5px;
    fill: #ffffff;
  }

  &-social {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;

    border: 1px solid #272a37;
    border-radius: 9px;
    fill: #ffffff;
  }

  &-flag {
    width: 28px;
    height: 18px;
    margin-left: 110px;
  }

  &-copy {
    @extend .flex_row-center-center;
    width: 28px;
    height: 28px;

    border: 1px solid #272a37;
    border-radius: 6px;
    fill: #ffffff;
  }
}

// hovers
:hover.footer {
  &__icon-logo {
    cursor: pointer;
    fill: #171717;
    background: #ffffff;
  }

  &__icon-social {
    background: #272a37;
    cursor: pointer;
  }

  &__icon-copy {
    background: #272a37;
    cursor: pointer;
  }

  &__nav-item {
    cursor: pointer;
    color: #256cfe;
  }
}
</style>