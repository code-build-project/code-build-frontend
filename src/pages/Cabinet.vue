<template>
  <div class="cabinet">
    <!-- Блок "Мой профиль" -->
    <main class="cabinet__main">
      <div class="cabinet__main-left">
        Мой<br />
        профиль
      </div>

      <div class="cabinet__main-right">
        <cabinet-input :value="user.name" @change="changeName($event)" @blur="getPopup()">
          Имя
        </cabinet-input>

        <cabinet-input class="mt-30px" :value="user.email" readonly> E-mail </cabinet-input>
      </div>
    </main>
    <!-- Блок "Мой профиль" -->

    <!-- Блок "Премиум" -->
    <div class="cabinet__footer" :class="{ cabinet__footer_active: user.isPremium }">
      <div class="cabinet__footer-left">
        Премиум
        <v-icon class="cabinet__icon-premium" path="img/premium.svg" width="20px" height="20px" />
      </div>

      <div class="cabinet__footer-right">
        <div v-if="user.isPremium">
          <div style="color: #ee3465">Активен</div>
          <div>Подписка закончится 27 июля</div>
        </div>

        <div v-else>У вас нет активных подписок</div>

        <v-button
          v-if="user.isPremium"
          class="cabinet__button cabinet__button-cancel"
          type="normal"
          @click="$router.push('/subscribe')"
        >
          Отменить подписку
        </v-button>

        <v-button
          v-else
          class="cabinet__button cabinet__button-buy"
          type="active"
          @click="$router.push('/subscribe')"
        >
          <v-icon class="cabinet__icon-premium-buy" path="img/premium.svg" />
          Купить премиум
        </v-button>
      </div>
    </div>
    <!-- Блок "Премиум" -->

    <popup-cabinet v-if="isPopup" :newName="newName" @close="isPopup = false" />
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import PopupCabinet from '@/components/pageCabinet/Popup';
import CabinetInput from '@/components/pageCabinet/CabinetInput';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'Cabinet',
  components: {
    VIcon,
    VButton,
    PopupCabinet,
    CabinetInput
  },
  data() {
    return {
      user: storage.getUser('local'),
      newName: '',
      isPopup: false,
      isChange: false
    };
  },
  methods: {
    getPopup() {
      if (this.isChange) {
        this.isPopup = true;
        this.isChange = false;
      }
    },

    changeName(name) {
      this.isChange = true;
      this.newName = name;
    }
  }
};
</script>

<style lang="scss" scoped>
.cabinet {
  @extend .flex_column;
  padding: 40px;
  background: #f4f4f4;

  &__main {
    @extend .flex_row-center-between;

    width: 1160px;
    height: 403px;

    padding: 58px 80px 72px 72px;
    background: $color-white;
    border-radius: 29px;
  }

  &__main-left {
    height: 100%;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: $color-black;
  }

  &__main-right {
    height: 100%;
  }

  &__label {
    font-family: 'Circe';
    font-size: 20px;
    letter-spacing: -0.01em;
    color: $color-gray;
  }

  &__input {
    width: 550px;
    height: 80px;
    margin-top: 10px;

    padding: 23px;

    font-family: 'Circe';
    font-size: 24px;
    letter-spacing: -0.01em;
    color: $color-black;

    border: 1px solid $color-silver;
    border-radius: 18px;
  }

  &__footer {
    @extend .flex_row-center-center;
    width: 1160px;
    height: 158px;
    margin-top: 40px;

    background: $color-white;
    border-radius: 29px;
  }

  &__footer-left {
    @extend .flex_row;
    font-family: 'ObjectSans';
    font-size: 30px;
    color: $color-black;
  }

  &__footer-right {
    @extend .flex_row-center-center;
    margin-left: 240px;

    font-family: 'Circe';
    font-size: 20px;
    color: $color-black;
  }

  &__button {
    width: 204px;
    height: 55px;
    margin-left: 90px;

    font-family: 'Circe';
    font-size: 16px;
  }
}

// icons
.cabinet__icon {
  &-premium {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;
    margin-left: 30px;

    background: $color-pink;
    box-shadow: 0px 11px 18px -9px $color-pink;
    border-radius: 8px;
    fill: $color-white;
  }

  &-premium-buy {
    width: 17px;
    height: 17px;
    margin-right: 9px;
    fill: $color-white;
  }
}

// actives
.cabinet {
  &__footer_active {
    border: 2px solid $color-pink;
  }
}

// hovers
:hover.cabinet {
  &__button-cancel {
    color: $color-white;
    background: $color-pink;
  }

  &__button-buy {
    box-shadow: 0px 12px 18px -13px $color-pink;
  }
}
</style>