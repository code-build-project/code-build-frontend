<template>
  <div class="articles__wrap">
    <div class="articles">
      <h1 class="articles__title">Все статьи</h1>

      <v-filter-group
        v-model="filterId"
        class="articles__filters"
        :array="filterList"
        @change="getArticles()"
      />

      <div class="articles__list">
        <div v-for="(item, index) in articleList" :key="index">
          <v-article-card
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :article="item"
            @click="$router.push(`/article?id=${item.id}`)"
          />
        </div>
      </div>
    </div>

    <block-registration class="articles__reg" />
  </div>
</template>

<script>
// Components
import VArticleCard from '@/components/common/VArticleCard.vue';
import VFilterGroup from '@/components/common/VFilterGroup.vue';
import BlockRegistration from '@/components/blocks/BlockRegistration.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'Articles',
  components: {
    VArticleCard,
    VFilterGroup,
    BlockRegistration
  },
  data() {
    return {
      filterId: '',

      filterList: [],
      articleList: []
    };
  },
  methods: {
    async getArticles() {
      this.articleList = await apiArticles.getArticleList({ tag: this.filterId });
    }
  },
  created() {
    this.filterList = apiArticles.getFilters();
    this.getArticles();
  }
};
</script>

<style lang="scss" scoped>
.articles__wrap {
  background: #f4f4f4;
}

.articles {
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
    width: 800px;
    margin-top: 30px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  }
}
</style>