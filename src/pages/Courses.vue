<template>
    <div class="courses__wrap">
        <div class="courses">
            <h1 class="courses__title">Все видеокурсы</h1>

            <v-filter-group
                v-model="filterId"
                class="courses__filters"
                :array="filterList"
                @change="setCourses()"
            />

            <card-preloader 
                v-if="isPageLoading" 
                class="courses__preloader" 
            />

            <div 
                v-else 
                class="courses__list"
            >
                <card-course
                    v-for="(item, index) in courseList" 
                    :key="index"
                    class="courses__card"
                    :course="item"
                    @click="$router.push(`/course?id=${item.id}`)"
                />
            </div>
        </div>

        <block-registration class="courses__reg" />
    </div>
</template>

<script>
import CardCourse from '@/components/cards/CardCourse';
import CardPreloader from '@/components/cards/CardPreloader';
import VFilterGroup from '@/components/common/VFilterGroup';
import BlockRegistration from '@/components/blocks/BlockRegistration';

export default {
    name: 'Courses',

    components: {
        CardCourse,
        CardPreloader,
        VFilterGroup,
        BlockRegistration
    },

    data() {
        return {
            filterId: '',
            filterList: [],
            courseList: [],
            isPageLoading: false
        };
    },

    methods: {
        async setCourses() {
            this.isPageLoading = true;
            this.courseList = await this.$service.courses.getCoursesList({ tag: this.filterId });
            this.isPageLoading = false;
        },

        async setFilters() {
            this.filterList = await this.$store.dispatch('tags/getCourseList', this);
        }
    },

    created() {
        this.setFilters();
        this.setCourses();
    }
};
</script>

<style lang="scss" scoped>
.courses__wrap {
    background: #f4f4f4;
}

.courses {
    @extend .container;
}

.courses__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -1px;
    color: $color-black;
}

.courses__filters {
    margin-top: 30px;
}

.courses__preloader {
    margin-top: 60px;
}

.courses__list {
    @extend .flex_wrap;
    margin-top: 60px;
}

.courses__card {
    margin-bottom: 30px;

    &:nth-child(3n+2) {
        margin-left: 29px;
        margin-right: 29px;
    }
}

@media screen and (max-width: 1160px) {
    .courses__title {
        text-align: center;
    }

    .courses__filters {
        display: flex;
        justify-content: center;
    }

    .courses__list {
        justify-content: center;
    }

    .courses__card {
        &:nth-child(3n+2) {
            margin-left: 0;
            margin-right: 0;
        }
        &:nth-child(2n+2) {
            margin-left: 29px;
        }
    }
}

@media screen and (max-width: 767px) {
    .courses__card {
        &:nth-child(2n+2) {
            margin-left: 0;
        }
    }
}

@media screen and (max-width: 575px) {
    .courses__title {
        font-size: 32px;
    }

    .courses__filters {
        margin-top: 20px;
    }

    .courses__preloader {
        margin-top: 30px;
    }

    .courses__list {
        margin-top: 30px;
    }

    .courses__card {
        margin-bottom: 20px;
    }
}
</style>