<template>
  <div class="card">
    <div class="card__poster" />

    <div class="card__main" @click="$emit('click')">
      <h2 class="card__course-title">
        {{ lesson.courseTitle }}
      </h2>

      <h1 class="card__title">
        {{ lesson.title }}
      </h1>

      <div class="card__attributes">
        <div class="card__attributes-item" style="width: 170px">
          <v-icon class="card__icon-attributes" path="img/timer.svg" />
          {{ lesson.time }}
        </div>

        <div class="card__attributes-item" style="width: 130px">
          <v-icon class="card__icon-attributes" path="img/openEye.svg" />
          {{ lesson.views }}>
        </div>
      </div>
    </div>

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
  name: 'VLessonCard',
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
          // Название курса
          courseTitle: 'Название курса',
          // Длительность по времени
          time: '15 м.',
          // Количество просмотров  видео
          views: '300',
          // Список id юзеров, лайкнувших урок
          likes: [],
          // Название курса(коллекции в бд)
          courseName: ''
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
  width: 367px;

  &__poster {
    height: 240px;

    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column;
    height: 226px;

    padding: 21px 27px 27px 27px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 0px 0px 8px 8px;
  }

  &__course-title {
    width: 200px;
    font-family: 'EuclidCircular';
    font-size: 15px;
    line-height: 20px;
    color: #b1b8c6;
  }

  &__title {
    width: 314px;
    height: 95px;
    margin-top: 15px;

    font-family: 'Circe';
    font-size: 26px;
    line-height: 31px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
  }

  &__attributes {
    @extend .flex_row-center-between;
    margin-top: 15px;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 12px;
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
    width: 18px;
    height: 18px;
    margin-right: 7px;

    fill: #3a3f4f;
  }

  &-heart {
    @extend .flex_row-center-center;
    position: absolute;
    width: 26px;
    height: 23px;

    top: 20px;
    right: 20px;
    cursor: pointer;

    stroke: $color-white;
  }
}
</style>