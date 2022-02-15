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

    <v-like
      v-if="user.id"
      class="card__icon-heart"
      :isLike="lesson.isLike"
      @click="onLike()"
    />
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VLike from '@/components/common/VLike.vue';

// Services
import apiLikes from '@/services/likes.js';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'VLessonCard',
  components: {
    VIcon,
    VLike
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
          courseId: '',
          // Флаг лайка
          isLike: false
        };
      }
    }
  },
  data() {
    return {
      user: storage.getUser('local')
    };
  },
  methods: {
    addLike(payload) {
      apiLikes.addLike(payload).then(() => {
        this.lesson.isLike = true;
      });
    },

    deleteLike(payload) {
      apiLikes.deleteLike(payload).then(() => {
        this.lesson.isLike = false;
      });
    },

    onLike() {
      const payload = {
        id: this.lesson.id,
        field: 'lessons'
      };

      if (this.lesson.isLike) {
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
  transition: all 0.4s ease;

  &__poster {
    height: 240px;

    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column;
    height: 226px;

    padding: 21px 27px 27px 27px;

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
    position: absolute;
    width: 26px;
    height: 23px;

    top: 20px;
    right: 20px;
  }
}

// hovers
:hover.card {
  cursor: pointer;
  transform: scale(1.03);
}
</style>