<template>
  <div class="button-wrap">
    <button class="button" @click="$emit('click')">
      <icon-premium />
      Премиум
    </button>
  </div>
</template>

<script>
import IconPremium from '@/icons/IconPremium.vue'

export default {
  name: 'VPremiumButton',
  components: {IconPremium},
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
  width: 168px;
  height: 60px;

  padding-left: 30px;
  padding-right: 30px;

  font-family: 'Circe';
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #EE3465;
  border-radius: 8px;
  border: none;
}


</style>
