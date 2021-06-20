<template>
  <div class="button-wrap">
    <button
      class="button"
      :class="`button-${buttonType}`"
      @click="$emit('click')"
    >
      <slot>Кнопка</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VButton',
}
</script>

<style lang="scss" scoped>
.button {
  @extend .cb_center;

  border-style: solid;
  border-radius: 8px;
}
</style>