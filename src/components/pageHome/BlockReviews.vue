<template>
    <div class="reviews">
        <h1 class="reviews__title">Отзывы<br /> о наших курсах</h1>

        <div 
            class="reviews__list" 
            :class="componentClasses"
        >
            <div
                v-for="(boxList, indexBox) in reviewList"
                :key="indexBox"
                class="reviews__box-list"
            >
                <card-review
                    v-for="(item, index) in boxList"
                    :key="index"
                    class="reviews__list-item"
                    :review="item"
                    @click="openPopup(item)"
                />
            </div>
        </div>

        <div 
            v-if="!isOpenList" 
            class="reviews__footer"
        >
            <v-button 
                class="reviews__button" 
                @click="isOpenList = true"
            > 
                Показать еще 
            </v-button>
        </div>

        <popup-review
            v-if="selectedReview.id"
            :review="selectedReview"
            @close="closePopup"
            @clickLeft="setReview('decrement')"
            @clickRight="setReview('increment')"
        />
    </div>
</template>

<script>
import VButton from '@/components/common/VButton';
import CardReview from '@/components/pageHome/CardReview';
import PopupReview from '@/components/pageHome/PopupReview';

export default {
    name: 'BlockReviews',

    components: {
        VButton,
        CardReview,
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

    computed: {
        componentClasses() {
            return {
                'reviews__list_open': this.isOpenList
            }
        }
    },

    created() {
        this.getReviews();
    },

    methods: {
        async getReviews() {
            this.allReviews = await this.$service.reviews.getReviewList();

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
        },

        openPopup(review) {
            this.selectedReview = review;
        },

        closePopup() {
            this.selectedReview = {};
        }
    }
};
</script>

<style lang="scss" scoped>
.reviews {
    position: relative;
    width: 1160px;
    padding: 100px 0px 100px 0px;
}

.reviews__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1.5px;
    color: $color-black;

    br {
        display: none;
    }
}

.reviews__list {
    @extend .flex_column;
    height: 1060px;
    max-height: 1060px;
    margin-top: 20px;
    overflow: hidden;
    transition: all 2.5s ease-in;
}

.reviews__box-list {
    @extend .flex_column-between;
    flex-wrap: wrap;
    height: 700px;
    margin-top: 30px;
}

.reviews__list-item {
    height: 335px;

    &:nth-child(3n) {
        height: 700px;
    }
}

.reviews__footer {
    @extend .flex_row-center-center;
    position: absolute;
    height: 300px;
    width: 100%;
    background: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.95) 29.69%, $color-white 100%);
    bottom: 0px;
}

.reviews__button {
    width: 230px;
    height: 60px;
    margin-top: 160px;
    font-family: 'EuclidCircular';
    font-size: 18px;
    transition: linear 0.2s;

    &.button{
        color: $color-blue;
        border: 1px solid $color-blue;
    }

    @media screen and (min-width: 1160px) {
        &:hover {
            color: $color-white;
            background: $color-blue;
        }
    }
}

// Модификаторы
.reviews__list_open {
    height: auto;
    max-height: 3740px;
}

@media screen and (max-width: 1160px) {
    .reviews {
        width: 100%;
        padding: 42px 0px 50px 0px;
    }

    .reviews__title {
        text-align: center;
    }

    .reviews__list {
        margin-top: 0;
    }

    .reviews__box-list {
        height: auto;
        align-items: center;
    }

    .reviews__list-item {
        margin-top: 20px;

        &:first-child {
            margin-top: 0;
        }

        &:nth-child(3n) {
            height: 335px;
        }
    }
}

@media screen and (max-width: 575px) {
    .reviews__title {
        font-size: 22px;
        line-height: 26px;
        letter-spacing: -1px;

        br {
            display: block;
        }
    }
}
</style>