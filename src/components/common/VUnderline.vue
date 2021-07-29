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
  color: #256cfe;
  width: fit-content;

  &__line {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #256cfe;
  }
}

// hovers
:hover.underline {
  cursor: pointer;
  color: #272a37;

  .underline__line {
    background: #272a37;
  }
}
</style>