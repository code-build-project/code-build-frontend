<template>
  <div class="button-wrap">
    <button 
      class="button" 
      :style="{
        'fontFamily': fontFamily,
        'fontSize': fontSize + 'px',
        'color': textColor,
        'borderColor': borderColor,
        'borderWidth': borderWidth + 'em',
        'background': backgroundColor
      }"
      @click="$emit('click')"
    >
      <icon-premium 
        v-if="isIcon && iconPosition === 'left'"
        class="button__icon-left"
        :fill="textColor" 
        :width="iconWidth + 'px'" 
        :height="iconHeight + 'px'" 
      />

      <slot>Кнопка</slot>

      <icon-arrow 
        v-if="isIcon && iconPosition === 'right'"
        class="button__icon-right"
        :fill="textColor" 
        :width="iconWidth + 'px'" 
        :height="iconHeight + 'px'" 
      />
    </button>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'
import IconPremium from '@/icons/IconPremium.vue'

export default {
  name: 'VButton',
  components: { IconArrow, IconPremium },
  props: {
    fontFamily: {
      type: String,
      default: 'Circe',
    },

    fontSize: {
      type: String,
      default: '24',
    },

    textColor: {
      type: String,
      default: '#256CFE',
    },

    borderColor: {
      type: String,
      default: '#256CFE',
    },

    borderWidth: {
      type: String,
      default: '0.1',
    },

    backgroundColor: {
      type: String,
      default: 'transparent',
    },

    isIcon: {
      type: Boolean,
      default: true,
    },

    iconPosition: {
      type: String,
      default: 'right',
    },

    iconWidth: {
      type: String,
      default: '30',
    },

    iconHeight: {
      type: String,
      default: '30',
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.button {
  padding: 1em 2em 1em 2em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-style: solid;
  border-radius: 8px;
  
  &__icon-left {
    margin-right: 0.5em;
  }

  &__icon-right {
    margin-left: 0.5em;
  }
}


</style>
