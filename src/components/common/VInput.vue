<template>
  <div class="input">
    <div class="input__legend">Email</div>

    <input
      class="input__field"
      :value="value"
      :style="{'paddingRight': $slots.rightIcon ? '60px' : ''}"
      :placeholder="placeholder"
      :type="typeInput"
      required="true"
      @input="onInput($event.target.value)"
      @blur="$emit('blur')"
    />
    <div v-if="error" class="input__error">{{errorMessage}}</div>

    <div class="input__icon">
      <slot name="rightIcon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInput',

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: [String, Number],
      required: false,
    },

    typeInput: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
      default: '',
    },

    error: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: '',
    },
  },

  data() {
    return {}
  },

  computed: {},

  methods: {
    onInput(event) {
      this.$emit('change', event)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 496px;
  height: 80px;

  position: relative;

  font-family: 'Circe';
  font-style: normal;
  font-weight: normal;

  border-bottom: 1px solid #FFFFFF;

  &__legend {
    font-family: 'Circe';
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 19px;
    color: #FFFFFF;
  }
  
  &__field {
    margin-top: 20px;
  
    font-size: 26px;
    line-height: 19px;
    letter-spacing: -0.02em;

    border: none;
    background: transparent;
    color: #FFFFFF;

    outline: none;

    &:hover {

    }

    &:focus, &:valid {

    }

    &::placeholder {
      color: #518AFF;
    }
  }

  &__icon {
    position: absolute;

    right: 0px;
    bottom: 20px;
  }
}

</style>
