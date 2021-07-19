<template>
  <div class="main">
    <Header />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
  @extend .flex_column-between-center;
  height: 100%;
}

.content {
  @extend .flex_column-start-center;
  width: 100%;
}
</style>