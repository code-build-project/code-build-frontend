<template>
  <div class="card">
    <img class="card__poster" alt="" :src="article.image" />

    <main class="card__main" @click="$emit('click')">
      <div class="card__date">
        {{ article.date }}
      </div>

      <h1 class="card__title">
        {{ article.title }}
      </h1>

      <div class="card__footer">
        <div class="card__footer-item" style="width: 207px">
          <v-icon class="card__icon-footer" path="img/timer.svg" />
          Время прочтения: {{ article.time }}
        </div>

        <div class="card__footer-item" style="width: 95px">
          <v-icon class="card__icon-footer" path="img/openEye.svg" />
          {{ article.views }}
        </div>
      </div>
    </main>

    <v-icon
      v-if="userId"
      class="card__icon-heart"
      path="img/heart.svg"
      :fill="isLike ? '#EE3465' : 'transparent'"
      @click="onLike()"
    />
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';

// Services
import apiArticles from '@/services/articles.js';

export default {
  name: 'VArticleCard',
  components: {
    VIcon
  },
  props: {
    // Информация о статье
    article: {
      type: Object,
      default: () => {
        return {
          // Id статьи
          id: '',
          // Название статьи
          title: 'Название статьи',
          // Дата публикации
          date: '12 апреля 2021',
          // Среднее время прочтения
          time: '15 м.',
          // Количество просмотров статьи
          views: '300',
          // Список id юзеров, лайкнувших статью
          likes: [],
          // Постер
          image: ''
        };
      }
    },
    // Id юзера
    userId: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isLike: this.article.likes.includes(this.userId)
    };
  },

  methods: {
    addLike(payload) {
      apiArticles.addLike(payload).then(() => {
        this.isLike = true;
      });
    },

    deleteLike(payload) {
      apiArticles.deleteLike(payload).then(() => {
        this.isLike = false;
      });
    },

    onLike() {
      const payload = {
        articleId: this.article.id,
        userId: this.userId
      };

      if (this.isLike) {
        this.deleteLike(payload);
      } else this.addLike(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 367px;

  &__poster {
    width: 100%;
    height: 240px;
    margin-bottom: -4px;
    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column;
    height: 226px;

    padding: 21px 27px 27px 27px;

    background: $color-white;
    border-radius: 0px 0px 8px 8px;
  }

  &__date {
    font-family: 'EuclidCircular';
    font-size: 15px;
    color: $color-gray;
  }

  &__title {
    width: 314px;
    height: 95px;
    margin-top: 15px;

    font-family: 'Circe';
    font-size: 26px;
    line-height: 31px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
  }

  &__footer {
    @extend .flex_row-center-between;
    margin-top: 15px;

    font-family: 'Circe';
    font-size: 14px;
    color: #3a3f4f;
  }

  &__footer-item {
    @extend .flex_row-center-center;
    height: 40px;

    border: 1px solid #ededed;
    border-radius: 7px;
  }
}

// icons
.card__icon {
  &-footer {
    width: 17px;
    height: 17px;
    margin-right: 7px;

    fill: #3a3f4f;
  }

  &-heart {
    @extend .flex_row-center-center;
    position: absolute;
    width: 26px;
    height: 23px;

    top: 20px;
    right: 20px;
    cursor: pointer;

    stroke: $color-white;
  }
}
</style>