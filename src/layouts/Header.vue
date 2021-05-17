<template>
  <div class="header">
    <icon-logo fill="#256CFE"/>

    <div class="header__nav">
      <span>О проекте</span>
      <span>Блог</span>
      <span>Видеокурсы</span>
    </div>

    <div class="header__buttons">
      <span>Войти</span>
      <v-button 
        fontSize="18"
        textColor="#FFFFFF"
        borderColor="#EE3465"
        borderWidth="0"
        backgroundColor="#EE3465"
        iconPosition="left"
        iconWidth="21"
        iconHeight="21"
      >
        Премиум
      </v-button>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Header',

  components: {IconLogo, VButton},

  props: {},

  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @include adaptiv-padding(380, 40);
  padding-bottom: 0 !important;
  padding-top: 0 !important;
  box-sizing: border-box;

  font-family: 'Circe';
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  color: #15244B;

  &__nav {
    // @include percent-width(360, 1160);
    width: 360px;

    display: flex;
    justify-content: space-between;
  }

  &__buttons {
    // @include percent-width(290, 1160);
    width: 290px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #EE3465;
  }
}
</style>
