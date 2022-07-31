<template>
    <div class="popular__wrap">
        <div class="popular">
            <h1 class="popular__title">Также стоит посмотреть</h1>

            <div class="popular__cards">
                <card-article
                    v-for="(item, index) in articleList"
                    :key="index"
                    class="popular__card"
                    :article="item"
                    @click="openArticle(item.id)"
                />

                <card-course
                    v-for="(item, index) in courseList"
                    :key="index"
                    class="popular__card"
                    :course="item"
                    @click="openCourse(item.id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CardArticle from '@/components/cards/CardArticle';
import CardCourse from '@/components/cards/CardCourse';

export default {
    name: 'BlockPopular',

    components: {
        CardArticle,
        CardCourse
    },

    props: {
        articleList: {
            type: Array,
            default: () => []
        },

        courseList: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        openArticle(id) {
            this.$router.push(`/article?id=${id}`);
        },

        openCourse(id) {
            this.$router.push(`/course?id=${id}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.popular__wrap {
    @extend .flex_row-center-center;
    width: 100%;
}

.popular {
    @extend .flex_column;
    width: 100%;
    max-width: 1160px;
    overflow: hidden;
}

.popular__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
}

.popular__cards {
    @extend .flex_row;
    margin-top: 50px;
}

.popular__card {
    &:not(:first-child) {
        margin-left: 30px;
    }
}

@media screen and (max-width: 1160px) {
    .popular {
        align-items: center;
    }

    .popular__card {
        &:nth-child(3n) {
            display: none;
        }
    }
}

@media screen and (max-width: 867px) {
    .popular {
        padding-bottom: 20px;
    }

    .popular__title {
        font-size: 32px;
        letter-spacing: 0;
        text-align: center;
    }

    .popular__cards {
        flex-direction: column;
        margin-top: 40px;
    }

    .popular__card {
        &:not(:first-child) {
            margin-left: 0;
            margin-top: 20px;
        }
    }
}
</style>