<template>
  <div class="course">
    <course-cover v-if="course.id" class="course__cover" :course="course" />

    <div class="course__lessons">
      <div v-for="(item, index) in lessonList" :key="index">
        <card-mini-lesson
          class="mb-30px"
          :class="[
            { 'ml-22px': (index - 1) % 4 === 0 },
            { 'ml-22px mr-22px': (index - 1) % 2 === 0 }
          ]"
          :lesson="item"
          @click="selectedLesson = item"
        />
      </div>
    </div>

    <popular-courses v-if="course.id" class="course__popular" :courseList="courseList" />

    <block-subscribe class="course__subscribe" />

    <popup-player
      v-if="selectedLesson.id"
      :lesson="selectedLesson"
      @close="selectedLesson = {}"
      @clickLeft="setLesson('decrement')"
      @clickRight="setLesson('increment')"
    />
  </div>
</template>

<script>
// Components
import PopupPlayer from '@/components/pageCourse/PopupPlayer';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import CardMiniLesson from '@/components/cards/CardMiniLesson';
import CourseCover from '@/components/pageCourse/Cover';
import PopularCourses from '@/components/pageCourse/PopularCourses';

// Services
import apiCourses from '@/services/courses.js';
import apiLessons from '@/services/lessons.js';

export default {
  name: 'Course',
  components: {
    PopupPlayer,
    BlockSubscribe,
    CardMiniLesson,
    CourseCover,
    PopularCourses
  },
  data() {
    return {
      lessonList: [],
      courseList: [],
      course: {},
      selectedLesson: {}
    };
  },
  watch: {
    '$route.query.id': {
      handler() {
        this.getLessons();
        this.getCourse();
        this.getPopularCourseList();
      }
    }
  },
  created() {
    this.getLessons();
    this.getCourse();
    this.getPopularCourseList();
  },
  methods: {
    async getLessons() {
      this.lessonList = await apiLessons.getLessons({ courseId: this.$route.query.id });
    },
    async getCourse() {
      this.course = await apiCourses.getCourse({ id: this.$route.query.id });
    },
    async getPopularCourseList() {
      this.courseList = await apiCourses.getPopularCourseList({ id: this.$route.query.id });
    },
    setLesson(operator) {
      let index = this.lessonList.indexOf(this.selectedLesson);
      const lastIndex = this.lessonList.length - 1;

      if (operator === 'increment') index++;
      if (operator === 'decrement') index--;

      if (index > lastIndex) index = 0;
      if (index < 0) index = lastIndex;

      this.selectedLesson = this.lessonList[index];
    }
  }
};
</script>

<style lang="scss" scoped>
.course {
  background: #f4f4f4;

  &__lessons {
    width: 1160px;
    min-height: 710px;
    margin-top: 87px;

    display: flex;
    flex-wrap: wrap;

    padding-bottom: 70px;
    border-bottom: 1px solid $color-silver;
  }

  &__popular {
    margin-top: 80px;
  }

  &__subscribe {
    margin-top: 110px;
  }
}
</style>