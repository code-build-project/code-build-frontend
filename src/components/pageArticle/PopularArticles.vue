<template>
  <div class="popular__wrap">
    <div class="popular">
      <h1 class="popular__title">Также стоит посмотреть</h1>

      <div class="popular__articles">
        <card-article
          v-for="(item, index) in articleList"
          :key="index"
          :article="item"
          @click="openArticle(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import CardArticle from '@/components/cards/CardArticle';

export default {
  name: 'PopularArticles',
  components: {
    CardArticle
  },
  props: {
    articleList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openArticle(id) {
      this.$router.push(`/article?id=${id}`);
      // location.reload();
    }
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