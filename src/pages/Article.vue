<template>
    <div class="article">
        <template v-if="isPageLoaded">
            <article-cover
                v-if="article.id"
                class="article__cover"
                :article="article"
            />

            <article class="article__content">
                <div
                    v-for="(item, index) in article.content"
                    :key="index"
                    class="article__content-item"
                >
                    <h2 class="article__content-title">{{ item.title }}</h2>
                    <p class="article__content-text">{{ item.text }}</p>
                </div>
            </article>

            <block-popular
                class="article__popular"
                :articleList="popularArticleList"
            />
        </template>

        <v-preloader
            v-else 
            class="article__preloader" 
        />

        <block-subscribe class="article__subscribe" />
    </div>
</template>

<script>
// Components
import ArticleCover from '@/components/pageArticle/Cover';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import BlockPopular from '@/components/blocks/BlockPopular';
import VPreloader from '@/components/common/VPreloader';

// Helpers
import { createNotification } from '@/helpers/notification';

export default {
    name: 'Article',

    components: {
        ArticleCover,
        BlockSubscribe,
        BlockPopular,
        VPreloader
    },

    data() {
        return {
            isPageLoaded: false,
            article: {},
            popularArticleList: [],
            timer: null
        };
    },

    // TO DO - не знаю зачем этот код, если выясню, то добавить коммент и вернуть в работу его
    // watch: {
    //     '$route.query.id': {
    //         handler() {
    //             this.setArticle();
    //             this.setPopularArticleList();
    //         }
    //     }
    // },

    created() {
        this.setArticle();
        this.setPopularArticleList();
        this.startViewAlgorithm();
    },

    beforeDestroy() {
        clearTimeout(this.timer);
    },

    methods: {
        async setArticle() {
            let payload = { id: this.$route.query.id };

            try {
                this.article = await this.$service.articles.getArticle(payload);
            } catch {
                createNotification({
                    text: 'Не удалось загрузить статью.',
                    status: 'error'
                });
            } finally {
                this.isPageLoaded = true;
            }
        },

        async setPopularArticleList() {
            let payload = { id: this.$route.query.id };
            this.popularArticleList = await this.$service.articles.getPopulars(payload);
        },

        startViewAlgorithm() {
            let payload = { id: this.$route.query.id };
            this.timer = setTimeout(() => {
                this.$service.articles.addView(payload);
            }, 60000);
        }
    }
};
</script>

<style lang="scss" scoped>
.article {
    background: $color-white-dark;
}

.article__content {
    width: 100%;
    max-width: 1160px;
    min-height: 710px;
    padding: 65px 0 70px 0;
    color: $color-black;
    padding-bottom: 70px;
    border-bottom: 1px solid $color-silver;

    &-item {
        margin-bottom: 50px;
    }

    &-title {
        font-weight: bold;
        font-size: 30px;
    }

    &-text {
        margin-top: 15px;
        font-size: 20px;
        line-height: 30px;
    }
}

.article__popular {
    margin-top: 80px;
}

.article__subscribe {
    margin-top: 110px;
}

.article__preloader {
    width: 80px;
    height: 80px;
    margin: 150px 0;
}

@media screen and (max-width: 1160px) {
    .article__content {
        padding: 20px;
        border-bottom: none;
    }

    .article__popular {
        margin-top: 40px;
    }
}

@media screen and (max-width: 575px) {
    .article__content {
        &-item {
            margin-bottom: 30px;
        }

        &-title {
            font-weight: 700;
            font-size: 18px;
        }

        &-text {
            margin-top: 10px;
            font-size: 13px;
            line-height: 18px;
        }
    }

    .article__popular {
        margin-top: 20px;
    }

    .article__subscribe {
        margin-top: 20px;
    }
}
</style>