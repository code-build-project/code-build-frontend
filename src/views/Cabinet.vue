<template>
  <div class="cabinet">
    <div class="cabinet__profile">
      <div class="cabinet__profile-left">
        Мой<br />
        профиль
      </div>

      <div class="cabinet__profile-right">
        <div class="cabinet__label">
          Имя
        </div>
        <div class="cabinet__input cb_top10">
          Александр
        </div>

        <div class="cabinet__label cb_top30">
          E-mail
        </div>
        <div class="cabinet__input cb_top10">
          Alexmoic96@yandex.ru
        </div>
      </div>
    </div>

    <div class="cabinet__premium cb_top40"> 
      <div class="cabinet__premium-left">
        Премиум 
        <div class="cabinet__premium-icon cb_left30">
          <icon-premium width="20" height="20" />
        </div>
      </div>

      <div class="cabinet__premium-right cb_left240">
        У вас нет активных подписок
        <v-button
          class="cb_left90"
          button-type="buy-premium"
          icon-position="left"
          icon-width="16"
          icon-height="16"
        >
          Купить премиум
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import IconPremium from '@/icons/IconPremium.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Cabinet',
  components: {IconPremium, VButton},
  data() {
    return {}
  }
}
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
    color: #B1B8C6;
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
    color: #272A37;
  }

  &__premium-right {
    @extend .cb_row;
    align-items: center;
    font-family: 'Circe';
    font-size: 20px;
    color: #272A37;
  }

  &__premium-icon {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    background: #EE3465;
    box-shadow: 0px 11px 18px -9px #EE3465;
    border-radius: 8px;
  }
}
</style>