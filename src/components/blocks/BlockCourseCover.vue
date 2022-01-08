<template>
  <div class="cover__wrap" :style="{ background: course.gradient }">
    <div class="cover">
      <div class="cover__header">
        <div class="cover__route">
          <div class="cover__route-item">
            Code build
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">
            Видеокурсы
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">{{ course.title }}</div>
        </div>

        <v-icon
          v-if="user.id"
          class="cover__icon-heart"
          path="img/heart.svg"
          :fill="isLike ? '#EE3465' : 'transparent'"
          @click="onLike()"
        />
      </div>

      <h1 class="cover__title">{{ course.title }}</h1>

      <h2 class="cover__subtitle">
        {{ course.subtitle }}
      </h2>

      <div class="cover__attributes">
        <div class="cover__attributes-item">
          <v-icon class="cover__icon-attribute" path="img/video.svg" />
          {{ course.lessons }}
        </div>

        <div class="cover__attributes-item ml-10px">
          <v-icon class="cover__icon-attribute" path="img/timer.svg" />
          {{ course.time }}
        </div>

        <div class="cover__attributes-item ml-10px">
          <v-icon class="cover__icon-attribute" path="img/openEye.svg" />
          {{ course.views }}
        </div>

        <div
          v-for="(tag, index) in course.tags"
          :key="index"
          class="cover__attributes-item ml-10px"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';

// Services
import apiCourses from '@/services/courses.js';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'BlockCourseCover',
  components: {
    VIcon
  },
  props: {
    course: {
      type: Object,
      default: () => {
        return {
          // Название курса
          title: '',
          // Подзаголовок курса
          subtitle: '',
          // Количество уроков в курсе
          lessons: '',
          // Количество времени всех уроков вместе
          time: '',
          // Количество просмотров данного курса
          views: '',
          // Список id юзеров, лайкнувших курс
          likes: []
        };
      }
    }
  },
  data() {
    return {
      isLike: false,
      user: storage.getUser('local')
    };
  },

  mounted() {
    this.isLike = this.course.likes.includes(this.user.id);
  },

  methods: {
    addLike(payload) {
      apiCourses.addLike(payload).then(() => {
        this.isLike = true;
      });
    },

    deleteLike(payload) {
      apiCourses.deleteLike(payload).then(() => {
        this.isLike = false;
      });
    },

    onLike() {
      const payload = {
        courseId: this.course.id
      };

      if (this.isLike) {
        this.deleteLike(payload);
      } else this.addLike(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.cover__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
}

.cover {
  @extend .flex_column;
  width: 1160px;
  height: 532px;
  padding: 85px 0px;

  &__header {
    @extend .flex_row-center-between;
  }

  &__route {
    @extend .flex_row;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: $color-white;
  }

  &__route-item {
    @extend .flex_row-center-center;
  }

  &__title {
    width: 900px;
    margin-top: 35px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 69px;
    letter-spacing: -1px;
    color: $color-white;
  }

  &__subtitle {
    flex: 1;
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: $color-white;
  }

  &__attributes {
    @extend .flex_row;
    margin-top: 30px;
  }

  &__attributes-item {
    @extend .flex_row-center-between;
    font-family: 'Circe';
    font-size: 18px;
    color: $color-white;

    padding: 17px 25px 17px 25px;

    border: 1px solid $color-white;
    border-radius: 9px;
  }
}

// icons
.cover__icon {
  &-arrow {
    width: 20px;
    height: 20px;
    margin-left: 20px;

    stroke: $color-white;
  }

  &-heart {
    @extend .flex_row-center-center;
    width: 18px;
    height: 16px;

    cursor: pointer;
    stroke: $color-white;
  }

  &-attribute {
    width: 22px;
    height: 22px;
    margin-right: 10px;

    fill: $color-white;
  }
}
</style>