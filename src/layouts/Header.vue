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
  @extend .header_row;
  width: 1160px;
  min-height: 120px;

  font-family: 'Circe';
  font-size: 18px;
  color: #15244B;

  &__nav {
    @extend .header_row;
    width: 360px;
  }

  &__buttons {
    @extend .header_row;

    width: 290px;
    color: #EE3465;
  }

  // общие классы
  &_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
