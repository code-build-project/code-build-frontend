<template>
  <div class="courses__wrap">
    <div class="courses">
      <h1 class="courses__title">Все видеокурсы</h1>

      <v-filter-group
        v-model="filterId"
        class="courses__filters"
        :array="filterList"
        @change="getCourses()"
      />

      <div class="courses__list">
        <div v-for="(item, index) in courseList" :key="index">
          <v-course-card
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :user-id="user.id"
            :course="item"
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
      filterId: '',

      filterList: [],
      courseList: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user || {};
    }
  },
  methods: {
    async getCourses() {
      this.courseList = await apiCourses.getCoursesList({ tag: this.filterId });
    }
  },
  created() {
    this.filterList = apiCourses.getFilters();
    this.getCourses();
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