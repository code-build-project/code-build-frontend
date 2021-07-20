<template>
  <div class="buttons">
    <router-link class="buttons__login" to="/auth" target="_blank"> Войти </router-link>

    <v-button class="buttons__subscribe" @click="$router.push('/subscribe')">
      <v-icon class="buttons__icon-premium" path="img/premium.svg" />
      Премиум
    </v-button>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'HeaderButtons',
  components: {
    VIcon,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.buttons {
  @extend .flex_row-center-center;

  &__login {
    font-family: 'Circe';
    font-size: 18px;
    color: $pink-color;
  }

  &__subscribe {
    width: 168px;
    height: 60px;
    margin-left: 45px;

    font-family: 'Circe';
    font-size: 18px;
    color: $white-color;
    border: none;
    background: $pink-color;
  }
}

// icons
.buttons__icon {
  &-premium {
    width: 21px;
    height: 21px;
    margin-right: 9px;

    fill: $white-color;
  }
}

// hovers
:hover.buttons {
  &__login {
    cursor: pointer;
    color: $black-color;
  }

  &__subscribe {
    box-shadow: 0px 12px 18px -13px #ee3465;
  }
}
</style>