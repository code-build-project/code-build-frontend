<template>
  <div class="courses__wrap">
    <div class="courses">
      <div class="courses__title">Все видеокурсы</div>

      <div class="courses__filter cb_top30">
        <div
          v-for="(item, index) in filterList"
          :key="index"
          class="courses__filter-item"
          :class="{ 'courses_filter-active': filterTag === item.tag }"
          @click="(filterTag = item.tag), getCourses()"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="courses__list cb_top60">
        <div v-for="(item, index) in courseList" :key="index">
          <v-course-card
            class="cb_bottom30"
            :class="{ 'cb_left29 cb_right29': (index - 1) % 3 === 0 }"
            :id="item._id"
            :userId="user.id"
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

    <block-registration />
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
    },
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
  },

  created() {
    this.getCourses();
    this.getFilters();
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
    line-height: 44px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__filter {
    @extend .cb_row-between;
    width: 1000px;
    height: 50px;
  }

  &__filter-item {
    @extend .cb_center;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 18px;
    color: #272a37;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  &__list {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
}

// Модификаторы
.courses {
  &_filter-active {
    color: #ffffff;
    background: #256cfe;
  }
}

// hovers
:hover.courses {
  &__filter-item {
    cursor: pointer;
    color: #ffffff;
    background: #256cfe;
  }
}
</style>