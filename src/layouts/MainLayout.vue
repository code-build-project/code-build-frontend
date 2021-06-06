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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>