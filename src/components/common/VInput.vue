<template>
  <div class="input" :class="[{ input_focus: isFocus || value }, { input_error: isError }]">
    <input
      class="input__field"
      :value="value"
      :style="{ paddingRight: $slots.rightIcon ? '60px' : '' }"
      :type="isPassword ? 'password' : 'text'"
      required="true"
      @input="onInput($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label class="input__label"><slot>Label</slot></label>

    <div v-if="isError" class="input__error">
      {{ errorMessage }}
    </div>

    <div v-if="type === 'password'" class="input__icon">
      <v-icon
        v-if="isPassword"
        class="input__icon-close-eye"
        path="img/closeEye.svg"
        @click="onIconClick(false)"
      />

      <v-icon
        v-else
        class="input__icon-open-eye"
        path="img/openEye.svg"
        @click="onIconClick(true)"
      />
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VInput',

  components: {
    VIcon
  },

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
    // Тип поля
    type: {
      type: String,
      default: 'text'
    },
    // Флаг наличия ошибки в поле
    isError: {
      type: Boolean,
      default: false
    },
    // Текст ошибки
    errorMessage: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isFocus: false,
      isPassword: this.type === 'password',
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
    },

    onIconClick(value) {
      this.isPassword = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 374px;
  height: 55px;

  font-family: 'Circe';
  border-bottom: 1px solid #b1b8c6;

  &__label {
    pointer-events: none;
    position: absolute;
    transition: all 200ms;
    left: 0;
    bottom: 15px;

    font-family: 'Circe';
    font-size: 17px;
    color: #b1b8c6;
  }

  &__field {
    margin-top: 20px;

    font-size: 17px;
    line-height: 16px;

    border: none;
    background: transparent;
    color: #272a37;

    outline: none;
  }

  &__icon {
    position: absolute;

    right: 0px;
    top: 25px;
  }

  &__error {
    position: absolute;
    top: 60px;
    font-size: 13px;
    color: #ff3300;
  }
}

// icons
.input__icon {
  position: absolute;
  right: 0px;
  top: 25px;

  &-close-eye {
    width: 21px;
    height: 12px;

    fill: #e4e4e4;
  }

  &-open-eye {
    width: 21px;
    height: 15px;

    fill: #e4e4e4;
  }
}

// Модификаторы
.input {
  &_focus {
    border-color: #256cfe;

    .input__label {
      font-size: 13px;
      bottom: 40px;
    }
  }

  &_error {
    border-color: #ff3300;
  }
}
</style>