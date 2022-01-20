<template>
  <div
    class="icon"
    @click.stop="$emit('click')"
    @mousedown.stop="$emit('mousedown')"
    @mouseup.stop="$emit('mouseup')"
  >
    <svg v-if="format === 'svg'" class="icon__svg" :style="{ width, height, fill, stroke }">
      <use :xlink:href="path + '#' + name" />
    </svg>

    <img v-else class="icon__img" :src="path" />
  </div>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    // Путь к иконке
    path: {
      type: String,
      required: true
    },
    // Ширина иконки
    width: {
      type: String,
      default: '100%'
    },
    // Высота иконки
    height: {
      type: String,
      default: '100%'
    },
    // Цвет фона иконки
    fill: {
      type: String,
      default: ''
    },
    // Цвет границ иконки
    stroke: {
      type: String,
      default: ''
    }
  },
  computed: {
    // Получение названия иконки
    name() {
      return this.path.substring(this.path.indexOf('/') + 1, this.path.lastIndexOf('.'));
    },

    // Получение формата иконки
    format() {
      return this.path.substring(this.path.lastIndexOf('.') + 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: flex;

  &__img {
    width: inherit;
    height: inherit;
  }
}
</style>