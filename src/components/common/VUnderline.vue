<template>
  <div class="underline">
    <slot>Подчеркнутый текст</slot>
    <div class="underline__line" />
  </div>
</template>

<script>
export default {
  name: 'VUnderline'
};
</script>

<style lang="scss" scoped>
.underline {
  position: relative;
  color: $color-blue;
  width: fit-content;

  &__line {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: $color-blue;
  }
}

// hovers
:hover.underline {
  cursor: pointer;
  color: $color-black;

  .underline__line {
    background: $color-black;
  }
}
</style>