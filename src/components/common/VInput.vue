<template>
  <div class="input" :class="{ input_focus: isFocus }">
    <div class="input__legend">
      Email
    </div>

    <input
      class="input__field"
      :value="value"
      :style="{ paddingRight: $slots.rightIcon ? '60px' : '' }"
      :placeholder="placeholder"
      :type="typeInput"
      required="true"
      @input="onInput($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />

    <div v-if="error" class="input__error">
      {{ errorMessage }}
    </div>

    <div v-if="typeInput === 'password'" class="input__icon">
      <icon-open-eye v-if="isPassword" width="21" height="15" fill="#E4E4E4" />

      <icon-close-eye v-else width="21" height="12" fill="#E4E4E4" />
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
    value: {
      type: [String, Number],
      required: false
    },

    typeInput: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String,
      default: ''
    },

    error: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isFocus: false,
      isPassword: false
    }
  },

  computed: {},

  methods: {
    onFocus() {
      this.isFocus = true
    },

    onBlur() {
      this.isFocus = false
    },

    onInput(event) {
      this.$emit('change', event)
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

  &__legend {
    position: absolute;
    top: 0;
    left: 0;

    font-size: 13px;
    line-height: 16px;
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

    &::placeholder {
      color: #b1b8c6;
    }
  }

  &__icon {
    position: absolute;

    right: 0px;
    bottom: 10px;
  }

  &_focus {
    border-color: #256cfe;
  }
}
</style>