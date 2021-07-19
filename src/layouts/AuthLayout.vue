<template>
  <div class="auth">
    <router-view class="auth__form" />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style lang="scss" scoped>
.auth {
  @extend .flex_row-center-center;
  height: 100%;

  &__form {
    width: 490px;
    height: 735px;

    border: 2px solid #256cfe;
    border-radius: 8px;

    padding: 0px 58px 0px 58px;
    box-sizing: border-box;
  }
}
</style>