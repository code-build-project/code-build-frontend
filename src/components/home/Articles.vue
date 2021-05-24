<template>
  <div class="articles__wrap">
    <div class="articles">
      <!-- Левая часть -->
      <div class="cb_row">
        <div class="cb_column">
          <v-article-card class="cb_top70">
            <template #text>
              Новые открытия в сфере искусственного интеллекта
            </template>
          </v-article-card>

          <v-article-card class="cb_top35">
            <template #text>
              Как повлияет коронавирус на it-сферу в 2021
            </template>
          </v-article-card>
        </div>

        <div class="cb_column cb_left30">
          <v-article-card>
            <template #text>
              Стоит ли открывать интернет-магазин в 2021
            </template>
          </v-article-card>

          <v-article-card class="cb_top35">
            <template #text>
              В какую страну переехать для роста в it-сфере
            </template>
          </v-article-card>
        </div>
      </div>
      <!-- Левая часть -->

      <!-- Правая часть -->
      <div class="cb_column">
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
          class="cb_top70"
          buttonType="articles"
          iconPosition="right"
          iconWidth="24"
          iconHeight="24"
        >
          Все статьи
        </v-button>
      </div>
      <!-- Правая часть -->
    </div>
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
  }
</style>
