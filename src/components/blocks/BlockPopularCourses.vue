<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">
        Также стоит посмотреть
      </h1>

      <div class="popular__courses">
        <v-course-card />
        <v-course-card />
        <v-course-card />
      </div>
    </div>
  </div>
</template>

<script>
import VCourseCard from '@/components/common/VCourseCard.vue';

export default {
  name: 'BlockPopularCourses',
  components: {
    VCourseCard
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