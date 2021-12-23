<template>
  <div class="popup">
    <div class="popup__player">
      <iframe
        class="popup__screen"
        :src="lesson.video"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      />

      <div class="popup__footer">
        <div class="popup__footer-titles">
          <div class="popup__lesson-number">Урок №{{ lesson.number }}</div>
          <h1 class="popup__title">{{ lesson.title }}</h1>
        </div>

        <div class="popup__footer-buttons">
          <v-icon class="popup__icon-heart" path="img/heart.svg" width="16px" height="14px" />
          <v-button class="popup__button">
            <a :href="lesson.video" target="_blank">Смотреть на YouTube</a>
          </v-button>
        </div>
      </div>

      <!-- Внешние кнопки -->
      <v-icon class="popup__icon-close" path="img/close.svg" @click.native.stop="$emit('close')" />
      <v-icon
        class="popup__icon-bracket-left"
        path="img/angleBracketPopup.svg"
        @click.native.stop="$emit('clickLeft')"
      />
      <v-icon
        class="popup__icon-bracket-right"
        path="img/angleBracketPopup.svg"
        @click.native.stop="$emit('clickRight')"
      />
      <!-- Внешние кнопки -->
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'PopupPlayer',
  components: {
    VIcon,
    VButton
  },
  props: {
    // Информация о уроке
    lesson: {
      type: Object,
      default: () => {
        return {
          // Id урока
          id: '',
          // Название урока
          title: 'Название урока',
          // Номер урока
          number: '1',
          // Длительность по времени
          time: '15 м.',
          // Количество просмотров  видео
          views: '300',
          // Список id юзеров, лайкнувших урок
          likes: [],
          // Название курса(коллекции в бд)
          courseName: '',
          // Ссылка на изображение постера
          image: '',
          // Ссылка на видео
          video: ''
        };
      }
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

  &__player {
    position: relative;
    width: 1022px;
    height: 660px;

    padding: 35px;

    background: $color-white;
    border-radius: 8px;
  }

  &__screen {
    width: 952px;
    height: 498px;

    background: #202020;
  }

  &__footer {
    @extend .flex_row-center-between;
    margin-top: 29px;
  }

  &__footer-titles {
    @extend .flex_column;
  }

  &__footer-buttons {
    @extend .flex_row;
  }

  &__lesson-number {
    font-family: 'Circe';
    font-size: 17px;
    color: $color-blue;
  }

  &__title {
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 24px;
    line-height: 19px;
    color: #3a3f4f;
  }

  &__button {
    width: 206px;
    height: 53px;
    margin-left: 8px;

    font-family: 'Circe';
    font-size: 15px;
    color: $color-white;
    border: none;
    background: $color-pink;
  }
}

// icons
.popup__icon {
  &-heart {
    @extend .flex_row-center-center;
    width: 53px;
    height: 53px;

    border: 0.8px solid #dedede;
    border-radius: 8px;

    fill: transparent;
    stroke: #dedede;
  }

  &-close {
    position: absolute;
    width: 33px;
    height: 33px;

    top: -60px;
    right: 0px;
    cursor: pointer;
    stroke: $color-white;
  }

  &-bracket-left,
  &-bracket-right {
    position: absolute;
    width: 20px;
    height: 38px;

    top: 320px;
    cursor: pointer;
    stroke: $color-white;
  }

  &-bracket-left {
    left: -80px;
    transform: rotate(180deg);
  }

  &-bracket-right {
    right: -80px;
    transform: rotate(0deg);
  }
}
</style>