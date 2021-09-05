<template>
  <div class="articles__wrap">
    <div class="articles">
      <h1 class="articles__title">Все статьи</h1>

      <div class="articles__filters">
        <div
          v-for="(item, index) in filterList"
          :key="index"
          class="articles__filter"
          :class="{ articles__filter_active: filterTag === item.tag }"
          @click="(filterTag = item.tag), getArticles()"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="articles__list">
        <div v-for="(item, index) in articleList" :key="index">
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
import BlockRegistration from '@/components/blocks/BlockRegistration.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'Articles',
  components: {
    BlockRegistration,
    VArticleCard
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
    }
  },
  created() {
    this.getArticles();
    this.getFilters();
  },
  methods: {
    async getArticles() {
      this.articleList = await apiArticles.getArticles({ tag: this.filterTag })
    },

    async getFilters() {
      this.filterList = await apiArticles.getFilters();
    }
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
    @extend .flex_row-center-between;
    width: 800px;
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

// active
.articles {
  &__filter_active {
    color: $color-white;
    background: $color-blue;
  }
}

// hovers
:hover.articles {
  &__filter {
    cursor: pointer;
    color: $color-white;
    background: $color-blue;
  }
}
</style>