<template>
  <header class="header">
    <v-icon class="header__icon-logo" path="img/logo.svg" @click.native="$router.push('/')" />

    <!-- navigation -->
    <nav class="header__nav">
      <router-link class="header__nav-item" to="/">
        О проекте
      </router-link>
      <router-link class="header__nav-item" to="/articles">
        Блог
      </router-link>
      <router-link class="header__nav-item" to="/courses">
        Видеокурсы
      </router-link>
    </nav>
    <!-- navigation -->

    <!-- right side -->
    <div class="header__right-side">
      <v-user-menu v-if="user.id" :name="user.name" :is-premium="user.isPremium" />

      <div v-else class="header__buttons">
        <router-link class="header__button-login" to="/auth">
          Войти
        </router-link>

        <v-button class="header__button-subscribe" type="active" @click="$router.push('/subscribe')">
          <v-icon class="header__icon-premium" path="img/premium.svg" />
          Премиум
        </v-button>
      </div>
    </div>
    <!-- right side -->
  </header>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import VUserMenu from '@/components/common/VUserMenu';

export default {
  name: 'Header',

  components: {
    VIcon,
    VButton,
    VUserMenu
  },

  data() {
    return {
      user: this.$store.getters.user
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  @extend .flex_row-center-between;
  width: 1160px;
  min-height: 120px;

  font-family: 'Circe';
  font-size: 18px;
  color: $color-black;

  &__nav-item {
    color: $color-black;
  }

  &__button-login {
    color: $color-pink;
  }

  &__button-subscribe {
    width: 168px;
    height: 60px;
    margin-left: 45px;
  }
}

// flex containers
.header {
  &__nav {
    @extend .flex_row-center-between;
    width: 360px;
  }

  &__right-side {
    @extend .flex_row;
    width: 290px;
  }

  &__buttons {
    @extend .flex_row-center-center;
  }
}

// icons
.header__icon {
  &-logo {
    @extend .flex_row-center-center;
    width: 78px;
    height: 55px;

    border: 2px solid $color-blue;
    border-radius: 4.5px;
    fill: $color-blue;
  }

  &-premium {
    width: 21px;
    height: 21px;
    margin-right: 9px;

    fill: $color-white;
  }
}

// hovers
:hover.header {
  &__icon-logo {
    cursor: pointer;
    fill: $color-white;
    background: $color-blue;
  }

  &__nav-item {
    cursor: pointer;
    color: $color-blue;
  }

  &__button-login {
    cursor: pointer;
    color: $color-black;
  }

  &__button-subscribe {
    box-shadow: 0px 12px 18px -13px $color-pink;
  }
}
</style>