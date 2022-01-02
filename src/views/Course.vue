<template>
  <div class="course">
    <block-course-cover class="course__cover" :course="course" />

    <div class="course__lessons">
      <div v-for="(item, index) in lessonList" :key="index">
        <v-lesson-mini-card
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

    <block-popular-courses v-if="course.id" class="course__popular" :courseId="course.id" />

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
import PopupPlayer from '@/components/popups/PopupPlayer.vue';
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue';
import VLessonMiniCard from '@/components/common/VLessonMiniCard.vue';
import BlockCourseCover from '@/components/blocks/BlockCourseCover.vue';
import BlockPopularCourses from '@/components/blocks/BlockPopularCourses.vue';

// Services
import apiCourses from '@/services/courses.js';
import apiLessons from '@/services/lessons.js';

export default {
  name: 'Course',
  components: {
    PopupPlayer,
    BlockSubscribe,
    VLessonMiniCard,
    BlockCourseCover,
    BlockPopularCourses
  },
  data() {
    return {
      lessonList: [],
      course: {},
      selectedLesson: {}
    };
  },
  created() {
    this.getLessons();
    this.getCourse();
  },
  methods: {
    async getLessons() {
      this.lessonList = await apiLessons.getLessons({ courseName: this.$route.query.courseName });
    },
    async getCourse() {
      this.course = await apiCourses.getCourse({ courseName: this.$route.query.courseName });
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