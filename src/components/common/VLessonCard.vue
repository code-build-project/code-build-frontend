<template>
  <div class="card">
    <div class="card__poster" />

    <div
      class="card__info"
      @click="$emit('click')"
    >
      <div class="card__course-title">
        {{ courseTitle }}
      </div>

      <div class="card__title cb_top15">
        {{ title }}
      </div>

      <div class="card__footer cb_top15">
        <div class="card__footer-item cb_width170">
          <icon-timer
            width="18"
            height="18"
            fill="#3A3F4F"
          />
          <span class="cb_left7">{{ time }}</span>
        </div>

        <div class="card__footer-item cb_width130">
          <icon-open-eye
            width="21"
            height="18"
            fill="#3A3F4F"
          />
          <span class="cb_left7">{{ views }}</span>
        </div>
      </div>
    </div>

    <div
      v-if="userId"
      class="card__icon-heart"
      @click="onLike()"
    >
      <icon-heart
        :fill="isLike ? '#EE3465' : 'transparent'"
        width="26"
        height="23"
      />
    </div>
  </div>
</template>

<script>
import IconTimer from '@/icons/IconTimer.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'
import IconHeart from '@/icons/IconHeart.vue'

export default {
  name: 'VLessonCard',
  components: {
    IconTimer,
    IconOpenEye,
    IconHeart
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
    // Название урока
    title: {
      type: String,
      default: 'Название урока'
    },
    // Название курса
    courseTitle: {
      type: String,
      default: 'Название курса'
    },
    // Длительность по времени
    time: {
      type: String,
      default: '15 м.'
    },
    // Количество просмотров  видео
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
      default: '',
    }
  },
  data() {
    return {
      isLike: this.likes.includes(this.userId)
    }
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
        courseName: this.courseName,
      };

      if (this.isLike) {
        this.deleteLike(payload);
      } else this.addLike(payload);
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 367px;

  &__poster {
    height: 240px;

    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
  }

  &__info {
    @extend .cb_column;
    height: 226px;

    padding: 21px 27px 27px 27px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 0px 0px 8px 8px;
  }

  &__course-title {
    width: 200px;
    font-family: 'EuclidCircular';
    font-size: 15px;
    line-height: 20px;
    color: #b1b8c6;
  }

  &__title {
    width: 314px;
    height: 95px;

    font-family: 'Circe';
    font-size: 26px;
    line-height: 31px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
  }

  &__footer {
    @extend .cb_row-between;

    font-family: 'Circe';
    font-size: 14px;
    line-height: 12px;
    color: #3a3f4f;
  }

  &__footer-item {
    @extend .cb_center;
    height: 40px;

    border: 1px solid #ededed;
    border-radius: 7px;
  }

  &__icon-heart {
    @extend .cb_center;
    position: absolute;

    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>