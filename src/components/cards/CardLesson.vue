<template>
    <div 
        class="card" 
        @click="$emit('click')"
    >
        <img 
            class="card__poster" 
            alt="Постер" 
            :src="lesson.image" 
        />

        <div class="card__main">
            <h2 class="card__course-title">{{ lesson.courseTitle }}</h2>

            <h1 class="card__title">{{ lesson.title }}</h1>

            <div class="card__attributes">
                <div class="card__attributes-item">
                    <v-icon 
                        class="card__icon-attributes" 
                        path="img/timer.svg" 
                    />
                    {{ lesson.time }}
                </div>

                <div class="card__attributes-item">
                    <v-icon 
                        class="card__icon-attributes" 
                        path="img/cardEye.svg" 
                    />
                    {{ lesson.views }}
                </div>
            </div>
        </div>

        <v-like
            v-if="isAuth"
            v-model="lesson.isLike"
            class="card__icon-heart"
            :contentId="lesson.id"
            :courseId="lesson.courseId"
            fieldName="lessons"
        />
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VLike from '@/components/common/VLike';
import { mapGetters } from 'vuex';

export default {
    name: 'CardLesson',

    components: {
        VIcon,
        VLike
    },

    props: {
        lesson: {
            type: Object,
            default: () => {
                return {
                    id: '',
                    title: 'Название урока',
                    courseTitle: 'Название курса',
                    time: '15 м.',
                    views: '300',
                    likes: [],
                    courseId: '',
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
    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
}

.card__main {
    @extend .flex_column;
    height: 226px;
    padding: 21px 27px 27px 27px;
    background: $color-white;
    border-radius: 0px 0px 8px 8px;
}

.card__course-title {
    font-family: 'EuclidCircular';
    font-size: 15px;
    line-height: 20px;
    color: $color-gray;
}

.card__title {
    height: 100%;
    margin-top: 10px;
    font-size: 26px;
    line-height: 31px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
    overflow: hidden;
}

.card__attributes {
    @extend .flex_row-center-start;
    margin-top: 15px;
    font-size: 14px;
    line-height: 12px;
    color: #3a3f4f;
}

.card__attributes-item {
    @extend .flex_row-center-center;
    width: 170px;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 7px;

    &:last-child {
        width: 130px;
        margin-left: 6px;
    }
}

// Иконки
.card__icon {
    &-attributes {
        width: 18px;
        height: 18px;
        margin-right: 7px;
        fill: #3a3f4f;
    }

    &-heart {
        position: absolute;
        width: 26px;
        height: 23px;
        top: 20px;
        right: 20px;
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

    .card__course-title {
        font-size: 13px;
        line-height: 15px;
    }

    .card__title {
        font-size: 19px;
        line-height: 23px;
    }

    .card__attributes-item {
        width: 131px;
        height: 40px;
        border-radius: 5px;

        &:last-child {
            width: 101px;
            margin-left: 8px;
        }
    }
}
</style>