<template>
  <div class="cover__wrap" :style="{ background: article.gradient }">
    <div class="cover">
      <div class="cover__header">
        <div class="cover__route">
          <div class="cover__route-item">
            <span class="cover__route-link" @click="$router.push('/')">Code build</span>
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">
            <span class="cover__route-link" @click="$router.push('/articles')">Статьи</span>
            <v-icon class="cover__icon-arrow" path="img/arrow.svg" />
          </div>

          <div class="cover__route-item ml-20px">
            {{ article.title }}
          </div>
        </div>

        <v-like
          v-if="user.id"
          class="cover__icon-heart"
          :isLike="article.isLike"
          @click="onLike()"
        />
      </div>

      <h1 class="cover__title">
        {{ article.title }}
      </h1>

      <h2 class="cover__subtitle">
        {{ article.subtitle }}
      </h2>

      <div class="cover__attributes">
        <div class="cover__attributes-item">
          <v-icon class="cover__icon-attribute" path="img/timer.svg" />
          {{ article.date }}
        </div>

        <div class="cover__attributes-item ml-10px">
          <v-icon class="cover__icon-attribute" path="img/openEye.svg" />
          {{ article.views }}
        </div>

        <div
          v-for="(tag, index) in article.tags"
          :key="index"
          class="cover__attributes-item ml-10px"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VLike from '@/components/common/VLike.vue';

// Services
import apiLikes from '@/services/likes.js';

// Helpers
import storage from '@/helpers/storage.js';

export default {
  name: 'BlockArticleCover',
  components: {
    VIcon,
    VLike
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
          // Подзаголовок статьи
          subtitle: 'Подзаголовок статьи',
          // Дата публикации
          date: '12 апреля 2021',
          // Среднее время прочтения
          time: '15 м.',
          // Количество просмотров статьи
          views: '300',
          // Список id юзеров, лайкнувших статью
          likes: [],
          // Постер
          image: '',
          // Флаг лайка
          isLike: false
        };
      }
    }
  },
  data() {
    return {
      user: storage.getUser('local')
    };
  },
  methods: {
    addLike(payload) {
      apiLikes.addLike(payload).then(() => {
        this.article.isLike = true;
      });
    },

    deleteLike(payload) {
      apiLikes.deleteLike(payload).then(() => {
        this.article.isLike = false;
      });
    },

    onLike() {
      const payload = {
        id: this.article.id,
        field: 'articles'
      };

      if (this.article.isLike) {
        this.deleteLike(payload);
      } else this.addLike(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.cover__wrap {
  @extend .flex_row-center-center;
  width: 100%;
  background: $color-blue;
}

.cover {
  @extend .flex_column;
  width: 1160px;
  height: 600px;
  padding: 85px 0px;

  &__header {
    @extend .flex_row-center-between;
  }

  &__route {
    @extend .flex_row;

    font-family: 'Circe';
    font-size: 16px;
    line-height: 27px;
    color: $color-white;
  }

  &__route-item {
    @extend .flex_row-center-center;
  }

  &__title {
    width: 1030px;
    margin-top: 35px;

    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 69px;
    letter-spacing: -1px;
    color: $color-white;
  }

  &__subtitle {
    flex: 1;
    margin-top: 20px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 30px;
    color: $color-white;
  }

  &__attributes {
    @extend .flex_row;
    margin-top: 30px;
  }

  &__attributes-item {
    @extend .flex_row-center-between;
    font-family: 'Circe';
    font-size: 18px;
    color: $color-white;

    padding: 17px 25px 17px 25px;

    border: 1px solid $color-white;
    border-radius: 9px;
  }
}

// icons
.cover__icon {
  &-arrow {
    width: 20px;
    height: 20px;
    margin-left: 20px;

    stroke: $color-white;
  }

  &-heart {
    width: 18px;
    height: 16px;
  }

  &-attribute {
    width: 22px;
    height: 22px;
    margin-right: 10px;

    fill: $color-white;
  }
}

// hovers
:hover.cover {
  &__route-link {
    cursor: pointer;
    color: $color-navy;
  }
}
</style>