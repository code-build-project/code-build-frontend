<template>
  <div class="auth-layout">
    <router-view class="auth-layout__form"/>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.auth-layout {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    width: 490px;
    height: 735px;

    border: 2px solid #256CFE;
    border-radius: 8px;

    padding: 58px 70px 58px 70px;
    box-sizing: border-box;
  }
}
</style>