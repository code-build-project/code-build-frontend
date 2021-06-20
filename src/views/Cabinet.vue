<template>
  <div class="cabinet">
    <!-- Блок "Мой профиль" -->
    <div class="cabinet__profile">
      <div class="cabinet__profile-left">
        Мой<br />
        профиль
      </div>

      <div class="cabinet__profile-right">
        <div class="cabinet__label">Имя</div>
        <div class="cabinet__input cb_top10">
          {{ user.name }}
        </div>

        <div class="cabinet__label cb_top30">E-mail</div>
        <div class="cabinet__input cb_top10">
          {{ user.email }}
        </div>
      </div>
    </div>
    <!-- Блок "Мой профиль" -->

    <!-- Блок "Премиум" -->
    <div class="cabinet__premium cb_top40">
      <div class="cabinet__premium-left">
        Премиум
        <div class="cabinet__premium-icon cb_left30">
          <icon-premium width="20" height="20" />
        </div>
      </div>

      <div class="cabinet__premium-right cb_left240">
        <div v-if="user.isPremium">
          <div class="cb_color-pink">Активен</div>
          <div>Подписка закончится 27 июля</div>
        </div>

        <div v-else>У вас нет активных подписок</div>

        <v-button
          class="cb_left90"
          :class="user.isPremium ? 'cabinet__button-cancel' : 'cabinet__button-buy'"
        >
          <icon-premium v-if="!user.isPremium" class="cb_right9" width="16" height="16" />
          {{ user.isPremium ? 'Отменить подписку' : 'Купить премиум' }}
        </v-button>
      </div>
    </div>
    <!-- Блок "Премиум" -->
  </div>
</template>

<script>
import IconPremium from '@/icons/IconPremium.vue';

import VButton from '@/components/common/VButton.vue';

export default {
  name: 'Cabinet',
  components: { IconPremium, VButton },
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
.cabinet {
  @extend .cb_column;
  padding: 40px;
  box-sizing: border-box;
  background: #f4f4f4;

  &__profile {
    @extend .cb_row-between;

    width: 1160px;
    height: 403px;

    padding: 58px 80px 72px 72px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 29px;
  }

  &__profile-left {
    height: 100%;
    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__profile-right {
    height: 100%;
  }

  &__label {
    font-family: 'Circe';
    font-size: 20px;
    letter-spacing: -0.01em;
    color: #b1b8c6;
  }

  &__input {
    width: 550px;
    height: 80px;

    padding: 23px;
    box-sizing: border-box;

    font-family: 'Circe';
    font-size: 24px;
    letter-spacing: -0.01em;
    color: #272a37;

    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 18px;
  }

  &__premium {
    @extend .cb_center;
    width: 1160px;
    height: 158px;

    background: #ffffff;
    border-radius: 29px;
  }

  &__premium-left {
    @extend .cb_row;
    font-family: 'ObjectSans';
    font-size: 30px;
    color: #272a37;
  }

  &__premium-right {
    @extend .cb_row;
    align-items: center;
    font-family: 'Circe';
    font-size: 20px;
    color: #272a37;
  }

  &__premium-icon {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    background: #ee3465;
    box-shadow: 0px 11px 18px -9px #ee3465;
    border-radius: 8px;
  }

  &__button-cancel {
    ::v-deep .button {
      width: 204px;
      height: 55px;

      font-family: 'Circe';
      font-size: 16px;
      color: #272a37;
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      background: #ffffff;
    }
  }

  &__button-buy {
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
:hover.cabinet {
  &__button-cancel {
    ::v-deep .button {
      color: #ffffff;
      background: #ee3465;
    }
  }

  &__button-buy {
    ::v-deep .button {
      box-shadow: 0px 12px 18px -13px #ee3465;
    }
  }
}
</style>