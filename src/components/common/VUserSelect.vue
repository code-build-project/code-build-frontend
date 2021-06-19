<template>
  <div class="select">
    <div v-if="!isPremium" class="select__icon-premium">
      <icon-premium width="20" height="20"/>
    </div>

    <div v-else class="select__icon-user">
      <icon-user width="13" height="15"/>
    </div>

    <div class="select__user cb_left20" @click="isDropdown = !isDropdown">
      Александр
      <icon-angle-bracket
        class="select__icon-bracket cb_left8"
        :style="isDropdown ? 'transform: rotate(-90deg)' : 'transform: rotate(90deg)'"
        width="12"
        height="8"
        stroke="#B1B8C6"
        stroke-width="6"
        @click.native="isDropdown = !isDropdown"
      />
    </div>

    <!-- Выпадашка -->
    <div v-if="isDropdown" class="select__dropdown">
      <div class="select__dropdown-item">
        Мой профиль
        <icon-user class="cb_top5" stroke="#B1B8C6" width="18" height="16" />
      </div>

      <div class="select__dropdown-item">
        Избранное
        <icon-heart class="cb_top5" stroke="#B1B8C6" width="18" height="16" />
      </div>

      <div class="select__dropdown-item cb_color-gray" style="border: none">
        Выйти
        <icon-exit stroke="#B1B8C6" width="22" height="22" />
      </div>

      <v-button
        class="cb_top15 cb_bottom25"
        button-type="buy-premium"
        icon-position="left"
        icon-width="16"
        icon-height="16"
      >
        Купить премиум
      </v-button>
    </div>
    <!-- Выпадашка -->
  </div>
</template>

<script>
import IconUser from '@/icons/IconUser.vue';
import IconPremium from '@/icons/IconPremium.vue';
import IconAngleBracket from '@/icons/IconAngleBracket.vue';
import IconHeart from '@/icons/IconHeart.vue';
import IconExit from '@/icons/IconExit.vue';

import VButton from '@/components/common/VButton.vue';

export default {
  name: 'VUserSelect',
  components: {
    IconUser,
    IconPremium,
    IconAngleBracket,
    IconHeart,
    IconExit,
    VButton
  },
  props: {
    // Имя пользователя
    name: {
      type: Boolean,
      default: false
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
  computed: {}
};
</script>

<style lang="scss" scoped>
.select {
  @extend .cb_row;
  align-items: center;
  position: relative;
  width: 290px;

  &__icon-premium {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    background: #ee3465;
    border-radius: 8px;
  }
  
  &__icon-user {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    border: 1px solid #256cfe;
    border-radius: 8px;
  }

  &__icon-bracket {
    cursor: pointer;
    transform: rotate(90deg);
  }

  &__user {
    cursor: pointer;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 18px;
    color: #272a37;
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

    font-family: 'Circe';
    font-size: 18px;
    color: #272a37;

    border-bottom: 1px solid #f2f2f2;
  }
}
</style>