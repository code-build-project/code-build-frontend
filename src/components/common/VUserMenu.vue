<template>
  <div class="menu" v-click-outside="onClickOutside">
    <!-- Иконка -->
    <v-icon
      v-if="isPremium"
      class="menu__icon-premium"
      path="img/premium.svg"
      width="20px"
      height="20px"
    />

    <v-icon
      v-else-if="!isPremium"
      class="menu__icon-user"
      path="img/user.svg"
      width="13px"
      height="15px"
    />
    <!-- Иконка -->

    <!-- Имя -->
    <div class="menu__name" @click="isDropdown = !isDropdown">
      {{ name }}
      <v-icon
        class="menu__icon-angle-bracket"
        path="img/angleBracketMenu.svg"
        width="9px"
        height="7px"
        :style="isDropdown ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
      />
    </div>
    <!-- Имя -->

    <!-- Выпадашка -->
    <ul v-if="isDropdown" class="menu__dropdown">
      <li class="menu__dropdown-item" @click="setRoute('cabinet')">
        Мой профиль
        <v-icon class="menu__icon-profile" path="img/profile.svg" />
      </li>

      <li class="menu__dropdown-item" @click="setRoute('favorites')">
        Избранное
        <v-icon class="menu__icon-heart" path="img/heart.svg" />
      </li>

      <li class="menu__dropdown-last-item" @click="onExit()">
        Выйти
        <v-icon class="menu__icon-exit" path="img/exit.svg" />
      </li>

      <v-button v-if="!isPremium" class="menu__button" @click="setRoute('subscribe')">
        <v-icon class="menu__icon-buy-premium" path="img/premium.svg" />
        Купить премиум
      </v-button>
    </ul>
    <!-- Выпадашка -->
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'VUserMenu',
  components: {
    VIcon,
    VButton
  },
  props: {
    // Имя пользователя
    name: {
      type: String,
      default: ''
    },
    // Флаг на наличие премиум подписки
    isPremium: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDropdown: false
    };
  },
  methods: {
    onClickOutside() {
      this.isDropdown = false;
    },

    setRoute(route) {
      this.$router.push(`/${route}`);
      this.onClickOutside();
    },

    onExit() {
      localStorage.token = null;
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  @extend .flex_row-center;
  position: relative;

  font-family: 'Circe';
  font-size: 18px;
  color: $color-black;

  &__name {
    @extend .flex_row-center;
    margin-left: 20px;
  }

  &__dropdown {
    @extend .flex_column-start-center;
    position: absolute;
    z-index: 2;
    width: 254px;
    top: 60px;

    background: $color-white;
    box-shadow: 0px 0px 17px rgba(163, 163, 163, 0.24);
    border-radius: 8px;
  }

  &__dropdown-item {
    @extend .flex_row-center-between;

    width: 204px;
    height: 60px;

    border-bottom: 1px solid #f2f2f2;
  }

  &__dropdown-last-item {
    @extend .menu__dropdown-item;
    border: none;
    color: $color-gray;
  }

  &__button {
    width: 204px;
    height: 55px;
    margin-top: 15px;
    margin-bottom: 25px;

    font-family: 'Circe';
    font-size: 16px;
    color: $color-white;
    border: none;
    background: $color-pink;
  }
}

// icons
.menu__icon {
  &-premium {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;

    background: $color-pink;
    box-shadow: 0px 11px 18px -9px $color-pink;
    border-radius: 8px;
    fill: $color-white;
  }

  &-user {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;

    border: 1px solid $color-blue;
    border-radius: 8px;
    stroke: $color-blue;
  }

  &-angle-bracket {
    stroke: $color-gray;
    margin-left: 12px;
  }

  &-profile {
    width: 18px;
    height: 18px;
    stroke: $color-gray;
  }

  &-heart {
    width: 18px;
    height: 16px;
    fill: transparent;
    stroke: $color-gray;
  }

  &-exit {
    width: 20px;
    height: 20px;
    stroke: $color-gray;
  }

  &-buy-premium {
    width: 17px;
    height: 17px;
    fill: $color-white;
    margin-right: 9px;
  }
}

// hovers
:hover.menu {
  &__name {
    cursor: pointer;

    .menu__icon-angle-bracket {
      stroke: $color-blue;
    }
  }

  &__dropdown-item {
    cursor: pointer;
    color: $color-blue;

    .menu__icon-profile,
    .menu__icon-heart,
    .menu__icon-exit {
      stroke: $color-blue;
    }
  }

  &__button {
    box-shadow: 0px 12px 18px -13px $color-pink;
  }
}
</style>