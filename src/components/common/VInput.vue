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
  // @extend .cb_column-center;
  position: relative;
  width: 374px;
  height: 55px;

  font-family: 'Circe';
  border-bottom: 1px solid #B1B8C6;

  &__legend {
    position: absolute;
    top: 0;
    left: 0;

    font-size: 13px;
    line-height: 16px;
    color: #B1B8C6;
  }
  
  &__field {
    margin-top: 20px;
    
    font-size: 17px;
    line-height: 16px;

    border: none;
    background: transparent;
    color: #272A37;;

    outline: none;

    &:hover {

    }

    &:focus, &:valid {

    }

    &::placeholder {
      color: #B1B8C6;
    }
  }

  &__icon {
    position: absolute;

    right: 0px;
    bottom: 20px;
  }
}

</style>
