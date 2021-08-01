<template>
  <div class="courses__wrap">
    <div class="courses">
      <h1 class="courses__title">
        Все видеокурсы
      </h1>

      <div class="courses__filters">
        <div
          v-for="(item, index) in filterList"
          :key="index"
          class="courses__filter"
          :class="{ courses__filter_active: filterTag === item.tag }"
          @click="(filterTag = item.tag), getCourses()"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="courses__list">
        <div v-for="(item, index) in courseList" :key="index">
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
import VCourseCard from '@/components/common/VCourseCard.vue';
import BlockRegistration from '@/components/blocks/BlockRegistration.vue';

export default {
  name: 'Courses',
  components: {
    BlockRegistration,
    VCourseCard
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
    }
  },

  created() {
    this.getCourses();
    this.getFilters();
  },
  methods: {
    getCourses() {
      this.axios.get(`/courses?tag=${this.filterTag}`).then((response) => {
        this.courseList = response.data;
      });
    },

    getFilters() {
      this.axios.get('/filters/courses').then((response) => {
        this.filterList = response.data;
      });
    }
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
    @extend .flex_row-center-between;
    width: 1000px;
    height: 50px;
    margin-top: 30px;
  }

  &__filter {
    @extend .flex_row-center-center;
    font-family: 'Circe';
    font-size: 18px;
    color: $color-black;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  }
}

// actives
.courses {
  &__filter_active {
    color: $color-white;
    background: $color-blue;
  }
}

// hovers
:hover.courses {
  &__filter {
    cursor: pointer;
    color: $color-white;
    background: $color-blue;
  }
}
</style>