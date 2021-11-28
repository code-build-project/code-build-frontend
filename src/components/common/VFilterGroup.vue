<template>
  <div class="filters">
    <div
      v-for="(item, index) in array"
      :key="index"
      class="filters__item"
      :class="{ filters__item_active: value === item.tag }"
      @click="changeFilter(item.tag)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFilterGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    array: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeFilter(tag) {
      this.$emit('change', tag);
    }
  }
};
</script>

<style lang="scss" scoped>
.filters {
  @extend .flex_row-center-between;
  height: 50px;

  &__item {
    @extend .flex_row-center-center;
    font-family: 'Circe';
    font-size: 18px;
    color: $color-black;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }
}

// active
.filters__item_active {
  color: $color-white;
  background: $color-blue;
}

// hovers
:hover.filters__item {
  cursor: pointer;
  color: $color-white;
  background: $color-blue;
}
</style>