<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">
        Также стоит посмотреть
      </h1>

      <div class="popular__articles">
        <v-article-card />
        <v-article-card />
        <v-article-card />
      </div>
    </div>
  </div>
</template>

<script>
import VArticleCard from '@/components/common/VArticleCard.vue';

export default {
  name: 'BlockPopularArticles',
  components: {
    VArticleCard
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