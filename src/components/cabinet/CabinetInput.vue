<template>
  <div class="input__wrap">
    <label class="input__label"><slot>Label</slot></label>

    <div class="input" :class="[{ input_focus: isFocus && !readonly }, { input_hover: !readonly }]">
      <input
        class="input__field"
        :value="value"
        type="text"
        :readonly="readonly"
        maxlength="25"
        @input="onInput($event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CabinetInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // Значение текста в поле
    value: {
      type: [String, Number],
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFocus: false
    };
  },
  methods: {
    onFocus() {
      this.isFocus = true;
    },

    onBlur() {
      this.isFocus = false;
      this.$emit('blur');
    },

    onInput(event) {
      this.$emit('change', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  width: 550px;
  height: 80px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  padding: 0px 25px;

  font-family: 'Circe';
  border: 1px solid $color-silver;
  border-radius: 18px;

  &__label {
    pointer-events: none;
    font-family: 'Circe';
    font-size: 20px;
    letter-spacing: -0.01em;
    color: $color-gray;
  }

  &__field {
    width: 100%;

    font-size: 24px;
    letter-spacing: -0.01em;
    color: $color-black;

    border: none;
    background: transparent;

    outline: none;
    cursor: default;
  }
}

// Модификаторы
.input {
  &_focus {
    border-color: $color-pink;
  }

  &_hover {
    &:hover {
      border-color: $color-pink;
      cursor: pointer;

      .input__field {
        cursor: text;
      }
    }
  }
}
</style>