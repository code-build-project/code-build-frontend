<template>
  <div class="course__wrap">
    <course-cover />

    <div class="course">

    </div>
  </div>
</template>

<script>
import CourseCover from '@/components/CourseCover.vue'

export default {
  name: 'Course',
  components: {
    CourseCover
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
  width: 1160px;
  min-height: 1578px;

}
</style>
