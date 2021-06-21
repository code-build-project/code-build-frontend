<template>
  <div class="favorites__wrap">
    <div class="favorites">
      <!-- Фильтры -->
      <div class="cb_row">
        <div class="favorites__title">
          Избранное
        </div>

        <div class="favorites__filter cb_left50">
          <div
            v-for="(item, index) in filterList"
            :key="index"
            class="favorites__filter-item"
            :class="{'favorites_filter-active': filterId === item.filterId}"
            @click="filterId = item.filterId"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <!-- Фильтры -->

      <div class="favorites__list cb_top60">
        <div
          v-for="(item, index) in itemList"
          :key="index"
        >
          <v-course-card
            v-if="filterId === 1"
            class="cb_bottom30"
            :class="{ 'cb_left29 cb_right29': (index - 1) % 3 === 0 }"
            :title="item.title"
            :level="item.level"
            :lessons="item.lessons"
            :time="item.time"
            :views="item.views"
            @click="$router.push('/course')"
          />

          <v-lesson-card
            v-if="filterId === 2"
            class="cb_bottom30"
            :class="{ 'cb_left29 cb_right29': (index - 1) % 3 === 0 }"
            :title="item.title"
            :course-title="item.courseTitle"
            :time="item.time"
            :views="item.views"
          />

          <v-article-card
            v-if="filterId === 3"
            class="cb_bottom30"
            :class="{ 'cb_left29 cb_right29': (index - 1) % 3 === 0 }"
            :title="item.title"
            :time="item.time"
            :views="item.views"
            @click="$router.push('/article')"
          />
        </div>
      </div>
    </div>

    <block-subscribe />
  </div>
</template>

<script>
import VCourseCard from '@/components/common/VCourseCard.vue'
import VLessonCard from '@/components/common/VLessonCard.vue'
import VArticleCard from '@/components/common/VArticleCard.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'

export default {
  name: 'Favorites',
  components: {
    VCourseCard,
    VLessonCard,
    VArticleCard,
    BlockSubscribe
  },
  data() {
    return {
      filterId: 1,

      filterList: [
        {
          name: 'Курсы',
          filterId: 1,
        },
        {
          name: 'Уроки',
          filterId: 2,
        },
         {
          name: 'Статьи',
          filterId: 3,
        }
      ],
      
      courseList: [
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
        {
          title: 'Создание сайта с нуля на CMS WordPress',
          level: '2',
          lessons: '6 уроков',
          time: '1 ч. 25 мин.',
          views: '300'
        },
      ],

      lessonList: [
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
        {
          title: 'Установка всего необходимого',
          courseTitle: 'Создание сайта с нуля на CMS WordPress',
          time: '5 м. 34 с.',
          views: '250'
        },
      ],

      articleList: [
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
        {
          title: 'Новые открытия в сфереискуственного интеллекта',
          time: '15 м.',
          views: '150'
        },
      ]
    }
  },
  computed: {
    itemList() {
      switch (this.filterId) {
        case 1:
          return this.courseList
        case 2:
          return this.lessonList
        case 3:
          return this.articleList
        default:
          return this.courseList
      }
    }
  },
  
  created() {
    // this.axios.get('http://127.0.1.1:4000/courses')
    // .then((request) => {
    //   this.courseList = request.data;
    // })

    // this.axios.get('http://127.0.1.1:4000/courses/filters')
    // .then((request) => {
    //   this.filterList = request.data;
    // })
  }
}
</script>

<style lang="scss" scoped>
.favorites__wrap {
  background: #f4f4f4;
}

.favorites {
  width: 1160px;
  min-height: 1600px;

  padding: 100px 0px 110px 0px;

  &__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__filter {
    @extend .cb_row-between;
    width: 380px;
    height: 50px;
  }

  &__filter-item {
    @extend .cb_center;
    font-family: 'Circe';
    font-size: 18px;
    line-height: 18px;
    color: #272a37;

    padding: 1em 1.7em 1em 1.7em;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
}

// Модификаторы
.favorites {
  &_filter-active {
    color: #ffffff;
    background: #256cfe;
  }
}

// hovers
:hover.favorites {
  &__filter-item {
    cursor: pointer;
    color: #ffffff;
    background: #256cfe;
  }
}
</style>