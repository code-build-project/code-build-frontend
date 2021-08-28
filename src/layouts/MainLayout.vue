<template>
  <div class="layout">
    <Header />
    <router-view class="layout__content" />
    <Footer />
    
    <v-popup v-if="popup.isShow" :name="popup.name" />
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
import VPopup from '@/components/common/VPopup.vue';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
    VPopup
  },
  computed: {
    popup() {
      return this.$store.getters.getPopup;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  @extend .flex_column-between-center;
  height: 100%;

  &__content {
    @extend .flex_column-start-center;
    width: 100%;
  }
}
</style>