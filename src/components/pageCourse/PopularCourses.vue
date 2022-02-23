<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">Также стоит посмотреть</h1>

      <div class="popular__courses">
        <card-course
          v-for="(item, index) in courseList"
          :key="index"
          :course="item"
          @click="openCourse(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import CardCourse from '@/components/cards/CardCourse';

export default {
  name: 'PopularCourses',
  components: {
    CardCourse
  },
  props: {
    courseList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openCourse(id) {
      this.$router.push(`/course?id=${id}`);
      // location.reload();
    }
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