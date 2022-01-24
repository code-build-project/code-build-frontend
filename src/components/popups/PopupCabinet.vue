<template>
  <div class="popup">
    <div class="popup__form">
      <v-icon class="popup__icon-close" path="img/close.svg" @click="$emit('close')" />

      <h2 class="popup__title">Сохранить внесенные изменения?</h2>

      <div class="popup__button-group">
        <v-button
          class="popup__button popup__button-1"
          :isLoaded="isPageLoaded"
          type="active"
          @click="save()"
        >
          Сохранить
        </v-button>
        <v-button
          class="popup__button popup__button-2"
          @click="$emit('close')"
        >
          Отмена
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

// Services
import apiUsers from '@/services/users.js';

export default {
  name: 'PopupCabinet',
  components: {
    VIcon,
    VButton
  },
  props: {
    newName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isPageLoaded: true
    };
  },
  methods: {
    async save() {
      this.isPageLoaded = false;
      await apiUsers.changeUserName({ name: this.newName });
      this.isPageLoaded = true;
    }
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
    width: 368px;
    height: 380px;

    padding: 40px;

    background: $color-white;
    border-radius: 6px;
  }

  &__title {
    margin-top: 10px;
    font-family: 'ObjectSans';
    font-size: 22px;
    color: #272a37;
  }

  &__button-group {
    @extend .flex_row;
    margin-top: auto;
  }

  &__button {
    padding: 15px 0px;
    height: 50px;
    font-size: 18px;
  }

  &__button-1 {
    width: 130px;
  }

  &__button-2 {
    width: 100px;
    margin-left: 25px;
    border: 1px solid $color-pink;
  }
}

// icons
.popup__icon {
  &-close {
    position: absolute;
    width: 18px;
    height: 18px;

    top: 20px;
    right: 20px;
    cursor: pointer;
    stroke: $color-gray;
  }
}

// hovers
:hover.popup {
  &__button-1 {
    box-shadow: 0px 12px 18px -13px $color-pink;
  }

  &__button-2 {
    color: $color-white;
    background: $color-pink;
  }
}
</style>