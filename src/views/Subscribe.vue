<template>
  <div class="subscribe">
    <div class="subscribe__premium">
      <!-- Левая часть -->
      <div class="cb_column">
        <div class="subscribe__premium-left-title">
          Подключи премиум подписку
          <div class="subscribe__premium-icon cb_left30">
            <icon-premium width="20" height="20" />
          </div>
        </div>

        <div class="subscribe__premium-left-subtitle cb_top25">
          и получи доступ к более 
          чем 10 платным курсам 
          по цене чашки кофе
        </div>
      </div>
      <!-- Левая часть -->
      
      <!-- Правая часть -->
      <div class="cb_column cb_width550">
        <v-radio-button 
          v-for="(item, index) in radioList" :key="index"
          v-model="radioValue" 
          class="cb_top20"
          :key-field="index" 
          :price="item.price"
          :economy="item.economy"
        >
          {{ item.title }}
        </v-radio-button>

        <div class="subscribe__consent cb_top45">
          <div class="cb_center">
            <v-check-box key-field="11" checkbox-type="subscribe" />

            <div class="cb_left10">
              Я принимаю
              <v-underline>условия подписки</v-underline>
            </div>
          </div>

          <v-button class="subscrube__button">
            Подключить
          </v-button>
        </div>
      </div>
      <!-- Правая часть -->
    </div>

    <div class="subscribe__questions cb_top40"> 
      <div class="subscribe__questions-title">
        Часто
        задаваемые
        вопросы
      </div>

      <div class="subscribe__questions-list cb_top10">
        <v-question />
      </div>
    </div>
  </div>
</template>

<script>
import IconPremium from '@/icons/IconPremium.vue'

import VButton from '@/components/common/VButton.vue'
import VQuestion from '@/components/common/VQuestion.vue'
import VCheckBox from '@/components/common/VCheckBox.vue'
import VUnderline from '@/components/common/VUnderline.vue'
import VRadioButton from '@/components/common/VRadioButton.vue'

export default {
  name: 'Subscribe',
  components: {IconPremium, VButton, VQuestion, VCheckBox, VUnderline, VRadioButton},
  data() {
    return {
      radioValue: '',

      radioList: [
        {title: '1 месяц подписки', price: '99', economy: undefined},
        {title: '3 месяца подписки', price: '239', economy: "58"},
        {title: '1 год подписки', price: '799', economy: "389"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  @extend .cb_column;
  padding: 40px;
  box-sizing: border-box;
  background: #f4f4f4;

  // Верхний блок подписки
  &__premium {
    @extend .cb_row;
    justify-content: space-between;
    width: 1160px;
    height: 591px;

    padding: 73px 80px 72px 77px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 29px;
  }

  &__premium-left-title {
    position: relative;
    width: 300px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: #272A37;
  }

  &__premium-left-subtitle {
    width: 270px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 32px;
    color: #3E4462;
  }

  &__consent {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 15px;
    color: #B1B8C6;
  }

  &__premium-icon {
    @extend .cb_center;
    position: absolute;
    right: -45px;
    bottom: 0px;
    width: 44px;
    height: 44px;

    background: #EE3465;
    box-shadow: 0px 11px 18px -9px #EE3465;
    border-radius: 8px;
  }

  // Нижний блок вопросов
  &__questions {
    @extend .cb_row;
    justify-content: space-between;
    width: 1160px;
    height: 437px;

    padding: 73px 80px 72px 77px;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 29px;
  }

  &__questions-title {
    width: 200px;

    font-family: 'ObjectSans';
    font-size: 30px;
    line-height: 30px;
    color: #272A37;
  }

  &__questions-list {
    border-top: 1px solid #E4E4E4;
  }

  &__button {
    ::v-deep .button {
      width: 188px;
      height: 60px;

      font-family: 'Circe';
      font-size: 18px;
      color: #272A37;
      background: transparent;

      border: 1px solid #E4E4E4;
      border-radius: 8px;
    }
  }
}

// hovers
:hover.subscribe {
  &__button {
    ::v-deep .button {
      border: none;
      color: #FFFFFF;
      background: #EE3465;
      box-shadow: 0px 12px 18px -13px #EE3465;
    }
  }
}
</style>