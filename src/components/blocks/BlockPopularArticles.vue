<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">Также стоит посмотреть</h1>

      <div class="popular__articles">
        <v-article-card
          v-for="(item, index) in articleList"
          :key="index"
          :article="item"
          @click="$router.push(`/article?id=${item.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VArticleCard from '@/components/common/VArticleCard.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'BlockPopularArticles',
  components: {
    VArticleCard
  },
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    async getPopularArticleList() {
      this.articleList = await apiArticles.getPopularArticleList({ id: this.articleId });
    }
  },
  created() {
    this.getPopularArticleList();
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

  &__articles {
    @extend .flex_row-center-between;
    margin-top: 50px;
  }
}
</style>