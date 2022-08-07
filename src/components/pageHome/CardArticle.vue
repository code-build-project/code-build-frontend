<template>
    <div 
        class="card" 
        @click="$emit('click')"
    >
        <img 
            class="card__poster" 
            alt="poster" 
            :src="article.image" 
        />

        <main class="card__main">
            <div class="card__date">
                {{ article.date }}
            </div>

            <h1 class="card__title">
                {{ article.title }}
            </h1>

            <div class="card__footer">
                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/timer.svg" 
                    />
                    <span class="card__footer-text">Время прочтения: {{ article.time }}</span>
                </div>

                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/cardEye.svg" 
                    />
                    <span class="card__footer-text">{{ article.views }}</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'CardArticle',

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
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    transition: all 0.4s ease;
    line-height: 0;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            transform: translateY(-10px);
        }
    }
}

.card__poster {
    min-width: 268px;
    min-height: 208px;
    width: 268px;
    height: 208px;
    background: $color-blue;
    border-radius: 7px 7px 0px 0px;
}

.card__main {
    @extend .flex_column-between;
    align-items: stretch;
    width: 268px;
    height: 142px;
    padding: 17px;
    background: $color-black;
    border-radius: 0px 0px 7px 7px;
}

.card__date {
    @extend .flex_row-center;
    font-family: 'EuclidCircular';
    font-weight: 500;
    font-size: 12px;
    color: #4c5169;
}

.card__title {
    font-family: 'ObjectSans';
    font-size: 17px;
    line-height: 20px;
    color: $color-white;
    word-wrap: break-word;
    max-height: 62px;
    overflow: hidden;
    margin-top: 8px;
}

.card__footer {
    @extend .flex_row-center-between;

    &-text {
        margin-top: 1.5px;
    }
}

.card__footer-item {
    @extend .flex_row-center-center;
    height: 28px;
    font-size: 11px;
    line-height: 24px;
    color: $color-white;
    border: 1px solid #383c4a;
    border-radius: 5px;
    &:nth-child(1) {
        width: 157px;
    }
    &:nth-child(2) {
        width: 72px;
    }
}

// Иконки
.card__icon {
    &-footer {
        width: 13px;
        height: 13px;
        margin-right: 5px;
        fill: $color-white;
    }
}
</style>