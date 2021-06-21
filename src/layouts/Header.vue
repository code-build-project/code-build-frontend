<template>
  <div class="header">
    <icon-logo class="header__logo" @click.native="$router.push('/')" />

    <div class="header__nav">
      <router-link class="header__nav-item" to="/">
        О проекте
      </router-link>
      <router-link class="header__nav-item" to="/articles">
        Блог
      </router-link>
      <router-link class="header__nav-item" to="/courses">
        Видеокурсы
      </router-link>
    </div>

    <!-- Правая часть -->
    <v-user-select v-if="user" :name="user.name" :is-premium="user.isPremium" />

    <div v-else class="cb_row-center">
      <router-link class="header__button" to="/auth" target="_blank">
        Войти
      </router-link>
      <v-button class="header__button cb_left45" @click="$router.push('/subscribe')">
        <icon-premium class="cb_right9" width="21" height="21" />
        Премиум
      </v-button>
    </div>
    <!-- Правая часть -->
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue';
import IconPremium from '@/icons/IconPremium.vue';

import VButton from '@/components/common/VButton.vue';
import VUserSelect from '@/components/common/VUserSelect.vue'

export default {
  name: 'Header',

  components: {
    IconLogo,
    IconPremium,
    VButton,
    VUserSelect
  },

  data() {
    return {};
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
  @extend .cb_row-between;
  width: 1160px;
  min-height: 120px;

  font-family: 'Circe';
  font-size: 18px;
  color: #15244b;

  &__nav {
    @extend .cb_row-between;
    width: 360px;
  }

  &__button {
    color: #ee3465;

    ::v-deep .button {
      width: 168px;
      height: 60px;

      font-family: 'Circe';
      font-size: 18px;
      color: #ffffff;
      border: none;
      background: #ee3465;
    }
  }
}

// hovers
:hover.header {
  &__logo {
    cursor: pointer;

    ::v-deep {
      path {
        fill: #ffffff;
      }

      rect {
        fill: #256cfe;
      }
    }
  }

  &__nav-item {
    cursor: pointer;
    color: #256cfe;
  }

  &__button {
    cursor: pointer;
    color: #15244b;

    ::v-deep .button {
      box-shadow: 0px 12px 18px -13px #ee3465;
    }
  }
}
</style>