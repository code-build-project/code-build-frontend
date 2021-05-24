<template>
  <div class="header">
    <icon-logo class="header__logo" />

    <div class="header__nav">
      <span class="header__nav-item">О проекте</span>
      <span class="header__nav-item">Блог</span>
      <span class="header__nav-item">Видеокурсы</span>
    </div>

    <div class="header__buttons">
      <span class="header__button">Войти</span>
      <v-button 
        buttonType="header"
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

  components: { IconLogo, VButton },

  props: {},

  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.header {
  @extend .cb_row-between;
  width: 1160px;
  min-height: 120px;

  font-family: 'Circe';
  font-size: 18px;
  color: #15244B;

  &__nav {
    @extend .cb_row-between;
    width: 360px;
  }

  &__buttons {
    @extend .cb_row-between;

    width: 290px;
    color: #EE3465;
  }
}

// hovers
:hover.header {
  &__logo {
    cursor: pointer;
    
    ::v-deep {
      path {
        fill: #FFFFFF;
      }

      rect {
        fill: #256CFE;
      }
    }
  }

  &__nav-item {
    cursor: pointer;
    color: #256CFE;
  }

  &__button {
    cursor: pointer;
    color: #15244B;
  }
}
</style>
