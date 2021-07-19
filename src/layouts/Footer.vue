<template>
  <div class="footer__wrap">
    <div class="footer">
      <!-- row 1 -->
      <div class="cb_row-between">
        <v-icon 
          class="footer__icon-logo" 
          path="img/logo.svg" 
          @click.native="$router.push('/')"
        />

        <div class="footer__social">
          <v-icon 
            class="footer__icon-social" 
            path="img/youtube.svg" 
            width="17px"
            height="13px"
          />

          <v-icon 
            class="footer__icon-social" 
            path="img/vk.svg" 
            width="20px"
            height="11px"
          />

          <v-icon 
            class="footer__icon-social" 
            path="img/insta.svg" 
            width="17px"
            height="17px"
          />

          <v-icon 
            class="footer__icon-social" 
            path="img/telegram.svg" 
            width="18px"
            height="15px"
          />
        </div>

        <div class="footer__nav">
          <div class="footer__links">
            <router-link
              class="footer__links-item"
              to="/"
            >
              О проекте
            </router-link>
            <router-link
              class="footer__links-item"
              to="/articles"
            >
              Блог
            </router-link>
            <router-link
              class="footer__links-item"
              to="/courses"
            >
              Видеокурсы
            </router-link>
          </div>

          <v-icon 
            class="footer__icon-flag" 
            path="img/flag.svg" 
            width="28px"
            height="18px"
          />
        </div>
      </div>
      <!-- row 1 -->

      <hr class="footer__line cb_top50" />

      <!-- row 2 -->
      <div class="cb_row-between cb_top15">
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
          <v-icon 
            class="footer__icon-copy" 
            path="img/copy.svg" 
            width="11px"
            height="12px"
          />
        </span>
      </div>
      <!-- row 2 -->
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  components: {
    VIcon
  },
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
}

// icons
.footer__icon {
  &-logo {
    @extend .cb_center;
    width: 78px;
    height: 55px;

    border: 2px solid #ffffff;
    border-radius: 4.5px;
    fill: #ffffff;
  }

  &-social {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    border: 1px solid #272a37;
    border-radius: 9px;
    fill: #ffffff;
  }

  &-copy {
    @extend .cb_center;
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

  &__links-item {
    cursor: pointer;
    color: #256cfe;
  }
}
</style>