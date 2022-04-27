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

      <card-preloader v-if="pageLoading" class="articles__preloader" />

      <div v-else class="articles__list">
        <div v-for="(item, index) in articleList" :key="index">
          <card-article
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
import CardArticle from '@/components/cards/CardArticle';
import CardPreloader from '@/components/cards/CardPreloader';
import VFilterGroup from '@/components/common/VFilterGroup';
import BlockRegistration from '@/components/blocks/BlockRegistration';

export default {
  name: 'Articles',
  components: {
    CardArticle,
    CardPreloader,
    VFilterGroup,
    BlockRegistration
  },
  data() {
    return {
      filterId: '',

      filterList: [],
      articleList: [],

      pageLoading: false
    };
  },
  methods: {
    async getArticles() {
      this.pageLoading = true;
      this.articleList = await this.$service.articles.getArticleList({ tag: this.filterId });
      this.pageLoading = false;
    }
  },
  async created() {
    this.filterList = await this.$service.articles.getTags();
    this.getArticles();
  }
};
</script>

<style lang="scss" scoped>
.articles__wrap {
  background: #f4f4f4;
}

.articles {
  @extend .container;

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