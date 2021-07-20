<template>
  <div class="layout">
    <router-view class="layout__form" />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
};
</script>

<style lang="scss" scoped>
.layout {
  @extend .flex_row-center-center;
  height: 100%;

  &__form {
    width: 490px;
    height: 735px;

    border: 2px solid $blue-color;
    border-radius: 8px;

    padding: 0px 58px 0px 58px;
    box-sizing: border-box;
  }
}
</style>