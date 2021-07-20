<template>
  <button class="button" @click="$emit('click')">
    <slot>Кнопка</slot>
  </button>
</template>

<script>
export default {
  name: 'VButton'
};
</script>

<style lang="scss" scoped>
.button {
  @extend .flex_row-center-center;
  border-style: solid;
  border-radius: 8px;
}
</style>