<template>
  <div class="radio" :class="{ radio__focus: picked === price }">
    <div class="radio__main">
      <input
        :id="keyField"
        class="radio__input"
        type="radio"
        :value="price"
        name="subscribe"
        @change="$emit('change', price)"
      />
      <label class="radio__label" :for="keyField" />

      <div class="radio__title">
        <slot>1 месяц подписки</slot>
        <div v-if="economy" class="radio__economy">
          Экономия — {{ economy }}₽
        </div>
      </div>
    </div>

    <div class="radio__price">
      {{ price }}₽
    </div>
  </div>
</template>

<script>
export default {
  name: 'VRadioButton',
  model: {
    prop: 'picked',
    event: 'change'
  },
  props: {
    // Значение выбранного переключателя
    picked: {
      type: [Number, String],
      default: ''
    },
    // Уникальный ключ чекбокса
    keyField: {
      type: [Number, String],
      default: 1
    },
    // Ценник
    price: {
      type: [Number, String],
      default: '99'
    },
    // Экономия про покупке больше чем месяц
    economy: {
      type: [Number, String],
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.radio {
  @extend .flex_row-center-between;

  width: 550px;
  height: 100px;

  padding: 0px 34px 0px 34px;
  box-sizing: border-box;

  border: 1px solid #e4e4e4;
  border-radius: 18px;

  &__main {
    @extend .flex_row;
  }

  &__title {
    margin-left: 30px;

    font-family: 'Circe';
    font-size: 24px;
    letter-spacing: -0.01em;
    color: #272a37;
  }

  &__price {
    font-family: 'ObjectSans';
    font-size: 38px;
    letter-spacing: -0.01em;
    color: #272a37;
  }

  &__economy {
    @extend .flex_row-center-center;
    width: 108px;
    height: 28px;

    font-family: 'Circe';
    font-size: 12px;
    letter-spacing: -0.01em;
    color: #ee3465;

    background: #fff1f5;
    border-radius: 15px;
  }

  &__focus {
    border-color: #ee3465;
  }
}

/* для элемента input c type="radio" */
.radio__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-radio */
.radio__input + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  padding-top: 2px;
}

/* создание в label псевдоэлемента before со следующими стилями */
.radio__input + label::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #e4e4e4;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 55% 55%;
  cursor: pointer;
}

/* стили при наведении курсора на radio */
.radio__input:not(:disabled):not(:checked) + label:hover::before {
  border-color: #ee3465;
}

/* стили для активного чекбокса (при нажатии на него) */
.radio__input:not(:disabled):active + label::before {
  background-color: transparent;
  border-color: transparent;
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.radio__input:focus:not(:checked) + label::before {
  border-color: #ee3465;
}

/* стили для чекбокса, находящегося в состоянии checked */
.radio__input:checked + label::before {
  border-color: #ee3465;
  background-color: #ee3465;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 11'%3e%3cpath fill='white' d='M5.75014 8.2755L13.7931 0.231628L15.0313 1.46888L5.75014 10.75L0.181641 5.1815L1.41889 3.94425L5.75014 8.2755Z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.radio__input:disabled + label::before {
  background-color: #e9ecef;
}

// hovers
:hover.radio {
  border-color: #ee3465;
}
</style>