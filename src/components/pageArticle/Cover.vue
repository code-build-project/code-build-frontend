<template>
    <div 
        class="cover__wrap" 
        :style="{ background: article.gradient }"
    >
        <div class="cover">
            <div class="cover__header">
                <v-bread-crumbs
                    class="cover__breadcrumbs"
                    :links="breadcrumbs" 
                />

                <v-like
                    v-if="isAuth"
                    v-model="article.isLike"
                    class="cover__icon-heart"
                    :contentId="article.id"
                    fieldName="articles"
                />
            </div>

            <h1 class="cover__title">{{ article.title }}</h1>

            <h2 class="cover__subtitle">{{ article.subtitle }}</h2>

            <div class="cover__attributes">
                <div class="cover__attributes-item">
                    <v-icon 
                        class="cover__icon-attribute" 
                        path="img/timer.svg" 
                    />
                    {{ article.date }}
                </div>

                <div class="cover__attributes-item">
                    <v-icon 
                        class="cover__icon-attribute" 
                        path="img/cardEye.svg" 
                    />
                    {{ article.views }}
                </div>

                <div
                    v-for="(tag, index) in tagList"
                    :key="index"
                    class="cover__attributes-item"
                >
                    {{ '#' + tag.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VLike from '@/components/common/VLike';
import VBreadCrumbs from '@/components/common/VBreadCrumbs';
import { mapGetters } from 'vuex';

export default {
    name: 'ArticleCover',

    components: {
        VIcon,
        VLike,
        VBreadCrumbs
    },

    props: {
        article: {
            type: Object,
            default: () => {
                return {
                    id: '',
                    title: 'Название статьи',
                    subtitle: 'Подзаголовок статьи',
                    date: '12 апреля 2021',
                    time: '15 м.',
                    views: '300',
                    likes: [],
                    image: '',
                    isLike: false,
                    tags: []
                };
            }
        }
    },

    computed: {
        ...mapGetters(['isAuth']),
    },

    data() {
        return {
            tagList: [],
            breadcrumbs: [
                { title: 'Code build', path: '/' },
                { title: 'Статьи', path: '/articles' },
                { title: this.article.title },
            ]
        };
    },

    methods: {
        async setTags() {
            const response = await this.$store.dispatch('tags/getArticleList');

            this.tagList = response.filter(item => {
                return this.article.tags.includes(item.id);
            });
        }
    },

    created() {
        this.setTags();
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
    position: relative;
    @extend .flex_column;
    width: 100%;
    max-width: 1160px;
    min-height: 532px;
    padding: 85px 0px;
}

.cover__header {
    @extend .flex_row-center-between;
}

.cover__title {
    width: 100%;
    margin-top: 35px;
    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 69px;
    letter-spacing: -1px;
    color: $color-white;
}

.cover__subtitle {
    flex: 1;
    margin-top: 20px;
    font-size: 20px;
    line-height: 30px;
    color: $color-white;
}

.cover__attributes {
    @extend .flex_row;
    margin-top: 30px;
}

.cover__attributes-item {
    @extend .flex_row-center-between;
    font-size: 18px;
    color: $color-white;
    padding: 17px 25px 17px 25px;
    border: 1px solid $color-white;
    border-radius: 9px;
    margin-right: 10px;
    margin-bottom: 10px;
}

// Иконки
.cover__icon {
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

@media screen and (max-width: 1160px) {
    .cover {
        padding: 85px 20px;
    }

    .cover__attributes {
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 767px) {
    .cover {
        min-height: auto;
        padding: 30px 20px 10px 20px;
    }

    .cover__breadcrumbs {
        display: none;
    }

    .cover__title {
        margin-top: 0;
        font-size: 34px;
        line-height: 40px;
    }

    .cover__subtitle {
        margin-top: 17px;
        font-size: 15px;
        line-height: 21px;
    }

    .cover__attributes {
        max-width: 85%;
    }

    .cover__attributes-item {
        font-size: 15px;
        padding: 11px 11px 11px 11px;
        border-radius: 6px;
        margin-bottom: 8px;
        margin-right: 8px;
    }

    .cover__icon-attribute {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }

    .cover__icon-heart {
        position: absolute;
        width: 26px;
        height: 23px;
        right: 24px;
        bottom: 20px;
    }
}

@media screen and (max-width: 575px) {
    .cover__title {
        font-size: 24px;
        line-height: 30px;
    }

    .cover__subtitle {
        font-size: 13px;
        line-height: 18px;
    }
}
</style>