<template>
  <div v-click-outside="onClickOutside" class="select">
    <!-- Иконка -->
    <div v-if="isPremium" class="select__icon-premium">
      <icon-premium width="20" height="20" />
    </div>

    <div v-else class="select__icon-user">
      <icon-user width="13" height="15" />
    </div>
    <!-- Иконка -->

    <!-- Имя -->
    <div class="cb_pointer cb_left20" @click="isDropdown = !isDropdown">
      {{ name }}
      <icon-angle-bracket
        class="cb_pointer cb_left8"
        :style="isDropdown ? 'transform: rotate(-90deg)' : 'transform: rotate(90deg)'"
        width="12"
        height="8"
        stroke="#B1B8C6"
        stroke-width="6"
      />
    </div>
    <!-- Имя -->

    <!-- Выпадашка -->
    <div v-if="isDropdown" class="select__dropdown">
      <div class="select__dropdown-item" @click="setRoute('cabinet')">
        Мой профиль
        <icon-user class="cb_top5" stroke="#B1B8C6" width="18" height="16" />
      </div>

      <div class="select__dropdown-item" @click="setRoute('favorites')">
        Избранное
        <icon-heart class="cb_top5" stroke="#B1B8C6" width="18" height="16" />
      </div>

      <div class="select__dropdown-item cb_color-gray" style="border: none" @click="onExit()">
        Выйти
        <icon-exit stroke="#B1B8C6" width="22" height="22" />
      </div>

      <v-button v-if="!isPremium" class="select__button cb_top15 cb_bottom25" @click="setRoute('subscribe')">
        <icon-premium class="select__button cb_right9" width="16" height="16" />
        Купить премиум
      </v-button>
    </div>
    <!-- Выпадашка -->
  </div>
</template>

<script>
import IconUser from '@/icons/IconUser.vue';
import IconExit from '@/icons/IconExit.vue';
import IconHeart from '@/icons/IconHeart.vue';
import IconPremium from '@/icons/IconPremium.vue';
import IconAngleBracket from '@/icons/IconAngleBracket.vue';

import VButton from '@/components/common/VButton.vue';

export default {
  name: 'VUserSelect',
  components: {
    IconUser,
    IconExit,
    IconHeart,
    IconPremium,
    IconAngleBracket,
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

  &__icon-premium {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    background: #ee3465;
    box-shadow: 0px 11px 18px -9px #ee3465;
    border-radius: 8px;
  }

  &__icon-user {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    border: 1px solid #256cfe;
    border-radius: 8px;
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

// hovers
:hover.select {
  &__user {
    ::v-deep path {
      stroke: #256cfe;
    }
  }

  &__dropdown-item {
    cursor: pointer;
    color: #256cfe;

    ::v-deep path {
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