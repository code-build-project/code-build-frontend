<template>
  <a class="like">
    <v-icon
      class="like__icon"
      :class="'stroke-' + stroke"
      path="img/heart.svg"
      :fill="isLike ? '#EE3465' : 'transparent'"
      @click="$emit('click')"
    />
  </a>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VLike',

  components: {
    VIcon
  },

  props: {
    isLike: {
      type: Boolean,
      default: false
    },

    stroke: {
      type: String,
      default: 'primary'
    }
  },
};
</script>

<style lang="scss" scoped>
.like {
  display: flex;
  transition: all .1s ease;

  &:active {
    transform: scale(0.7);
  }
}

.like__icon {
  fill: transparent;
  cursor: pointer;
}

// Strokes
.stroke-primary {
  stroke: $color-white;
}

.stroke-secondary {
  stroke: #dedede;
}
</style>