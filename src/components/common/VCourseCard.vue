<template>
  <div class="card" @click="$emit('click')">
    <img class="card__poster" alt="" :src="course.image" />

    <main class="card__main">
      <div class="card__level">
        <span class="mr-5px">Сложность</span>

        <div
          v-for="item in [1, 2, 3, 4, 5]"
          :key="item"
          class="card__level-circle"
          :style="{ background: course.level >= item ? '#EE3465' : '#EDEDED' }"
        />
      </div>

      <h1 class="card__title">
        {{ course.title }}
      </h1>

      <div class="card__attributes">
        <div class="card__attributes-item" style="width: 112px">
          <v-icon class="card__icon-attributes" path="img/video.svg" />
          {{ course.lessons }}
        </div>

        <div class="card__attributes-item" style="width: 103px">
          <v-icon class="card__icon-attributes" path="img/timer.svg" />
          {{ course.time }}
        </div>

        <div class="card__attributes-item" style="width: 80px">
          <v-icon class="card__icon-attributes" path="img/openEye.svg" />
          {{ course.views }}
        </div>
      </div>
    </main>

    <v-icon
      v-if="user.id"
      class="card__icon-heart"
      path="img/heart.svg"
      :fill="course.isLike ? '#EE3465' : 'transparent'"
      @click="onLike()"
    />
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';

// Services
import apiLikes from '@/services/likes.js';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'VCourseCard',
  components: {
    VIcon
  },
  props: {
    // Информация о курсе
    course: {
      type: Object,
      default: () => {
        return {
          // Id курса
          id: '',
          // Название курса
          title: 'Название курса',
          // Уровень сложности
          level: '1',
          // Количество уроков
          lessons: '6 уроков',
          // Общее время курса
          time: '1 ч. 25 м.',
          // Количество просмотров курса
          views: '300',
          // Список id юзеров, лайкнувших курс
          likes: [],
          // Постер
          image: '',
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
        this.course.isLike = true;
      });
    },

    deleteLike(payload) {
      apiLikes.deleteLike(payload).then(() => {
        this.course.isLike = false;
      });
    },

    onLike() {
      const payload = {
        id: this.course.id,
        field: 'courses'
      };

      if (this.course.isLike) {
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
    width: 100%;
    height: 240px;
    margin-bottom: -4px;
    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column;
    height: 226px;

    padding: 21px 27px 27px 27px;

    background: $color-white;
    border-radius: 0px 0px 8px 8px;
  }

  &__level {
    @extend .flex_row-center;

    font-family: 'EuclidCircular';
    font-size: 15px;
    color: #3a3f4f;
  }

  &__level-circle {
    width: 8px;
    height: 8px;
    margin-left: 2px;
    border-radius: 4px;
  }

  &__title {
    width: 300px;
    height: 72px;
    margin-top: 15px;

    font-family: 'Circe';
    font-size: 26px;
    line-height: 35px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
  }

  &__attributes {
    @extend .flex_row-center-between;
    margin-top: 35px;

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
    width: 18px;
    height: 18px;
    margin-right: 8px;

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

// hovers
:hover.card {
  cursor: pointer;
  transform: scale(1.03);
}
</style>