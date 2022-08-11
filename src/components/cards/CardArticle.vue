<template>
    <div 
        class="card" 
        @click="$emit('click')"
    >
        <img 
            class="card__poster" 
            alt="Постер" 
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
                    Время прочтения: {{ article.time }}
                </div>

                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/cardEye.svg" 
                    />
                    {{ article.views }}
                </div>
            </div>
        </main>

        <div 
            v-if="isAuth"
            class="card__heart" 
            @click.stop=""
        >
            <v-like
                v-model="article.isLike"
                class="card__icon-heart"
                :contentId="article.id"
                fieldName="articles"
            />
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VLike from '@/components/common/VLike';
import { mapGetters } from 'vuex';

export default {
    name: 'CardArticle',

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

    computed: {
        ...mapGetters(['isAuth'])
    }
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    width: 367px;
    transition: all 0.4s ease;
    line-height: 0;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            transform: scale(1.03);
        }
    }
}

.card__poster {
    width: 100%;
    height: 240px;
    min-width: 100%;
    min-height: 240px;
    background: $color-smoky;
    border-radius: 8px 8px 0px 0px;
}

.card__main {
    @extend .flex_column;
    height: 226px;
    padding: 21px 27px 27px 27px;
    background: $color-white;
    border-radius: 0px 0px 8px 8px;
}

.card__date {
    font-family: 'EuclidCircular';
    font-size: 15px;
    color: $color-gray;
}

.card__title {
    height: 100%;
    margin-top: 20px;
    font-size: 26px;
    line-height: 31px;
    color: $color-black-light;
    letter-spacing: -0.01em;
    overflow: hidden;
}

.card__footer {
    @extend .flex_row-center-start;
    margin-top: 15px;
    font-size: 14px;
    color: $color-black-light;
}

.card__footer-item {
    @extend .flex_row-center-center;
    width: 207px;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 7px;

    &:last-child {
        width: 95px;
        margin-left: 6px;
    }
}

.card__heart {
    position: absolute;
    padding: 20px;
    box-sizing: content-box;
    top: 0;
    right: 0;
}

// Иконки
.card__icon {
    &-footer {
        width: 17px;
        height: 17px;
        margin-right: 7px;
        fill: $color-black-light;
    }

    &-heart {
        width: 26px;
        height: 23px;
    }
}

@media screen and (max-width: 575px) {
    .card {
        width: 280px;
    }

    .card__poster {
        height: 183px;
        min-height: 183px;
        border-radius: 6px 6px 0px 0px;
    }

    .card__main {
        height: 195px;
        padding: 15px 20px 20px 20px;
        border-radius: 0px 0px 6px 6px;
    }

    .card__date {
        font-size: 13px;
    }

    .card__title {
        font-size: 19px;
        line-height: 23px;
    }

    .card__footer {
        font-size: 13px;
    }

    .card__footer-item {
        width: 169px;
        height: 30px;
        border-radius: 5px;

        &:last-child {
            width: 65px;
            margin-left: 8px;
        }
    }

    .card__icon-footer {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
}
</style>