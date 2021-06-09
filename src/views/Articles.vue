<template>
  <div class="articles__wrap">
    <div class="articles">
      <div class="articles__title">
        Все статьи
      </div>

      <div class="articles__filter cb_top30">
        <div
          v-for="(item, index) in filterList"
          :key="index"
          class="articles__filter-item"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="articles__list cb_top60">
        <div
          v-for="(item, index) in articleList"
          :key="index"
        >
          <v-article-card
            class="cb_bottom30"
            :class="{ 'cb_left29 cb_right29': (index - 1) % 3 === 0 }"
            :title="item.title"
            :time="item.time"
            :views="item.views"
            @click="$router.push('/article')"
          />
        </div>
      </div>
    </div>

    <block-registration />
  </div>
</template>

<script>
import VArticleCard from '@/components/common/VArticleCard.vue'
import BlockRegistration from '@/components/blocks/BlockRegistration.vue'

export default {
  name: 'Articles',
  components: {
    BlockRegistration,
    VArticleCard
  },
  data() {
    return {
      filterList: [],
      articleList: []
    }
  },

  created() {
    this.axios.get('http://127.0.1.1:4000/articles')
    .then((request) => {
      this.articleList = request.data;
    })

    this.axios.get('http://127.0.1.1:4000/articles/filters')
    .then((request) => {
      this.filterList = request.data;
    })
  }
}
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
    line-height: 44px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__filter {
    @extend .cb_row-between;
    width: 800px;
    height: 50px;
  }

  &__filter-item {
    @extend .cb_center;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 18px;
    color: #272a37;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  &__list {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
}

// hovers
:hover.articles {
  &__filter-item {
    cursor: pointer;
    color: #ffffff;
    background: #256cfe;
  }
}
</style>