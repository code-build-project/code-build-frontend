<template>
  <div class="card">
    <div class="card__poster" />

    <main class="card__main" @click="$emit('click')">
      <div class="card__lesson-number">
        Урок №{{ lessonNumber }}
      </div>

      <h1 class="card__title">
        {{ title }}
      </h1>

      <div class="card__attributes">
        <div class="card__attributes-item" style="width: 126px">
          <v-icon class="card__icon-attributes" path="img/timer.svg" />
          {{ time }}
        </div>

        <div class="card__attributes-item" style="width: 96px">
          <v-icon class="card__icon-attributes" path="img/openEye.svg" />
          {{ views }}
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
import VIcon from '@/components/common/VIcon.vue';

export default {
  name: 'VCourseCard',
  components: {
    VIcon
  },
  props: {
    // Id урока
    id: {
      type: String,
      default: ''
    },
    // Id юзера
    userId: {
      type: String,
      default: ''
    },
    // Номер урока
    lessonNumber: {
      type: String,
      default: '1'
    },
    // Название урока
    title: {
      type: String,
      default: 'Установка всего необходимого'
    },
    // Время урока
    time: {
      type: String,
      default: '1 ч. 25 м.'
    },
    // Количество просмотров урока
    views: {
      type: String,
      default: '300'
    },
    // Список id юзеров, лайкнувших урок
    likes: {
      type: Array,
      default() {
        return [];
      }
    },
    // Название курса(коллекции в бд)
    courseName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLike: this.likes.includes(this.userId)
    };
  },

  methods: {
    addLike(payload) {
      this.axios.post('/lessons/add-like', payload).then((response) => {
        this.isLike = true;
      });
    },

    deleteLike(payload) {
      this.axios.post('/lessons/delete-like', payload).then((response) => {
        this.isLike = false;
      });
    },

    onLike() {
      const payload = {
        lessonId: this.id,
        userId: this.userId,
        courseName: this.courseName
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
  width: 268px;
  height: 338px;

  &__poster {
    width: 268px;
    height: 181px;

    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__main {
    @extend .flex_column-between-center;
    align-items: stretch;

    width: 268px;
    height: 157px;

    padding: 17px;
    box-sizing: border-box;

    background: $color-white;
    border-radius: 0px 0px 8px 8px;
  }

  &__lesson-number {
    cursor: pointer;

    font-family: 'Circe';
    font-size: 15px;
    color: $color-blue;
  }

  &__title {
    width: 200px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 21px;
    color: #3a3f4f;
  }

  &__attributes {
    @extend .flex_row-center-between;

    font-family: 'Circe';
    font-size: 14px;
    color: #3a3f4f;
  }

  &__attributes-item {
    @extend .flex_row-center-center;
    height: 40px;

    border: 1px solid #ededed;
    border-radius: 7px;
  }
}

// icons
.card__icon {
  &-attributes {
    width: 15px;
    height: 15px;
    margin-right: 5px;

    fill: #3a3f4f;
  }

  &-heart {
    @extend .flex_row-center-center;
    position: absolute;
    width: 18px;
    height: 16px;

    top: 19px;
    right: 19px;
    cursor: pointer;

    stroke: $color-white;
  }
}
</style>