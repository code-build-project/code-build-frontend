<template>
  <div class="header">
    <icon-logo
      class="header__logo"
      @click.native="$router.push('/')"
    />

    <div class="header__nav">
      <router-link
        class="header__nav-item"
        to="/"
      >
        О проекте
      </router-link>
      <router-link
        class="header__nav-item"
        to="/course"
      >
        Блог
      </router-link>
      <router-link
        class="header__nav-item"
        to="/courses"
      >
        Видеокурсы
      </router-link>
    </div>

    <div class="header__buttons">
      <router-link
        class="header__button"
        to="/auth"
        target="_blank"
      >
        Войти
      </router-link>
      <v-button 
        button-type="header"
        icon-position="left"
        icon-width="21"
        icon-height="21"
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