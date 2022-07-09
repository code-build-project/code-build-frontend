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
            <div class="card__lesson-number">Урок №{{ lesson.number }}</div>

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
                        path="img/openEye.svg" 
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
    name: 'CardMiniLesson',

    components: {
        VIcon,
        VLike
    },

    props: {
        // Информация о уроке
        lesson: {
            type: Object,
            default: () => {
                return {
                    // Id урока
                    id: '',
                    // Название урока
                    title: 'Название урока',
                    // Номер урока
                    number: '1',
                    // Длительность по времени
                    time: '15 м.',
                    // Количество просмотров  видео
                    views: '300',
                    // Список id юзеров, лайкнувших урок
                    likes: [],
                    // Название курса(коллекции в бд)
                    courseId: '',
                    // Ссылка на изображение постера
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
    width: 268px;
    height: 338px;
    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
}

.card__poster {
    width: 268px;
    height: 181px;
    margin-bottom: -4px;
    background: #c4c4c4;
    border-radius: 8px 8px 0px 0px;
}

.card__main {
    @extend .flex_column-between-center;
    align-items: stretch;
    width: 268px;
    height: 157px;
    padding: 17px;
    background: $color-white;
    border-radius: 0px 0px 8px 8px;
}

.card__lesson-number {
    cursor: pointer;
    font-size: 15px;
    color: $color-blue;
}

.card__title {
    width: 200px;
    font-size: 20px;
    line-height: 21px;
    color: #3a3f4f;
}

.card__attributes {
    @extend .flex_row-center-start;
    font-size: 14px;
    color: #3a3f4f;
}

.card__attributes-item {
    @extend .flex_row-center-center;
    width: 126px;
    height: 40px;
    border: 1px solid #ededed;
    border-radius: 7px;

    &:last-child {
        width: 96px;
        margin-left: 6px;
    }
}

// Иконки
.card__icon {
    &-attributes {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        fill: #3a3f4f;
    }

    &-heart {
        position: absolute;
        width: 18px;
        height: 16px;
        top: 19px;
        right: 19px;
    }
}
</style>