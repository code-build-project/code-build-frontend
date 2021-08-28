<template>
  <div class="popup">
    <popup-review v-if="name === 'review'" />
    <popup-player v-if="name === 'player'" />
  </div>
</template>

<script>
import PopupReview from '@/components/popups/PopupReview.vue';
import PopupPlayer from '@/components/popups/PopupPlayer.vue';

export default {
  name: 'VPopup',
  components: {
    PopupReview,
    PopupPlayer
  },
  props: {
    // Название поп-апа
    name: {
      type: String,
      default: ''
    }
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
  z-index: 2;

  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);
}
</style>