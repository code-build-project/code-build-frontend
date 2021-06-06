<template>
  <div class="article__wrap">
    <block-article-cover />

    <div class="article">
      <div class="article__content">
        <div class="article__content-left">
          Этой весной в музее «Гараж» открылась выставка «Выбирая дистанцию: спекуляции, фейки, прогнозы в эпоху коронацена». 
          Её придумали в прошлом году, во время самоизоляции. 
          Музей предложил художникам переосмыслить локдаун и составить прогнозы возможных версий будущего, 
          прошлого или настоящего, используя инструмент спекуляции.
          Одним из 33 участников выставки стала гибридная самоорганизация NONSNS: Мария Челоянц, 
          Гоша Голицын и Руслан Поланин по-своему пересняли четыре популярных телевизионных передачи.

          Первая уже вышла — это ироничное шоу «Давай поджемимся!». 
          В нём куратор ищет идеального художника для совместных творческих проектов. 
          Ему в этом помогают друзья, свахи и астролог.
        </div>

        <div class="article__content-right cb_left108">
          <img class="article__avatar cb_top10" src="https://i.pinimg.com/originals/33/04/6a/33046a80394ab4e164c8a62fc5ae2e3b.jpg"/>

          <div class="article__author cb_top20">
            МАРИЯ РОМАДАНОВА
          </div>

          <div class="article__hobby cb_top10">
            Журналистка. Из газеты — в digital. 
            Пишет о дизайне, искусстве и красоте. Живёт на Байкале.
          </div>

          <div class="cb_row cb_top15">
            <div class="article__icon">
              <icon-vk fill="#B1B8C6"/>
            </div>

            <div class="article__icon cb_left10">
              <icon-instagram fill="#B1B8C6"/>
            </div>
          </div>

          <div class="article__date cb_top535">
            <icon-date />
            <span class="cb_left10">12 апреля 2021</span>
          </div>
        </div>
      </div>

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
import IconVk from '@/icons/IconVk.vue'
import IconInstagram from '@/icons/IconInstagram.vue'
import IconDate from '@/icons/IconDate.vue'

import VArticleCard from '@/components/common/VArticleCard.vue'

import BlockArticleCover from '@/components/blocks/BlockArticleCover.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'

export default {
  name: 'Article',
  components: {
    IconVk,
    IconInstagram,
    IconDate,
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
    @extend .cb_row;
    min-height: 710px;

    padding-bottom: 70px;
    border-bottom: 1px solid #E4E4E4;
  }

  &__content-left {
    width: 786px;
    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: #272A37;
  }

  &__content-right {
    @extend .cb_column;
    width: 230px;
    height: 800px;
  }

  &__avatar {
    width: 100px; 
    height: 100px;
    background: #83A7C9;
    border-radius: 50%;
  }

  &__author {
    font-family: 'Circe';
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: #272A37;
  }

  &__hobby {
    font-family: 'Circe';
    font-size: 14px;
    line-height: 20px;
    color: #272A37;
  }

  &__date {
    @extend .cb_row;
    font-family: 'Circe';
    font-size: 14px;
    line-height: 22px;
    color: #B1B8C6;
  }

  &__icon {
    @extend .cb_center;
    width: 44px;
    height: 44px;

    border: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 9px;
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