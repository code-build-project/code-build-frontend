<template>
    <div class="courses__wrap">
        <div class="courses">
            <div class="courses__main">
                <v-icon 
                    class="courses__icon-play" 
                    path="img/play.svg" 
                />

                <h1 class="courses__title">
                    В нашем сервисе большинство курсов являются полностью бесплатными
                </h1>

                <h2 class="courses__subtitle">
                    Вы можете приступить к изучению как платных, так и бесплатных курсов прямо
                    сейчас
                </h2>
                
                <v-button 
                    class="courses__button" 
                    @click="$router.push('/courses')"
                >
                    Все курсы
                    <v-icon 
                        class="courses__icon-arrow" 
                        path="img/arrow.svg" 
                    />
                </v-button>
            </div>

            <div class="courses__cards">
                <card-course
                    v-for="(item, index) in courseList"
                    :key="index"
                    class="courses__card"
                    :course="item"
                    :fire="index === 1"
                    @click="$router.push(`/course?id=${item.id}`)"
                />
            </div>

            <!-- Появится только на мобилке -->
            <v-button 
                class="courses__button adaptive" 
                @click="$router.push('/courses')"
            >
                Все курсы
                <v-icon 
                    class="courses__icon-arrow" 
                    path="img/arrow.svg" 
                />
            </v-button>
            <!-- Появится только на мобилке -->
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import CardCourse from '@/components/pageHome/CardCourse';

export default {
    name: 'BlockCourses',

    components: {
        VIcon,
        VButton,
        CardCourse
    },

    data() {
        return {
            courseList: []
        };
    },

    created() {
        this.setCourseList();
    },

    methods: {
        async setCourseList() {
            this.courseList = await this.$service.courses.getCoursesList();
        }
    }
};
</script>

<style lang="scss" scoped>
.courses__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: #17191f;
}

.courses {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 1045px; 
}

.courses__main {
    @extend .flex_column;
}

.courses__cards {
    @extend .flex_wrap;
    justify-content: space-between;
    width: 566px;
}

.courses__card {
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

.courses__title {
    position: relative;
    width: 450px;
    margin-top: 65px;
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    color: $color-white;

    &:after {
        content: 'FREE';
        position: absolute;
        width: 56px;
        height: 29px;
        background: $color-pink;
        border-radius: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 11px;
        color: $color-white;
        bottom: 4px;
        left: 275px;
    }
}

.courses__subtitle {
    width: 340px;
    margin-top: 35px;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.025em;
    color: #43485e;
}

.courses__button {
    width: 200px;
    height: 60px;
    margin-top: 70px;
    font-family: 'EuclidCircular';
    font-size: 18px;
    transition: ease-out 0.3s;
    
    &.button{
        color: $color-white;
        border: 1px solid $color-blue;
    }

    &.adaptive {
        display: none;
    }

    @media screen and (min-width: 1160px) {
        &:hover {
            background: $color-blue;
        }
    }
}

// Иконки
.courses__icon {
    &-play {
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
        stroke-width: 1.5px;
    }
}

@media screen and (max-width: 1219px) {
    .courses {
        flex-direction: column;
        height: auto;
        padding: 54px 0 40px 0;
    }

    .courses__cards {
        margin-top: 80px;
    }
}

@media screen and (max-width: 767px) {
    .courses {
        width: 320px;
    }

    .courses__main {
        align-items: center;
    }

    .courses__cards {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 0;
    }

    .courses__card {
        &:first-child {
            margin-top: 40px;
        }

        &:not(:first-child) {
            margin-top: 20px;
        }

        &:last-child {
            display: none;
        }
    }

    .courses__icon-play {
        width: 80px;
        height: 80px;
        border-radius: 18px;
        padding: 27px;
    }

    .courses__title {
        width: 269px;
        margin-top: 28px;
        font-size: 22px;
        line-height: 26px;
        text-align: center;

        &:after {
            bottom: -40px;
            left: calc(50% - 56px/2);
        }
    }

    .courses__subtitle {
        width: 230px;
        margin-top: 60px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
        text-align: center;
    }

    .courses__button {
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