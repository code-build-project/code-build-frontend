<template>
  <div class="subscribe">
    <main class="subscribe__main">
      <!-- Левая часть -->
      <div class="subscribe__main-left-side">
        <h1 class="subscribe__main-title">
          Подключи премиум подписку
          <v-icon
            class="subscribe__icon-premium"
            path="img/premium.svg"
            width="20px"
            height="20px"
          />
        </h1>

        <h2 class="subscribe__main-subtitle">
          и получи доступ к более чем 10 платным курсам по цене чашки кофе
        </h2>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="subscribe__main-right-side">
        <v-radio-button
          v-for="(item, index) in radioList"
          :key="index"
          v-model="radioValue"
          class="mt-20px"
          :key-field="index"
          :price="item.price"
          :economy="item.economy"
        >
          {{ item.title }}
        </v-radio-button>

        <div class="subscribe__consent">
          <div class="flex_row-center-center">
            <v-check-box key-field="11" border-color="pink" />

            <div class="ml-10px">
              Я принимаю
              <v-underline>условия подписки</v-underline>
            </div>
          </div>

          <v-button class="subscribe__button"> Подключить </v-button>
        </div>
      </div>
      <!-- Правая часть -->
    </main>

    <div class="subscribe__questions">
      <div class="subscribe__questions-title">Часто задаваемые вопросы</div>
      <div class="subscribe__questions-list">
        <v-question />
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';
import VQuestion from '@/components/common/VQuestion.vue';
import VCheckBox from '@/components/common/VCheckBox.vue';
import VUnderline from '@/components/common/VUnderline.vue';
import VRadioButton from '@/components/common/VRadioButton.vue';

export default {
  name: 'Subscribe',
  components: {
    VIcon,
    VButton,
    VQuestion,
    VCheckBox,
    VUnderline,
    VRadioButton
  },
  data() {
    return {
      radioValue: '',

      radioList: [
        { title: '1 месяц подписки', price: '99', economy: undefined },
        { title: '3 месяца подписки', price: '239', economy: '58' },
        { title: '1 год подписки', price: '799', economy: '389' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.subscribe {
  @extend .flex_column;
  padding: 40px;
  box-sizing: border-box;
  background: #f4f4f4;

  // Верхний блок подписки
  &__main {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 591px;

    padding: 73px 80px 72px 77px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 29px;
  }

  &__main-left-side {
    @extend .flex_column;
  }

  &__main-title {
    position: relative;
    width: 300px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__main-subtitle {
    width: 270px;
    margin-top: 25px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 32px;
    color: #3e4462;
  }

  &__main-right-side {
    @extend .flex_column;
    width: 550px;
  }

  &__consent {
    @extend .flex_row-center-between;
    margin-top: 45px;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 15px;
    color: #b1b8c6;
  }

  // Нижний блок
  &__questions {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 437px;
    margin-top: 40px;

    padding: 73px 80px 72px 77px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 29px;
  }

  &__questions-title {
    width: 200px;

    font-family: 'ObjectSans';
    font-size: 30px;
    line-height: 30px;
    color: #272a37;
  }

  &__questions-list {
    margin-top: 10px;
    border-top: 1px solid #e4e4e4;
  }

  &__button {
    width: 188px;
    height: 60px;

    font-family: 'Circe';
    font-size: 18px;
    color: #272a37;
    background: transparent;

    border: 1px solid #e4e4e4;
    border-radius: 8px;
  }
}

// icons
.subscribe__icon {
  &-premium {
    @extend .flex_row-center-center;
    position: absolute;
    right: -45px;
    bottom: 0px;
    width: 44px;
    height: 44px;
    margin-left: 30px;

    background: #ee3465;
    box-shadow: 0px 11px 18px -9px #ee3465;
    border-radius: 8px;
    fill: $color-white;
  }
}

// hovers
:hover.subscribe {
  &__button {
    border: none;
    color: #ffffff;
    background: #ee3465;
    box-shadow: 0px 12px 18px -13px #ee3465;
  }
}
</style>