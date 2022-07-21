<template>
    <div class="course">
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
                @click="selectedLesson = item"
            />
        </div>

        <block-popular 
            v-if="course.id" 
            class="course__popular" 
            :courseList="courseList" 
        />

        <block-subscribe class="course__subscribe" />

        <popup-player
            v-if="selectedLesson.id"
            :lesson="selectedLesson"
            :lessonsLength="lessonList.length"
            @close="selectedLesson = {}"
            @clickLeft="setLesson('decrement')"
            @clickRight="setLesson('increment')"
        />
    </div>
</template>

<script>
import PopupPlayer from '@/components/pageCourse/PopupPlayer';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import CardMiniLesson from '@/components/cards/CardMiniLesson';
import CourseCover from '@/components/pageCourse/Cover';
import BlockPopular from '@/components/blocks/BlockPopular';

export default {
    name: 'Course',

    components: {
        PopupPlayer,
        BlockSubscribe,
        CardMiniLesson,
        CourseCover,
        BlockPopular
    },

    data() {
        return {
            lessonList: [],
            courseList: [],
            course: {},
            selectedLesson: {}
        };
    },

    methods: {
        async setLessons() {
            let payload = { courseId: this.$route.query.id };
            this.lessonList = await this.$service.lessons.getLessonList(payload);
            this.lessonList.push(this.lessonList[0])
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
        }
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
    },
};
</script>

<style lang="scss" scoped>
.course {
    @extend .flex_column;
    background: #f4f4f4;
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