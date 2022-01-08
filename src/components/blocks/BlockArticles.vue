<template>
  <div class="articles__wrap">
    <div class="articles">
      <!-- Левая часть -->
      <div class="articles__cards">
        <div class="flex_column">
          <v-article-mini-card class="mt-70px" :article="articleList[0]" />
          <v-article-mini-card class="mt-35px"  :article="articleList[0]" />
        </div>

        <div class="flex_column ml-30px">
          <v-article-mini-card  :article="articleList[1]" />
          <v-article-mini-card class="mt-35px"  :article="articleList[1]" />
        </div>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="articles__main">
        <v-icon class="articles__icon-list" path="img/list.svg" width="24" height="26" />

        <h1 class="articles__title">Свежие новости и познавательные статьи из мира IT</h1>

        <h2 class="articles__subtitle">Читай наши статьи и улучшай навыки программирования</h2>

        <v-button class="articles__button" @click="$router.push('/articles')">
          Все статьи
          <v-icon class="articles__icon-arrow" path="img/arrow.svg" />
        </v-button>
      </div>
      <!-- Правая часть -->
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VButton from '@/components/common/VButton.vue';
import VArticleMiniCard from '@/components/common/VArticleMiniCard.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'BlockArticles',
  components: {
    VIcon,
    VButton,
    VArticleMiniCard
  },
  data() {
    return {
      articleList: []
    };
  },
  methods: {
    async getPopularArticleList() {
      this.articleList = await apiArticles.getPopularArticleList();
    }
  },
  created() {
    this.getPopularArticleList();
  }
};
</script>

<style lang="scss" scoped>
.articles__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: #17191f;
}

.articles {
  @extend .flex_row-center-between;
  width: 1160px;
  height: 1045px;

  &__title {
    width: 360px;
    margin-top: 65px;

    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: $color-white;
  }

  &__subtitle {
    width: 340px;
    margin-top: 30px;

    font-family: 'Circe';
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
    color: #43485e;
  }

  &__button {
    width: 200px;
    height: 60px;
    margin-top: 70px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: $color-white;
    border: 1px solid $color-blue;
    background: transparent;
  }
}

// flex containers
.articles {
  &__cards {
    @extend .flex_row;
  }

  &__main {
    @extend .flex_column;
  }
}

// icons
.articles__icon {
  &-list {
    @extend .flex_row-center-center;
    width: 90px;
    height: 90px;

    border: 2px solid $color-black;
    border-radius: 20px;
  }

  &-arrow {
    width: 24px;
    height: 24px;

    margin-top: 3px;
    margin-left: 9px;
    stroke: $color-white;
  }
}

// hovers
:hover.articles {
  &__button {
    background-color: $color-blue;
  }
}
</style>