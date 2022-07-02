<template>
    <div class="popular__wrap">
        <div class="popular">
            <h1 class="popular__title">Также стоит посмотреть</h1>

            <div class="popular__cards">,
                <card-article
                    v-for="(item, index) in articleList"
                    :key="index"
                    :article="item"
                    @click="openArticle(item.id)"
                />

                <card-course
                    v-for="(item, index) in courseList"
                    :key="index"
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
}

.popular__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
}

.popular__cards {
    @extend .flex_row-center-between;
    margin-top: 50px;
}
</style>