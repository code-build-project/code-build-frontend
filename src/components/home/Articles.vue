<template>
  <div class="articles">
    <!-- Левая часть -->
    <div class="articles_row">
      <div class="articles_column">
        <v-article-card class="articles_top70">
          <template #text>
            Новые открытия в сфере искусственного интеллекта
          </template>
        </v-article-card>

        <v-article-card class="articles_top35">
          <template #text>
            Как повлияет коронавирус на it-сферу в 2021
          </template>
        </v-article-card>
      </div>

      <div class="articles_column articles_left30">
        <v-article-card>
          <template #text>
            Стоит ли открывать интернет-магазин в 2021
          </template>
        </v-article-card>

        <v-article-card class="articles_top35">
          <template #text>
            В какую страну переехать для роста в it-сфере
          </template>
        </v-article-card>
      </div>
    </div>
    <!-- Левая часть -->

    <!-- Правая часть -->
    <div class="articles_column">
      <div class="articles__icon">
        <icon-list />
      </div>

      <div class="articles__title">
        Свежие новости 
        и познавательные 
        статьи из мира IT
      </div>

      <div class="articles__subtitle">
        Читай наши статьи и улучшай 
        навыки программирования
      </div>

      <v-button 
        class="articles_top70"
        fontFamily="EuclidCircular"
        fontSize="18"
        textColor="#FFFFFF"
        iconWidth="24"
        iconHeight="24"
      >
        Все статьи
      </v-button>
    </div>
    <!-- Правая часть -->
  </div>
</template>

<script>
import IconList from '@/icons/IconList.vue'

import VArticleCard from '@/components/common/VArticleCard.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Articles',
  components: { 
    IconList,
    VArticleCard,
    VButton,
  }
}
</script>

<style lang="scss" scoped>
  .articles {
    height: 1030px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @include adaptiv-padding(380, 40);
    padding-bottom: 0px !important;
    padding-top: 0px !important;
    box-sizing: border-box;

    background: #17191f;

    &__icon {
      width: 90px;
      height: 90px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 2px solid #272A37;
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

      color: #43485E;
    }

    // общие классы
    &_column {
      display: flex;
      flex-direction: column;
    }

    &_row {
      display: flex;
      flex-direction: row;
    }

    &_top35 {
      margin-top: 35px;
    }

    &_top70 {
      margin-top: 70px;
    }

    &_left30 {
      margin-left: 30px;
    }
  }
</style>
