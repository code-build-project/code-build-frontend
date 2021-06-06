<template>
  <div class="article__wrap">
    <block-article-cover />

    <div class="article">
      <div class="article__content" />

      <div class="article__useful cb_top80">
        <div>Также стоит посмотреть</div>

        <div class="cb_row-between cb_top50">
          <v-article-card />

          <v-article-card />

          <v-article-card />
        </div>
      </div>
    </div>

    <block-subscribe />
  </div>
</template>

<script>
import VArticleCard from '@/components/common/VArticleCard.vue'

import BlockArticleCover from '@/components/blocks/BlockArticleCover.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'

export default {
  name: 'Article',
  components: {
    VArticleCard,
    BlockArticleCover,
    BlockSubscribe,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.article__wrap {
  background: #f4f4f4;
}

.article {
  @extend .cb_column;
  width: 1160px;
  min-height: 1578px;

  padding: 109px 0px 110px 0px;
  box-sizing: border-box;

  &__content {
    min-height: 710px;

    display: flex;
    flex-wrap: wrap;

    padding-bottom: 70px;
    border-bottom: 1px solid #E4E4E4;
  }

  &__useful {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272A37;
  }
}
</style>