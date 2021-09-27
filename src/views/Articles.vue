<template>
  <div class="articles__wrap">
    <div class="articles">
      <h1 class="articles__title">
        Все статьи
      </h1>

      <v-filter-group v-model="filterTag" class="articles__filters" :array="filterList" />

      <div class="articles__list">
        <div v-for="(item, index) in filteredArticleList" :key="index">
          <v-article-card
            :id="item._id"
            class="mb-30px"
            :class="{ 'ml-29px mr-29px': (index - 1) % 3 === 0 }"
            :user-id="user.id"
            :title="item.title"
            :time="item.time"
            :views="item.views"
            :likes="item.likes"
            :image="item.image"
            @click="$router.push('/article')"
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
      filterTag: 'all',

      filterList: [],
      articleList: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user || {};
    },

    filteredArticleList() {
      return this.articleList.filter((item) => item.tags.includes(this.filterTag));
    }
  },
  async created() {
    this.filterList = await apiArticles.getFilters();
     this.articleList = await apiArticles.getArticles({ tag: this.filterTag });
  },
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