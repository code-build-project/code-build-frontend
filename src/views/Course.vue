<template>
  <div class="course">
    <block-course-cover class="course__cover" />

    <div class="course__lessons">
      <div v-for="(item, index) in lessonList" :key="index">
        <v-lesson-mini-card
          :id="item._id"
          class="mb-30px"
          :class="[
            { 'ml-22px': (index - 1) % 4 === 0 },
            { 'ml-22px mr-22px': (index - 1) % 2 === 0 }
          ]"
          :user-id="user.id"
          :title="item.title"
          :lesson-number="item.lessonNumber"
          :time="item.time"
          :views="item.views"
          :likes="item.likes"
          :course-name="item.courseName"
        />
      </div>
    </div>

    <block-popular-courses class="course__popular" />

    <block-subscribe class="course__subscribe" />
  </div>
</template>

<script>
// Components
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue';
import VLessonMiniCard from '@/components/common/VLessonMiniCard.vue';
import BlockCourseCover from '@/components/blocks/BlockCourseCover.vue';
import BlockPopularCourses from '@/components/blocks/BlockPopularCourses.vue';

// Services
import apiCourses from '@/services/courses.js';

export default {
  name: 'Course',
  components: {
    BlockSubscribe,
    VLessonMiniCard,
    BlockCourseCover,
    BlockPopularCourses
  },
  data() {
    return {
      lessonList: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user || {};
    }
  },
  created() {
    this.getLessons();
  },
  methods: {
    async getLessons() {
      this.lessonList = await apiCourses.getLessons({ courseName: this.$route.query.courseName });
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