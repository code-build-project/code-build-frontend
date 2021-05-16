<template>
  <div class="button-wrap">
    <button 
      class="button" 
      :style="{
        'fontFamily': fontFamily,
        'fontSize': fontSize + 'px',
        'color': textColor,
        'borderColor': borderColor
      }"
      @click="$emit('click')"
    >
      <slot>Кнопка</slot>

      <icon-arrow 
        v-if="isIcon"
        class="button__icon"
        :fill="textColor" 
        :width="iconWidth + 'px'" 
        :height="iconHeight + 'px'" 
      />
    </button>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'

export default {
  name: 'VButton',
  components: { IconArrow },
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

    isIcon: {
      type: Boolean,
      default: true,
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

  background: transparent;
  border: 0.1em solid;
  border-radius: 8px;

  &__icon {
    margin-left: 0.5em;
  }
}


</style>
