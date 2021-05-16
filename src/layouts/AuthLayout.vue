<template>
  <div class="auth-layout">
    <router-view />
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
}
</style>