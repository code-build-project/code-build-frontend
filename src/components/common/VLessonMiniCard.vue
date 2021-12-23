<template>
  <div class="card" @click="$emit('click')" >
    <img class="card__poster" alt="" :src="lesson.image" />

    <main class="card__main">
      <div class="card__lesson-number">Урок №{{ lesson.number }}</div>

      <h1 class="card__title">
        {{ lesson.title }}
      </h1>

      <div class="card__attributes">
        <div class="card__attributes-item" style="width: 126px">
          <v-icon class="card__icon-attributes" path="img/timer.svg" />
          {{ lesson.time }}
        </div>

        <div class="card__attributes-item" style="width: 96px">
          <v-icon class="card__icon-attributes" path="img/openEye.svg" />
          {{ lesson.views }}
        </div>
      </div>
    </main>

    <v-icon
      v-if="userId"
      class="card__icon-heart"
      path="img/heart.svg"
      :fill="isLike ? '#EE3465' : 'transparent'"
      @click="onLike()"
    />
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';

// Services
import apiLessons from '@/services/lessons.js';

export default {
  name: 'VLessonMiniCard',
  components: {
    VIcon
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
          image: ''
        };
      }
    },
    // Id юзера
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLike: this.lesson.likes.includes(this.userId)
    };
  },

  methods: {
    addLike(payload) {
      apiLessons.addLike(payload).then(() => {
        this.isLike = true;
      });
    },

    deleteLike(payload) {
      apiLessons.deleteLike(payload).then(() => {
        this.isLike = false;
      });
    },

    onLike() {
      const payload = {
        lessonId: this.lesson.id,
        userId: this.userId,
        courseName: this.lesson.courseName
      };

      if (this.isLike) {
        this.deleteLike(payload);
      } else this.addLike(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 268px;
  height: 338px;

  &__poster {
    width: 268px;
    height: 181px;
    margin-bottom: -4px;
    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column-between-center;
    align-items: stretch;

    width: 268px;
    height: 157px;

    padding: 17px;

    background: $color-white;
    border-radius: 0px 0px 8px 8px;
  }

  &__lesson-number {
    cursor: pointer;

    font-family: 'Circe';
    font-size: 15px;
    color: $color-blue;
  }

  &__title {
    width: 200px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 21px;
    color: #3a3f4f;
  }

  &__attributes {
    @extend .flex_row-center-between;

    font-family: 'Circe';
    font-size: 14px;
    color: #3a3f4f;
  }

  &__attributes-item {
    @extend .flex_row-center-center;
    height: 40px;

    border: 1px solid #ededed;
    border-radius: 7px;
  }
}

// icons
.card__icon {
  &-attributes {
    width: 15px;
    height: 15px;
    margin-right: 5px;

    fill: #3a3f4f;
  }

  &-heart {
    @extend .flex_row-center-center;
    position: absolute;
    width: 18px;
    height: 16px;

    top: 19px;
    right: 19px;
    cursor: pointer;

    stroke: $color-white;
  }
}
</style>