<template>
  <div class="article">
    <block-article-cover class="article__cover" :article="article" />

    <article class="article__content">
      <div v-for="(item, index) in article.content" :key="index" class="article__content-item">
        <h2 class="article__content-title">{{ item.title }}</h2>
        <p class="article__content-text">{{ item.text }}</p>
      </div>
    </article>

    <block-popular-articles class="article__popular" />

    <block-subscribe class="article__subscribe" />
  </div>
</template>

<script>
// Components
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue';
import BlockArticleCover from '@/components/blocks/BlockArticleCover.vue';
import BlockPopularArticles from '@/components/blocks/BlockPopularArticles.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'Article',
  components: {
    BlockSubscribe,
    BlockArticleCover,
    BlockPopularArticles
  },
  data() {
    return {
      article: {}
    };
  },
  async created() {
    this.article = await apiArticles.getArticle({ id: this.$route.query.id });
  }
};
</script>

<style lang="scss" scoped>
.article {
  background: #f4f4f4;
}

.article__content {
  width: 1160px;
  min-height: 710px;
  margin-top: 65px;

  font-family: 'Circe';
  color: $color-black;

  padding-bottom: 70px;
  border-bottom: 1px solid $color-silver;

  &-item {
    margin-bottom: 50px;
  }

  &-title {
    font-weight: bold;
    font-size: 30px;
  }

  &-text {
    margin-top: 15px;
    font-size: 20px;
    line-height: 30px;
  }
}

.article__popular {
  margin-top: 80px;
}

.article__subscribe {
  margin-top: 110px;
}
</style>