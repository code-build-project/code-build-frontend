<template>
  <div class="course__wrap">
    <course-cover />

    <div class="course">
      <div class="course__lessons">
        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />

        <v-lesson-card class="cb_bottom30" />
        
      </div>

      <div class="course__useful">
        <div class="course__useful-title">
          Также стоит посмотреть
        </div>

        <div class="course__useful-courses">
          <v-course-card />

          <v-course-card />

          <v-course-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCover from '@/components/CourseCover.vue'
import VLessonCard from '@/components/common/VLessonCard.vue'
import VCourseCard from '@/components/common/VCourseCard.vue'

export default {
  name: 'Course',
  components: {
    CourseCover,
    VLessonCard,
    VCourseCard
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.course__wrap {
  background: #f4f4f4;
}

.course {
  @extend .cb_column;
  width: 1160px;
  min-height: 1578px;

  padding: 109px 0px 110px 0px;
  box-sizing: border-box;

  &__lessons {
    min-height: 710px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__useful {
    margin-top: 100px;
  }

  &__useful-title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272A37;
  }

  &__useful-courses {
    @extend .cb_row-between;
    margin-top: 50px;
  }
}
</style>
