<template>
  <header class="header">
    <v-icon class="header__icon-logo" path="img/logo.svg" @click.native="$router.push('/')" />

    <nav class="header__nav">
      <router-link class="header__nav-item" to="/"> О проекте </router-link>
      <router-link class="header__nav-item" to="/articles"> Блог </router-link>
      <router-link class="header__nav-item" to="/courses"> Видеокурсы </router-link>
    </nav>

    <div class="header__right-side">
      <header-user-menu v-if="user" :name="user.name" :is-premium="user.isPremium" />
      <header-buttons v-else />
    </div>
  </header>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import HeaderButtons from '@/components/header/HeaderButtons.vue';
import HeaderUserMenu from '@/components/header/HeaderUserMenu.vue';

export default {
  name: 'Header',

  components: {
    VIcon,
    HeaderButtons,
    HeaderUserMenu
  },

  computed: {
    user() {
      return this.$store.getters.user;
    }
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
  color: $black-color;

  &__nav {
    @extend .flex_row-center-between;
    width: 360px;
  }

  &__right-side {
    width: 290px;
  }
}

// icons
.header__icon {
  &-logo {
    @extend .flex_row-center-center;
    width: 78px;
    height: 55px;

    border: 2px solid $blue-color;
    border-radius: 4.5px;
    fill: $blue-color;
  }
}

// hovers
:hover.header {
  &__icon-logo {
    cursor: pointer;
    fill: $white-color;
    background: $blue-color;
  }

  &__nav-item {
    cursor: pointer;
    color: $blue-color;
  }
}
</style>