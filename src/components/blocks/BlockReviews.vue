<template>
  <div class="reviews">
    <h1 class="reviews__title">Отзывы о наших курсах</h1>

    <div class="reviews__list" :class="{ reviews__list_open: isOpenList }">
      <div v-for="(boxList, indexBox) in reviewList" :key="indexBox" class="reviews__box-list">
        <v-review-card
          v-for="(item, index) in boxList"
          :key="index"
          class="reviews__list-item"
          :height="index === 2 ? '700' : '335'"
          :review="item"
          @click="selectedReview = item"
        />
      </div>
    </div>

    <div v-if="!isOpenList" class="reviews__footer">
      <v-button class="reviews__button" @click="isOpenList = true"> Показать еще </v-button>
    </div>

    <popup-review
      v-if="selectedReview.id"
      :review="selectedReview"
      @close="selectedReview = {}"
      @clickLeft="setReview('decrement')"
      @clickRight="setReview('increment')"
    />
  </div>
</template>

<script>
// Components
import VButton from '@/components/common/VButton.vue';
import VReviewCard from '@/components/common/VReviewCard.vue';
import PopupReview from '@/components/popups/PopupReview.vue';

// Services
import apiReviews from '@/services/reviews.js';

export default {
  name: 'BlockReviews',

  components: {
    VButton,
    VReviewCard,
    PopupReview
  },

  data() {
    return {
      isOpenList: false,
      allReviews: [],
      reviewList: [],
      selectedReview: {}
    };
  },

  created() {
    this.getReviews();
  },

  methods: {
    async getReviews() {
      this.allReviews = await apiReviews.getReviews();

      // Количество коробок(отзывы по 5 штук)
      const countBox = Math.ceil(this.allReviews.length / 5);

      for (let i = 0; i < countBox; i++) {
        this.reviewList.push([]);
      }

      // Количество отзывов для одной коробки(максимум 5)
      let count = 0;
      // Индекс коробки
      let index = 0;

      for (let item of this.allReviews) {
        this.reviewList[index].push(item);
        count++;

        if (count === 5) {
          count = 0;
          index++;
        }
      }
    },

    setReview(operator) {
      let index = this.allReviews.indexOf(this.selectedReview);
      const lastIndex = this.allReviews.length - 1;

      if (operator === 'increment') index++;
      if (operator === 'decrement') index--;

      if (index > lastIndex) index = 0;
      if (index < 0) index = lastIndex;

      this.selectedReview = this.allReviews[index];
    }
  }
};
</script>

<style lang="scss" scoped>
.reviews {
  position: relative;
  width: 1160px;
  padding: 100px 0px 100px 0px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1.5px;
    color: #18214d;
  }

  &__list {
    @extend .flex_column;
    height: 1060px;
    margin-top: 20px;
    overflow: hidden;
  }

  &__box-list {
    @extend .flex_column-between;
    flex-wrap: wrap;
    height: 700px;
    margin-top: 30px;
  }

  &__footer {
    @extend .flex_row-center-center;

    position: absolute;
    height: 300px;
    width: 1160px;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.95) 29.69%,
      #ffffff 100%
    );

    bottom: 0px;
  }

  &__button {
    width: 230px;
    height: 60px;
    margin-top: 160px;

    font-family: 'EuclidCircular';
    font-size: 18px;
    color: $color-blue;
    border: 1px solid $color-blue;
  }
}

// hovers
:hover.reviews {
  &__button {
    color: $color-white;
    background: $color-blue;
  }
}

// actives
.reviews {
  &__list_open {
    height: auto;
  }
}
</style>