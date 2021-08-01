<template>
  <div class="article">
    <block-article-cover class="article__cover" />

    <div class="article__main">
      <article class="article__content">
        Этой весной в музее «Гараж» открылась выставка «Выбирая дистанцию: спекуляции, фейки,
        прогнозы в эпоху коронацена». Её придумали в прошлом году, во время самоизоляции. Музей
        предложил художникам переосмыслить локдаун и составить прогнозы возможных версий будущего,
        прошлого или настоящего, используя инструмент спекуляции. Одним из 33 участников выставки
        стала гибридная самоорганизация NONSNS: Мария Челоянц, Гоша Голицын и Руслан Поланин
        по-своему пересняли четыре популярных телевизионных передачи. Первая уже вышла — это
        ироничное шоу «Давай поджемимся!». В нём куратор ищет идеального художника для совместных
        творческих проектов. Ему в этом помогают друзья, свахи и астролог.
      </article>

      <aside class="article__aside">
        <img
          class="article__avatar"
          src="https://i.pinimg.com/originals/33/04/6a/33046a80394ab4e164c8a62fc5ae2e3b.jpg"
        />

        <div class="article__author">
          МАРИЯ РОМАДАНОВА
        </div>

        <div class="article__hobby">
          Журналистка. Из газеты — в digital. Пишет о дизайне, искусстве и красоте. Живёт на
          Байкале.
        </div>

        <div class="article__social">
          <v-icon class="article__icon-social" path="img/vk.svg" width="20px" height="11px" />
          <v-icon
            class="article__icon-social ml-10px"
            path="img/insta.svg"
            width="17px"
            height="17px"
          />
        </div>

        <div class="article__date">
          <v-icon class="article__icon-date" path="img/date.svg" />
          12 апреля 2021
        </div>
      </aside>
    </div>

    <block-popular-articles class="article__popular" />

    <block-subscribe class="article__subscribe" />
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue';
import BlockArticleCover from '@/components/blocks/BlockArticleCover.vue';
import BlockPopularArticles from '@/components/blocks/BlockPopularArticles.vue';

export default {
  name: 'Article',
  components: {
    VIcon,
    BlockSubscribe,
    BlockArticleCover,
    BlockPopularArticles
  }
};
</script>

<style lang="scss" scoped>
.article {
  background: #f4f4f4;

  &__main {
    @extend .flex_row;
    width: 1160px;
    min-height: 710px;
    margin-top: 65px;

    padding-bottom: 70px;
    border-bottom: 1px solid $color-silver;
  }

  &__content {
    width: 786px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: $color-black;
  }

  &__aside {
    @extend .flex_column;
    width: 230px;
    height: 800px;
    margin-left: 108px;
  }

  &__avatar {
    width: 100px;
    height: 100px;
    margin-top: 10px;

    background: #83a7c9;
    border-radius: 50%;
  }

  &__author {
    margin-top: 20px;

    font-family: 'Circe';
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: $color-black;
  }

  &__hobby {
    margin-top: 10px;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 20px;
    color: $color-black;
  }

  &__social {
    @extend .flex_row;
    margin-top: 15px;
  }

  &__date {
    @extend .flex_row;
    margin-top: 535px;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 22px;
    color: $color-gray;
  }

  &__popular {
    margin-top: 80px;
  }

  &__subscribe {
    margin-top: 110px;
  }
}

// icons
.article__icon {
  &-social {
    @extend .flex_row-center-center;
    width: 44px;
    height: 44px;

    border: 1px solid #e4e4e4;
    border-radius: 9px;
    fill: $color-gray;
  }

  &-date {
    width: 20px;
    height: 20px;

    margin-right: 10px;
    stroke: $color-gray;
  }
}
</style>