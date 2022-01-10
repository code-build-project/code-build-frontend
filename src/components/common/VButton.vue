<template>
  <button
    class="button"
    :class="isLoaded ? `button__type-${type}` : 'button__type-disabled'"
    @click="$emit('click')"
  >
    <slot v-if="isLoaded">Кнопка</slot>
    <div v-else class="button__preloader-wrap">
      <div class="button__preloader" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    // Флаг отображения прелоадера
    isLoaded: {
      type: Boolean,
      default: true
    },
    //
    type: {
      type: String,
      default: 'normal'
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  @extend .flex_row-center-center;
  border-style: solid;
  border-radius: 8px;
}

.button__type {
  &-normal {
    color: $color-black;
    background: transparent;
    border-color: $color-silver;
    border-width: 1px;
  }

  &-primary {
    color: $color-white;
    background: $color-blue;
    border: none;

    &:active {
      background: $color-navy;
    }
  }

  &-disabled {
    color: $color-black;
    background: transparent;
    border-color: $color-gray;
    border-width: 1px;

    pointer-events: none;
  }

  &-active {
    color: $color-white;
    border: none;
    background: $color-pink;
  }
}

.button__preloader-wrap {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button__preloader {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 3px solid transparent;
    border-top-color: $color-blue;
    top: -3px;
    left: -3px;
  }

  &:before {
    z-index: 1;
    animation: spin 1s infinite;
  }

  &:after {
    border: 3px solid transparent;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>