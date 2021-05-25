<template>
  <div class="courses__wrap">
    <div class="courses">
      <div class="courses__title">Все видеокурсы</div>

      <div class="courses__filter">
        <div v-for="(item, index) in filterList" :key="index" class="courses__filter-item">
          {{ item.name }}
        </div>
      </div>

      <div class="courses__list">
        <div v-for="(item, index) in courseList" :key="index">
          <v-course-card 
            class="cb_bottom30" 
            :title="item.title"
            :lessons="item.lessons"
            :time="item.time"
            :views="item.views"/>
        </div>
      </div>

    </div>

    <block-registration />
  </div>
</template>

<script>
import VCourseCard from '@/components/common/VCourseCard.vue'
import BlockRegistration from '@/components/home/Registration.vue'

export default {
  name: 'Courses',
  components: {
    BlockRegistration,
    VCourseCard,
  },
  data() {
    return {
      filterList: [
        {
          name: 'Все курсы',
        },
        {
          name: 'Игры',
        },
        {
          name: 'Сайты',
        },
        {
          name: 'Языки',
        },
        {
          name: 'Прочее',
        },
        {
          name: 'Платные',
        },
        {
          name: 'Бесплатные',
        },
      ],
      courseList: [
        {
          title: 'Первый курс',
          lessons: '3 урока',
          time: '22 ч. 11 м.',
          views: '222',
        },
        {
          title: 'Второй курс',
          lessons: '1 урок',
          time: '12 ч. 22 м.',
          views: '22',
        },
        {
          title: 'Третий курс',
          lessons: '66 уроков',
          time: '2 ч. 2 м.',
          views: '44',
        },
        {
          title: 'Четвертый курс',
          lessons: '16 уроков',
          time: '22 ч. 23 м.',
          views: '54',
        },
        {
          title: 'Пятый курс',
          lessons: '6 уроков',
          time: '32 ч. 3 м.',
          views: '588',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.courses__wrap {
  background: #f4f4f4;
}

.courses {
  width: 1160px;
  min-height: 1840px;

  padding: 100px 0px 100px 0px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272A37;
  }

  &__filter {
    @extend .cb_row-between;
    width: 1000px;
    height: 50px;

    margin-top: 30px;
  }

  &__filter-item {
    @extend .cb_center;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 18px;
    color: #272A37;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #E2E2E2;
    border-radius: 8px;
  }

  &__list {
    margin-top: 60px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

// hovers
:hover.courses {
  &__filter-item {
    cursor: pointer;
    color: #FFFFFF;
    background: #256CFE;
  }
}
</style>
