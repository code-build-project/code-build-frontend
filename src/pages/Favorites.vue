<template>
  <div class="favorites__wrap">
    <div class="favorites">
      <!-- Фильтры -->
      <div class="favorites__header">
        <h1 class="favorites__title">Избранное</h1>

        <v-filter-group
          v-model="filterId"
          class="favorites__filters"
          :array="filterList"
          @change="setFavoriteList"
        />
      </div>
      <!-- Фильтры -->

      <card-preloader v-if="pageLoading" class="favorites__preloader" />

      <div class="favorites__list">
        <div v-for="(item, index) in favoriteList" :key="index">
          <card-course
            v-if="filterId === 1"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :course="item"
            @click="$router.push(`/course?id=${item.id}`)"
          />

          <card-lesson
            v-if="filterId === 2"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :lesson="item"
            @click="$router.push(`/course?id=${item.courseId}`)"
          />

          <card-article
            v-if="filterId === 3"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :article="item"
            @click="$router.push(`/article?id=${item.id}`)"
          />
        </div>
      </div>
    </div>

    <block-subscribe class="favorites__subscribe" />
  </div>
</template>

<script>
import CardCourse from '@/components/cards/CardCourse';
import CardLesson from '@/components/cards/CardLesson';
import CardArticle from '@/components/cards/CardArticle';
import CardPreloader from '@/components/cards/CardPreloader';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import VFilterGroup from '@/components/common/VFilterGroup';

export default {
  name: 'Favorites',
  components: {
    CardCourse,
    CardLesson,
    CardArticle,
    CardPreloader,
    BlockSubscribe,
    VFilterGroup
  },
  data() {
    return {
      filterId: 1,

      filterList: [
        {
          id: 1,
          name: 'Курсы',
        },
        {
          id: 2,
          name: 'Уроки',
        },
        {
          id: 3,
          name: 'Статьи',
        }
      ],

      favoriteList: [],

      pageLoading: true
    };
  },

  methods: {
    async setFavoriteList(filterId) {
      this.pageLoading = true;
      this.filterId = filterId;
    
      switch (this.filterId) {
        case 1:
          this.favoriteList = await this.$service.courses.getFavorites();
          break;
        case 2:
          this.favoriteList = await this.$service.lessons.getFavorites();
          break;
        case 3:
          this.favoriteList = await this.$service.articles.getFavorites();
          break;
        default:
          this.favoriteList = await this.$service.courses.getFavorites();
      }

      this.pageLoading = false;
    },
  },

  created() {
    this.setFavoriteList(this.filterId);
  },
};
</script>

<style lang="scss" scoped>
.favorites__wrap {
  background: #f4f4f4;
}

.favorites {
  @extend .container;

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
    width: 380px;
    margin-left: 50px;
  }

  &__preloader {
    margin-top: 60px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  }
}
</style>