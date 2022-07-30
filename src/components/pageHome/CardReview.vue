<template>
    <div 
        class="card" 
        @click="$emit('click')"
    >
        <div class="card__score">
            <v-icon 
                class="card__icon-star" 
                path="img/star.svg" 
            />
            <span class="card__score-text">{{ review.score }}</span>
        </div>

        <div class="card__text">
            {{ review.text }}
        </div>

        <div class="card__footer">
            <img 
                class="card__avatar-img" 
                alt="avatar" 
                :src="review.image" 
            />

            <div class="card__avatar-info">
                <h1 class="card__avatar-name">
                    {{ review.name }}
                </h1>

                <div class="card__avatar-date">
                    {{ review.date }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'CardReview',

    components: {
        VIcon
    },

    props: {
        // Информация об отзыве
        review: {
            type: Object,
            default: () => {
                return {
                    // Оценка
                    score: '',
                    // Текст
                    text: '',
                    // Имя автора
                    name: '',
                    // Дата публикации
                    date: '',
                    // Аватарка пользователя
                    image: ''
                };
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    @extend .flex_column;
    position: relative;
    width: 367px;
    height: 100%;
    padding: 30px;
    overflow: hidden;
    border: 1.5px solid #dce7ff;
    border-radius: 8px;

    @media screen and (min-width: 1160px) {
        &:hover {
            border-color: $color-blue;
            cursor: pointer;
        }
    }
}

.card__score {
    @extend .flex_row-center-between;
    width: 60px;
    min-height: 30px;
    line-height: 0;
    padding: 0px 10px 0px 10px;
    background: #ecf2ff;
    border-radius: 5px;

    &-text {
        margin-top: 3px;
    }
}

.card__text {
    margin-top: 16px;
    overflow: hidden;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.025em;
    color: $color-black;
}

.card__footer {
    @extend .flex_row-center;
    position: absolute;
    width: 100%;
    height: 110px;
    bottom: 30px;
    padding-top: 60px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.95) 29.69%,
        $color-white 100%
    );
}

.card__avatar-img {
    width: 56px;
    height: 56px;
    background: $color-blue;
    border-radius: 12px;
}

.card__avatar-info {
    @extend .flex_column-center;
    margin-left: 17px;
}

.card__avatar-name {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.55px;
    color: $color-black;
}

.card__avatar-date {
    font-size: 14px;
    letter-spacing: -0.4px;
    color: $color-gray;
}

// Иконки
.card__icon {
    &-star {
        width: 15px;
        height: 13px;
        fill: $color-blue;
    }
}

@media screen and (max-width: 575px) {
    .card {
        width: 280px;
        padding: 22px;
    }

    .card__text {
        font-size: 13px;
        line-height: 19px;
    }

    .card__footer {
        bottom: 22px;
    }

    .card__avatar-name {
        font-weight: 700;
        font-size: 16px;
    }

    .card__avatar-date {
        font-size: 13px;
    }
}
</style>