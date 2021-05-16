<template>
  <div class="button-wrap">
    <button class="button" @click="$emit('click')">
      Начать учиться
      <icon-arrow fill="#256CFE" width="30px" height="30px" />
    </button>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'

export default {
  name: 'VButton',
  components: { IconArrow },
  props: {
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.button {
  width: 298px;
  height: 84px;

  padding-left: 47px;
  padding-right: 47px;

  font-family: 'Circe';
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  color: #256CFE;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  border: 2px solid #256CFE;
  border-radius: 8px;
}


</style>
