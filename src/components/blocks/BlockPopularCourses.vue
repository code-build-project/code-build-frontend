<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">Также стоит посмотреть</h1>

      <div class="popular__courses">
        <v-course-card
          v-for="(item, index) in courseList"
          :key="index"
          :course="item"
          @click="$router.push(`/course?courseName=${item.courseName}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VCourseCard from '@/components/common/VCourseCard.vue';

// Services
import apiCourses from '@/services/courses.js';

export default {
  name: 'BlockPopularCourses',
  components: {
    VCourseCard
  },
  props: {
    courseId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      courseList: []
    };
  },
  methods: {
    async getPopularCourseList() {
      this.courseList = await apiCourses.getPopularCourseList({ id: this.courseId });
    }
  },
  created() {
    this.getPopularCourseList();
  }
};
</script>

<style lang="scss" scoped>
.popular__wrap {
  @extend .flex_row-center-center;
  width: 100%;
}

.popular {
  @extend .flex_column;
  width: 1160px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
  }

  &__courses {
    @extend .flex_row-center-between;
    margin-top: 50px;
  }
}
</style>