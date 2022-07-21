<template>
    <div 
        class="card"
        @click="$emit('click')"
    >
        <img 
            class="card__poster" 
            alt="Постер" 
            :src="course.image" 
        />

        <main class="card__main">
            <div class="card__level">
                <span class="card__level-title">Сложность</span>

                <div
                    v-for="item in [1, 2, 3, 4, 5]"
                    :key="item"
                    class="card__level-circle"
                    :style="{ background: course.level >= item ? '#EE3465' : '#EDEDED' }"
                />
            </div>

            <h1 class="card__title">
                {{ course.title }}
            </h1>

            <div class="card__footer">
                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/video.svg" 
                    />
                    {{ course.lessons }}
                </div>

                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/timer.svg" 
                    />
                    {{ course.time }}
                </div>

                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/cardEye.svg" 
                    />
                    {{ course.views }}
                </div>
            </div>
        </main>

        <v-like
            v-if="isAuth"
            v-model="course.isLike"
            class="card__icon-heart"
            :contentId="course.id"
            fieldName="courses"
        />
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VLike from '@/components/common/VLike';
import { mapGetters } from 'vuex';

export default {
    name: 'CardCourse',

    components: {
        VIcon,
        VLike
    },

    props: {
        course: {
            type: Object,
            default: () => {
                return {
                    id: '',
                    title: 'Название курса',
                    level: '1',
                    lessons: '6 уроков',
                    time: '1 ч. 25 м.',
                    views: '300',
                    likes: [],
                    image: '',
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

.card__level {
    @extend .flex_row-center;
    font-family: 'EuclidCircular';
    font-size: 15px;
    color: #3a3f4f;

    &-title {
        margin-right: 5px;
    }

    &-circle {
        width: 8px;
        height: 8px;
        margin-left: 2px;
        border-radius: 4px;
    }
}

.card__title {
    height: 100%;
    margin-top: 15px;
    font-size: 26px;
    line-height: 35px;
    color: #3a3f4f;
    letter-spacing: -0.01em;
    overflow: hidden;
}

.card__footer {
    @extend .flex_row-center-start;
    margin-top: 15px;
    font-size: 14px;
    color: #3a3f4f;
}

.card__footer-item {
    @extend .flex_row-center-center;
    width: 103px;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 7px;

    &:first-child {
        width: 112px;
        margin-right: 6px;
    }

    &:last-child {
        width: 80px;
        margin-left: 6px;
    }
}

// Иконки
.card__icon {
    &-footer {
        width: 18px;
        height: 18px;
        margin-right: 8px;
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

    .card__title {
        margin-top: 20px;
        font-size: 19px;
        line-height: 23px;
    }

    .card__footer {
        font-size: 13px;
    }

    .card__footer-item {
        width: 78px;
        height: 30px;
        border-radius: 5px;

        &:first-child {
            width: 88px;
        }

        &:last-child {
            width: 61px;
        }
    }

    .card__icon-footer {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
}
</style>