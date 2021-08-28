<template>
  <div class="popup"></div>
</template>

<script>
// import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'UpReview',
  components: {
    // VIcon,
  }
};
</script>

<style lang="scss" scoped>
.popup {
  @extend .flex_row-center-center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
}

// icons
.popup__icon {
}
</style>