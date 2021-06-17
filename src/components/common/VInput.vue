<template>
  <div class="input" :class="[{ input_focus: isFocus || value }, { input_error: isError }]">
    <input
      class="input__field"
      :value="value"
      :style="{ paddingRight: $slots.rightIcon ? '60px' : '' }"
      :type="type"
      required="true"
      @input="onInput($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label class="input__label">{{ label }}</label>

    <div v-if="isError" class="input__error">
      {{ errorMessage }}
    </div>

    <div v-if="isPassword" class="input__icon">
      <icon-close-eye
        v-if="hidePassword"
        class="cb_pointer"
        width="21"
        height="12"
        fill="#E4E4E4"
        @click.native="onIconClick(false)"
      />

      <icon-open-eye
        v-else
        class="cb_pointer"
        width="21"
        height="15"
        fill="#E4E4E4"
        @click.native="onIconClick(true)"
      />
    </div>
  </div>
</template>

<script>
import IconCloseEye from '@/icons/IconCloseEye.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

export default {
  name: 'VInput',

  components: {
    IconCloseEye,
    IconOpenEye
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    // Значение текста в поле
    value: {
      type: [String, Number],
      required: false
    },
    // Значение лейбла и плейсхолдера
    label: {
      type: String,
      required: 'Label'
    },
    // Флаг: тип поля - Пароль, или нет
    isPassword: {
      type: Boolean,
      default: false
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
      hidePassword: true,
      type: this.isPassword ? 'password' : 'text'
    }
  },

  computed: {},

  methods: {
    onFocus() {
      this.isFocus = true
    },

    onBlur() {
      this.isFocus = false
      this.$emit('blur')
    },

    onInput(event) {
      this.$emit('change', event)
    },

    onIconClick(value) {
      this.hidePassword = value
      this.type = value ? 'password' : 'text'
    }
  }
}
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
    bottom: 10px;
  }

  &__error {
    position: absolute;
    top: 60px;
    font-size: 13px;
    color: #ff3300;
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