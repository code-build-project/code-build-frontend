<template>
  <div class="articles__wrap">
    <div class="articles">
      <!-- Левая часть -->
      <div class="cb_row">
        <div class="cb_column">
          <v-article-mini-card class="cb_top70">
            Новые открытия в сфере искусственного интеллекта
          </v-article-mini-card>

          <v-article-mini-card class="cb_top35">
            Как повлияет коронавирус на it-сферу в 2021
          </v-article-mini-card>
        </div>

        <div class="cb_column cb_left30">
          <v-article-mini-card> 
            Стоит ли открывать интернет-магазин в 2021 
          </v-article-mini-card>

          <v-article-mini-card class="cb_top35">
            В какую страну переехать для роста в it-сфере
          </v-article-mini-card>
        </div>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="cb_column">
        <div class="articles__icon">
          <icon-list />
        </div>

        <div class="articles__title">Свежие новости и познавательные статьи из мира IT</div>

        <div class="articles__subtitle">Читай наши статьи и улучшай навыки программирования</div>

        <v-button class="articles__button cb_top70" @click="$router.push('/articles')">
          Все статьи
          <icon-arrow class="cb_left9 cb_top3" width="24" height="24" />
        </v-button>
      </div>
      <!-- Правая часть -->
    </div>
  </div>
</template>

<script>
import IconList from '@/icons/IconList.vue';
import IconArrow from '@/icons/IconArrow.vue';

import VArticleMiniCard from '@/components/common/VArticleMiniCard.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'BlockArticles',
  components: {
    IconList,
    IconArrow,
    VArticleMiniCard,
    VButton
  }
};
</script>

<style lang="scss" scoped>
.articles__wrap {
  @extend .cb_center;
  width: 100%;
  background: #17191f;
}

.articles {
  @extend .cb_row-between;
  width: 1160px;
  height: 1045px;

  &__icon {
    @extend .cb_center;
    width: 90px;
    height: 90px;

    border: 2px solid #272a37;
    border-radius: 20px;
  }

  &__title {
    width: 360px;

    margin-top: 65px;

    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: #ffffff;
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
    ::v-deep .button {
      width: 200px;
      height: 60px;

      font-family: 'EuclidCircular';
      font-size: 18px;
      color: #ffffff;
      border: 1px solid #256cfe;
      background: transparent;
    }
  }
}

// hovers
:hover.articles {
  &__button {
    ::v-deep .button {
      background-color: #256cfe;
    }
  }
}
</style>