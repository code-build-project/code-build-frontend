<template>
  <div class="favorites__wrap">
    <div class="favorites">
      <!-- Фильтры -->
      <div class="favorites__header">
        <h1 class="favorites__title">Избранное</h1>

        <div class="favorites__filters">
          <div
            v-for="(item, index) in filterList"
            :key="index"
            class="favorites__filter-item"
            :class="{ favorites__filter_active: filterId === item.filterId }"
            @click="changeFilter(item.filterId)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <!-- Фильтры -->

      <div class="favorites__list">
        <div v-for="(item, index) in itemList" :key="index">
          <v-course-card
            v-if="filterId === 1"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :course="item"
            @click="$router.push(`/course?courseName=${item.courseName}`)"
          />

          <v-lesson-card
            v-if="filterId === 2"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :lesson="item"
          />

          <v-article-card
            v-if="filterId === 3"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :article="item"
            @click="$router.push('/article')"
          />
        </div>
      </div>
    </div>

    <block-subscribe class="favorites__subscribe" />
  </div>
</template>

<script>
// Components
import VCourseCard from '@/components/common/VCourseCard.vue';
import VLessonCard from '@/components/common/VLessonCard.vue';
import VArticleCard from '@/components/common/VArticleCard.vue';
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue';

// Services
import apiCourses from '@/services/courses.js';
import apiLessons from '@/services/lessons.js';
import apiArticles from '@/services/articles.js';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'Favorites',
  components: {
    VCourseCard,
    VLessonCard,
    VArticleCard,
    BlockSubscribe
  },
  data() {
    return {
      filterId: 1,

      filterList: [
        {
          name: 'Курсы',
          filterId: 1
        },
        {
          name: 'Уроки',
          filterId: 2
        },
        {
          name: 'Статьи',
          filterId: 3
        }
      ],

      courseList: [],

      lessonList: [],

      articleList: [],
    };
  },
  computed: {
    itemList() {
      switch (this.filterId) {
        case 1:
          return this.courseList;
        case 2:
          return this.lessonList;
        case 3:
          return this.articleList;
        default:
          return this.courseList;
      }
    },
  },

  created() {
    this.getCourses();
  },

  methods: {
    changeFilter(filterId) {
      this.filterId = filterId;

      switch (this.filterId) {
        case 1:
          this.getCourses();
          break;
        case 2:
          this.getLessons();
          break;
        case 3:
          this.getArticles();
          break;
        default:
          break;
      }
    },

    async getCourses() {
      this.courseList = await apiCourses.getFavoriteCourseList();
    },

    async getLessons() {
      this.lessonList = await apiLessons.getFavoriteLessons();
    },

    async getArticles() {
      this.articleList = await apiArticles.getFavoriteArticles();
    }
  }
};
</script>

<style lang="scss" scoped>
.favorites__wrap {
  background: #f4f4f4;
}

.favorites {
  width: 1160px;
  min-height: 1600px;

  padding: 100px 0px 110px 0px;

  &__header {
    @extend .flex_row;
  }

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
  }

  &__filters {
    @extend .flex_row-center-between;
    width: 380px;
    height: 50px;
    margin-left: 50px;
  }

  &__filter-item {
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
.favorites {
  &__filter_active {
    color: $color-white;
    background: $color-blue;
  }
}

// hovers
:hover.favorites {
  &__filter-item {
    cursor: pointer;
    color: $color-white;
    background: $color-blue;
  }
}
</style>