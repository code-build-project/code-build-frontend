<template>
    <div 
        class="card" 
        @click="$emit('click')"
    >
        <img 
            class="card__poster" 
            alt="poster" 
            :src="course.image" 
        />

        <div class="card__main">
            <div class="card__level">
                Сложность
                <div
                    v-for="item in [1, 2, 3, 4, 5]"
                    :key="item"
                    class="card__level-circle"
                    :style="getLevelColor(item)"
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
                    <span>{{ course.time }}</span>
                </div>

                <div class="card__footer-item">
                    <v-icon 
                        class="card__icon-footer" 
                        path="img/openEye.svg" 
                    />
                    {{ course.views }}
                </div>
            </div>
        </div>

        <v-icon 
            v-if="fire" 
            class="card__icon-fire" 
            path="img/fire.svg" 
    
        />
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'CardCourse',

    components: {
        VIcon
    },

    props: {
        // Информация о курсе
        course: {
            type: Object,
            default: () => {
                return {
                    // Id курса
                    id: '',
                    // Название курса
                    title: 'Название курса',
                    // Уровень сложности
                    level: '1',
                    // Количество уроков
                    lessons: '6 уроков',
                    // Общее время курса
                    time: '1 ч. 25 м.',
                    // Количество просмотров курса
                    views: '300',
                    // Список id юзеров, лайкнувших курс
                    likes: [],
                    // Постер
                    image: ''
                };
            }
        },
        // Метка о популярности курса
        fire: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        getLevelColor(level) {
            return { background: this.course.level >= level ? '#EE3465' : '#3A3F4F' };
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    transition: all 0.4s ease;
    line-height: 0;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }
}

.card__poster {
    min-width: 268px;
    min-height: 208px;
    width: 268px;
    height: 208px;
    margin-bottom: -4px;
    background: $color-blue;
    border-radius: 7px 7px 0px 0px;
    line-height: 50px;
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

.card__level {
    @extend .flex_row-center;
    font-family: 'EuclidCircular';
    font-size: 11px;
    color: $color-white;
}

.card__level-circle {
    width: 6px;
    height: 6px;
    margin-left: 2px;
    border-radius: 4px;
    margin-top: 2px;
    &:first-child {
        margin-left: 7px;
    }
}

.card__title {
    font-family: 'EuclidCircular';
    font-size: 13px;
    line-height: 21px;
    color: $color-white;
    word-wrap: break-word;
    max-height: 63px;
    overflow: hidden;
}

.card__footer {
    @extend .flex_row-center-between;
    font-size: 11px;
    line-height: 24px;
    color: $color-white;
}

.card__footer-item {
    @extend .flex_row-center-between;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #383c4a;
    border-radius: 5px;
    height: 28px;
}

// Иконки
.card__icon {
    &-fire {
        @extend .flex_row-center-center;
        position: absolute;
        top: -20px;
        right: -20px;
        width: 50px;
        height: 50px;
        padding: 11px;
        background: $color-pink;
        border-radius: 50%;
    }

    &-footer {
        width: 13px;
        height: 13px;
        margin-right: 5px;
        fill: $color-white;
    }
}

@media screen and (max-width: 767px) {
    .card {
        &:hover {
            transform: translateY(0);
        }
    }

    .card__icon-fire {
        display: none;
    }
}
</style>