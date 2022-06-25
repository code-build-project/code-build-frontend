<template>
    <div class="articles__wrap">
        <div class="articles">
            <!-- Появится только на мобилке -->
            <v-button 
                class="articles__button adaptive" 
                @click="$router.push('/articles')"
            >
                Все статьи
                <v-icon 
                    class="articles__icon-arrow" 
                    path="img/arrow.svg" 
                />
            </v-button>
            <!-- Появится только на мобилке -->
            
            <div class="articles__cards">
                <card-article
                    class="articles__card"
                    :article="articleList[0]"
                    @click="$router.push(`/article?id=${articleList[0].id}`)"
                />

                <card-article
                    class="articles__card"
                    :article="articleList[0]"
                    @click="$router.push(`/article?id=${articleList[0].id}`)"
                />

                <card-article
                    class="articles__card"
                    :article="articleList[1]"
                    @click="$router.push(`/article?id=${articleList[1].id}`)"
                />

                <card-article
                    class="articles__card"
                    :article="articleList[1]"
                    @click="$router.push(`/article?id=${articleList[1].id}`)"
                />
            </div>

            <div class="articles__main">
                <v-icon 
                    class="articles__icon-list" 
                    path="img/list.svg" 
                />

                <h1 class="articles__title">Свежие новости и познавательные статьи из мира IT</h1>

                <h2 class="articles__subtitle">
                    Читай наши статьи и улучшай навыки программирования
                </h2>

                <v-button 
                    class="articles__button" 
                    @click="$router.push('/articles')"
                >
                    Все статьи
                    <v-icon 
                        class="articles__icon-arrow" 
                        path="img/arrow.svg" 
                    />
                </v-button>
            </div>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import CardArticle from '@/components/pageHome/CardArticle';

export default {
    name: 'BlockArticles',

    components: {
        VIcon,
        VButton,
        CardArticle
    },

    data() {
        return {
            articleList: []
        };
    },

    methods: {
        async setArticleList() {
            this.articleList = await this.$service.articles.getPopulars();
        }
    },

    created() {
        this.setArticleList();
    }
};
</script>

<style lang="scss" scoped>
.articles__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: #17191f;
}

.articles {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 1045px;
}

.articles__main {
    @extend .flex_column;
}

.articles__cards {
    @extend .flex_wrap;
    justify-content: space-between;
    width: 566px;
}

.articles__card {
    &:nth-child(1) {
        margin-top: 70px;
    }
    &:nth-child(3) {
        margin-top: 35px;
    }
    &:nth-child(4) {
        margin-top: -35px;
    }
}

.articles__title {
    width: 360px;
    margin-top: 65px;
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.01em;
    color: $color-white;
}

.articles__subtitle {
    width: 340px;
    margin-top: 30px;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
    color: #43485e;
}

.articles__button {
    width: 200px;
    height: 60px;
    margin-top: 70px;
    font-family: 'EuclidCircular';
    font-size: 18px;
    color: $color-white;
    border: 1px solid $color-blue;
    background: transparent;

    &.adaptive {
        display: none;
    }

    &:hover {
        background-color: $color-blue;
    }
}

// Иконки
.articles__icon {
    &-list {
        @extend .flex_row-center-center;
        width: 90px;
        height: 90px;
        border: 2px solid $color-black;
        border-radius: 20px;
        padding: 29px;
    }

    &-arrow {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-left: 9px;
        stroke: $color-white;
    }
}

@media screen and (max-width: 1219px) {
    .articles {
        flex-direction: column-reverse;
        height: auto;
        padding: 40px 0 50px 0;
    }

    .articles__cards {
        margin-top: 80px;
    }
}

@media screen and (max-width: 767px) {
    .articles {
        width: 320px;
    }

    .articles__main {
        align-items: center;
    }

    .articles__cards {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }

    .articles__card {
        &:first-child {
            margin-top: 40px;
        }

        &:not(:first-child) {
            margin-top: 20px;
        }
    }

    .articles__icon-list {
        width: 80px;
        height: 80px;
        border-radius: 18px;
        padding: 27px;
    }

    .articles__title {
        width: 198px;
        margin-top: 28px;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
    }

    .articles__subtitle {
        width: 190px;
        margin-top: 20px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: center;
    }

    .articles__button {
        width: 254px;
        height: 58px;
        margin-top: 25px;
        display: none;

        &.adaptive {
            display: flex;
        }
    }
}
</style>