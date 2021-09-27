<template>
  <div class="courses__wrap">
    <div class="courses">
      <h1 class="courses__title">
        Все видеокурсы
      </h1>

      <v-filter-group v-model="filterTag" class="courses__filters" :array="filterList" />

      <div class="courses__list">
        <div v-for="(item, index) in filteredCourseList" :key="index">
          <v-course-card
            :id="item._id"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :user-id="user.id"
            :title="item.title"
            :level="item.level"
            :lessons="item.lessons"
            :time="item.time"
            :views="item.views"
            :likes="item.likes"
            @click="$router.push(`/course?courseName=${item.courseName}`)"
          />
        </div>
      </div>
    </div>

    <block-registration class="courses__reg" />
  </div>
</template>

<script>
// Components
import VCourseCard from '@/components/common/VCourseCard.vue';
import VFilterGroup from '@/components/common/VFilterGroup.vue';
import BlockRegistration from '@/components/blocks/BlockRegistration.vue';

// Services
import apiCourses from '@/services/courses.js';

export default {
  name: 'Courses',
  components: {
    VCourseCard,
    VFilterGroup,
    BlockRegistration
  },
  data() {
    return {
      filterTag: 'all',

      filterList: [],
      courseList: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user || {};
    },

    filteredCourseList() {
      return this.courseList.filter((item) => item.tags.includes(this.filterTag));
    }
  },
  async created() {
    this.filterList = await apiCourses.getFilters();

    this.courseList = await apiCourses.getCourses({ tag: this.filterTag });
  }
};
</script>

<style lang="scss" scoped>
.courses__wrap {
  background: #f4f4f4;
}

.courses {
  width: 1160px;
  min-height: 1840px;

  padding: 100px 0px 110px 0px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
  }

  &__filters {
    width: 1000px;
    margin-top: 30px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  }
}
</style>