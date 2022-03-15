<template>
  <div class="popup">
    <div class="popup__form">
      <v-icon class="popup__icon-close" path="img/close.svg" @click.native.stop="$emit('close')" />

      <h2 class="popup__title">Опачки!</h2>

      <p class="popup__text">
        На данный момент сервис не имеет платного контента.<br />
        Вы можете получить доступ ко всем ресурсам после авторизации.
      </p>

      <v-button class="popup__button" type="normal" @click="$emit('close')"> Понятно </v-button>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'PopupSubscribe',
  components: {
    VIcon,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.popup {
  @extend .flex_row-center-center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(18px);

  &__form {
    @extend .flex_column;
    position: relative;
    width: 488px;
    height: 600px;

    padding: 70px 64px;

    background: $color-white;
    border-radius: 8px;
  }

  &__title {
    margin-top: 15px;
    font-family: 'ObjectSans';
    font-size: 34px;
    color: $color-black;
  }

  &__text {
    margin-top: 40px;
    font-family: 'Circe';
    font-size: 25px;
    line-height: 33px;

    color: $color-black;
  }

  &__button {
    margin-top: auto;
    height: 80px;
    font-size: 24px;
    border: 2px solid $color-pink;
  }
}

// icons
.popup__icon {
  &-close {
    position: absolute;
    width: 23px;
    height: 23px;

    top: 35px;
    right: 35px;
    cursor: pointer;
    stroke: $color-gray;
  }
}

// hovers
:hover.popup {
  &__button {
    color: $color-white;
    background: $color-pink;
  }
}
</style>