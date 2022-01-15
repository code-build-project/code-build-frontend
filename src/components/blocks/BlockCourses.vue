<template>
  <div class="courses__wrap">
    <div class="courses">
      <!-- Левая часть -->
      <div class="courses__main">
        <v-icon class="courses__icon-play" path="img/play.svg" width="24" height="26" />

        <h1 class="courses__title">
          В нашем сервисе большинство курсов являются полностью бесплатными
        </h1>

        <h2 class="courses__subtitle">
          Вы можете приступить к изучению как платных, так и бесплатных курсов прямо сейчас
        </h2>

        <v-button class="courses__button" @click="$router.push('/courses')">
          Все курсы
          <v-icon class="courses__icon-arrow" path="img/arrow.svg" />
        </v-button>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="courses__cards">
        <div class="flex_column">
          <v-course-mini-card
            class="mt-70px"
            :course="courseList[0]"
            @click="$router.push(`/course?id=${courseList[0].id}`)"
          />
          <v-course-mini-card
            class="mt-35px"
            :course="courseList[1]"
            @click="$router.push(`/course?id=${courseList[1].id}`)"
          />
        </div>

        <div class="flex_column ml-30px">
          <v-course-mini-card
            fire
            :course="courseList[2]"
            @click="$router.push(`/course?id=${courseList[2].id}`)"
          />
          <v-course-mini-card
            class="mt-35px"
            level="Intermediate"
            :course="courseList[3]"
            @click="$router.push(`/course?id=${courseList[3].id}`)"
          />
        </div>
      </div>
      <!-- Правая часть -->
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';
import VCourseMiniCard from '@/components/common/VCourseMiniCard.vue';

// Services
import apiCourses from '@/services/courses.js';

export default {
  name: 'BlockCourses',
  components: {
    VIcon,
    VButton,
    VCourseMiniCard
  },
  data() {
    return {
      courseList: []
    };
  },
  methods: {
    async getCourses() {
      this.courseList = await apiCourses.getCoursesList();
    }
  },
  created() {
    this.getCourses();
  }
};
</script>

<style lang="scss" scoped>
.courses__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: #17191f;
}

.courses {
  @extend .flex_row-center-between;
  width: 1160px;
  height: 1045px;

  &__title {
    width: 450px;
    margin-top: 65px;

    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: $color-white;

    &:after {
      content: 'FREE';

      position: absolute;
      width: 56px;
      height: 29px;

      background: $color-pink;
      border-radius: 5px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 11px;
      line-height: 24px;
      color: $color-white;

      margin-top: 15px;
      margin-left: 10px;
    }
  }

  &__subtitle {
    width: 340px;
    margin-top: 35px;

    font-family: 'Circe';
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
    color: #43485e;
  }

  &__button {
    width: 200px;
    height: 60px;
    margin-top: 70px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: $color-white;
    border: 1px solid $color-blue;
    background: transparent;
  }
}

// flex containers
.courses {
  &__main {
    @extend .flex_column;
  }

  &__cards {
    @extend .flex_row;
  }
}

// icons
.courses__icon {
  &-play {
    @extend .flex_row-center-center;
    width: 90px;
    height: 90px;

    border: 2px solid $color-black;
    border-radius: 20px;
  }

  &-arrow {
    width: 24px;
    height: 24px;

    margin-top: 3px;
    margin-left: 9px;
    stroke: $color-white;
  }
}

// hovers
:hover.courses {
  &__button {
    background-color: $color-blue;
  }
}
</style>