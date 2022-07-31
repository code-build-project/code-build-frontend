<template>
    <div class="course">
        <template v-if="isPageLoaded">
            <course-cover
                v-if="course.id"
                class="course__cover"
                :course="course"
            />

            <div class="course__lessons">
                <card-mini-lesson
                    v-for="(item, index) in lessonList"
                    :key="index"
                    class="course__card"
                    :lesson="item"
                    @click="openPopup(item)"
                />
            </div>

            <block-popular
                v-if="course.id"
                class="course__popular"
                :courseList="courseList"
            />
        </template>

        <v-preloader
            v-else 
            class="course__preloader" 
        />

        <block-subscribe class="course__subscribe" />

        <popup-player
            v-if="selectedLesson.id"
            :lesson="selectedLesson"
            :lessonsLength="lessonList.length"
            @close="closePopup"
            @clickLeft="setLesson('decrement')"
            @clickRight="setLesson('increment')"
        />
    </div>
</template>

<script>
// Components
import PopupPlayer from '@/components/pageCourse/PopupPlayer';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import CardMiniLesson from '@/components/cards/CardMiniLesson';
import CourseCover from '@/components/pageCourse/Cover';
import BlockPopular from '@/components/blocks/BlockPopular';
import VPreloader from '@/components/common/VPreloader';

// Helpers
import { createNotification } from '@/helpers/notification';

export default {
    name: 'Course',

    components: {
        PopupPlayer,
        BlockSubscribe,
        CardMiniLesson,
        CourseCover,
        BlockPopular,
        VPreloader
    },

    data() {
        return {
            isPageLoaded: false,
            lessonList: [],
            courseList: [],
            course: {},
            selectedLesson: {},
            timer: null
        };
    },

    // TO DO - не знаю зачем этот код, если выясню, то добавить коммент и вернуть в работу его
    // watch: {
    //     '$route.query.id': {
    //         handler() {
    //             this.setLessons();
    //             this.setCourse();
    //             this.setPopularCourseList();
    //         }
    //     }
    // },

    created() {
        this.setLessons();
        this.setCourse();
        this.setPopularCourseList();
        this.startViewAlgorithmCourse();
    },

    beforeDestroy() {
        clearTimeout(this.timer);
    },

    methods: {
        async setLessons() {
            let payload = { courseId: this.$route.query.id };

            try {
                this.lessonList = await this.$service.lessons.getLessonList(payload);
            } catch {
                createNotification({
                    text: 'Не удалось загрузить уроки курса.',
                    status: 'error'
                });
            } finally {
                this.isPageLoaded = true;
            }
        },

        async setCourse() {
            let payload = { id: this.$route.query.id };
            this.course = await this.$service.courses.getCourse(payload);
        },

        async setPopularCourseList() {
            let payload = { id: this.$route.query.id };
            this.courseList = await this.$service.courses.getPopulars(payload);
        },

        setLesson(operator) {
            let index = this.lessonList.indexOf(this.selectedLesson);
            const lastIndex = this.lessonList.length - 1;

            if (operator === 'increment') index++;
            if (operator === 'decrement') index--;

            if (index > lastIndex) index = 0;
            if (index < 0) index = lastIndex;

            this.selectedLesson = this.lessonList[index];

            clearTimeout(this.timer);
            this.startViewAlgorithmLesson();
        },

        openPopup(lesson) {
            this.selectedLesson = lesson;
            clearTimeout(this.timer);
            this.startViewAlgorithmLesson();
        },

        closePopup() {
            this.selectedLesson = {};
            clearTimeout(this.timer);
        },

        // Алгоритмы просмотра курса/урока
        startViewAlgorithmCourse() {
            let payload = { id: this.$route.query.id };
            this.timer = setTimeout(() => {
                this.$service.courses.addView(payload);
            }, 8000);
        },

        startViewAlgorithmLesson() {
            let payload = { 
                id: this.selectedLesson.id,
                courseId: this.$route.query.id,
            };

            this.timer = setTimeout(() => {
                this.$service.lessons.addView(payload);
            }, 60000);
        }
    }
};
</script>

<style lang="scss" scoped>
.course {
    @extend .flex_column;
    background: $color-white-dark;
}

.course__lessons {
    @extend .flex_wrap;
    width: 100%;
    max-width: 1160px;
    min-height: 710px;
    margin-top: 87px;
    padding-bottom: 70px;
    border-bottom: 1px solid $color-silver;
}

.course__card {
    margin-bottom: 30px;

    &:nth-child(4n+2) {
        margin-left: 29px;
        margin-right: 29px;
    }
    &:nth-child(4n+3) {
        margin-right: 29px;
    }
}

.course__popular {
    margin-top: 80px;
}

.course__subscribe {
    margin-top: 110px;
}

.course__preloader {
    width: 80px;
    height: 80px;
    margin: 150px 0;
}

@media screen and (max-width: 1160px) {
    .course {
        align-items: center;
    }

    .course__lessons {
        padding: 0 20px;
        border-bottom: none;
        max-width: 902px;
    }

    .course__card {
        &:nth-child(4n+2) {
            margin-left: 0;
            margin-right: 0;
        }
        &:nth-child(4n+3) {
            margin-right: 0;
        }
        &:nth-child(3n+2) {
            margin-left: 29px;
            margin-right: 29px;
        }
    }

    .course__popular {
        margin-top: 40px;
    }
}

@media screen and (max-width: 867px) {
    .course__lessons {
        max-width: 605px;
        margin-top: 20px;
    }

    .course__card {
        margin-bottom: 20px;

        &:nth-child(3n+2) {
            margin-left: 0;
            margin-right: 0;
        }
        &:nth-child(2n+2) {
            margin-left: 29px;
        }
    }

    .course__popular {
        margin-top: 20px;
    }
}

@media screen and (max-width: 575px) {
    .course__lessons {
        justify-content: center;
        max-width: 100%;
    }

    .course__card {
        &:nth-child(2n+2) {
            margin-left: 0;
        }
    }

    .course__subscribe {
        margin-top: 0;
    }
}
</style>