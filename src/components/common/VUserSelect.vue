<template>
  <div v-click-outside="onClickOutside" class="select">
    <!-- Иконка -->
    <v-icon 
      v-if="isPremium"
      class="select__icon-premium cb_right9" 
      path="img/premium.svg" 
      width="20px" 
      height="20px"
    />

    <v-icon 
      v-else
      class="select__icon-user" 
      path="img/user.svg" 
      width="13px" 
      height="15px"
    />
    <!-- Иконка -->

    <!-- Имя -->
    <div class="select__name cb_left20" @click="isDropdown = !isDropdown">
      {{ name }}
      <v-icon 
        class="select__icon-angle-bracket cb_left12" 
        path="img/angleBracket.svg" 
        width="9px"
        height="7px"
        :style="isDropdown ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
      />
    </div>
    <!-- Имя -->

    <!-- Выпадашка -->
    <div v-if="isDropdown" class="select__dropdown">
      <div class="select__dropdown-item" @click="setRoute('cabinet')">
        Мой профиль
        <v-icon 
          class="select__icon-profile" 
          path="img/profile.svg" 
        />
      </div>

      <div class="select__dropdown-item" @click="setRoute('favorites')">
        Избранное
        <v-icon 
          class="select__icon-heart" 
          path="img/heart.svg" 
        />
      </div>

      <div class="select__dropdown-item cb_color-gray" style="border: none" @click="onExit()">
        Выйти
        <v-icon 
          class="select__icon-exit" 
          path="img/exit.svg" 
        />
      </div>

      <v-button v-if="!isPremium" class="select__button cb_top15 cb_bottom25" @click="setRoute('subscribe')">
        <v-icon 
          class="cb_right9" 
          path="img/premium.svg" 
          width="17px" 
          height="17px"
          fill="#ffffff"
        />
        Купить премиум
      </v-button>
    </div>
    <!-- Выпадашка -->
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'VUserSelect',
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
.select {
  @extend .cb_row;
  align-items: center;
  position: relative;
  width: 290px;

  font-family: 'Circe';
  font-size: 18px;
  color: #272a37;

  &__name {
    @extend .cb_row-center;
  }

  &__dropdown {
    @extend .cb_column;
    align-items: center;
    position: absolute;
    z-index: 2;
    width: 254px;
    top: 60px;

    background: #ffffff;
    box-shadow: 0px 0px 17px rgba(163, 163, 163, 0.24);
    border-radius: 8px;
  }

  &__dropdown-item {
    @extend .cb_row-between;

    width: 204px;
    height: 60px;

    border-bottom: 1px solid #f2f2f2;
  }

  &__button {
    ::v-deep .button {
      width: 204px;
      height: 55px;

      font-family: 'Circe';
      font-size: 16px;
      color: #ffffff;
      border: none;
      background: #ee3465;
    }
  }
}

// icons
.select__icon {
  &-premium {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    background: #ee3465;
    box-shadow: 0px 11px 18px -9px #ee3465;
    border-radius: 8px;
    fill: #ffffff;
  }

  &-user {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    border: 1px solid #256cfe;
    border-radius: 8px;
    stroke: #256cfe;
  }

  &-angle-bracket {
    stroke: #B1B8C6;
  }

  &-profile {
    width: 18px;
    height: 18px;
    stroke: #B1B8C6;
  }

  &-heart {
    width: 18px;
    height: 16px;
    stroke: #B1B8C6;
  }

  &-exit {
    width: 20px;
    height: 20px;
    stroke: #B1B8C6;
  }
}

// hovers
:hover.select {
  &__name {
    cursor: pointer;

    .select__icon-angle-bracket {
      stroke: #256cfe;
    }
  }

  &__dropdown-item {
    cursor: pointer;
    color: #256cfe;

    .select__icon-profile,
    .select__icon-heart,
    .select__icon-exit {
      stroke: #256cfe;
    }
  }

  &__button {
    ::v-deep .button {
      box-shadow: 0px 12px 18px -13px #ee3465;
    }
  }
}
</style>