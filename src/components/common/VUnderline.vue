<template>
  <div class="underline">
    <slot>Подчеркнутый текст</slot> 
    <div class="underline__line" />
  </div>
</template>

<script>
export default {
  name: 'VUnderline',

  props: {

  }
}
</script>

<style lang="scss" scoped>
.underline {
  position: relative;
  color: #256CFE;

  &__line {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #256CFE;
  }
}

// hovers
:hover.underline {
  cursor: pointer;
  color: #272A37;

  .underline__line {
    background: #272A37;
  }
}
</style>