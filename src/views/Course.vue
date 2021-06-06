<template>
  <div class="course__wrap">
    <block-course-cover />

    <div class="course">
      <div class="course__lessons">
        <div
          v-for="(item, index) in lessonsList"
          :key="index"
        >
          <v-lesson-card 
            class="cb_bottom30" 
            :class="[
              {'cb_left22': (index - 1) % 4 === 0},
              {'cb_left22 cb_right22': (index - 1) % 2 === 0}
            ]" 
            :title="item.title"
            :lesson-namber="item.lessonNamber"
            :time="item.time"
            :views="item.views"
            @click="isPlayer = true"
          />
        </div>
      </div>

      <div class="course__useful cb_top80">
        <div>Также стоит посмотреть</div>

        <div class="cb_row-between cb_top50">
          <v-course-card />

          <v-course-card />

          <v-course-card />
        </div>
      </div>
    </div>

    <block-subscribe />

    <v-media-player
      v-if="isPlayer"
      @close="isPlayer = false"
    />
  </div>
</template>

<script>
import VLessonCard from '@/components/common/VLessonCard.vue'
import VCourseCard from '@/components/common/VCourseCard.vue'
import VMediaPlayer from '../components/common/VMediaPlayer.vue'

import BlockCourseCover from '@/components/blocks/BlockCourseCover.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'

export default {
  name: 'Course',
  components: {
    VLessonCard,
    VCourseCard,
    VMediaPlayer,
    BlockCourseCover,
    BlockSubscribe,
  },
  data() {
    return {
      isPlayer: false,

      lessonsList: [
        {
          title: 'Первый урок',
          lessonNamber: '1',
          time: '22 ч. 11 м.',
          views: '222',
        },
        {
          title: 'Второй урок',
          lessonNamber: '2',
          time: '12 ч. 22 м.',
          views: '22',
        },
        {
          title: 'Третий урок',
          lessonNamber: '3',
          time: '2 ч. 2 м.',
          views: '44',
        },
        {
          title: 'Четвертый урок',
          lessonNamber: '4',
          time: '22 ч. 23 м.',
          views: '54',
        },
        {
          title: 'Пятый урок',
          lessonNamber: '5',
          time: '32 ч. 3 м.',
          views: '588',
        },
        {
          title: 'Шестой урок',
          lessonNamber: '6',
          time: '12 ч. 22 м.',
          views: '22',
        },
        {
          title: 'Седьмой урок',
          lessonNamber: '7',
          time: '2 ч. 2 м.',
          views: '44',
        },
        {
          title: 'Восьмой урок',
          lessonNamber: '8',
          time: '22 ч. 23 м.',
          views: '54',
        },
        {
          title: 'Девятый урок',
          lessonNamber: '9',
          time: '32 ч. 3 м.',
          views: '588',
        },
        {
          title: 'Десятый урок',
          lessonNamber: '10',
          time: '22 ч. 23 м.',
          views: '54',
        },
        {
          title: 'Одинадцатый урок',
          lessonNamber: '11',
          time: '32 ч. 3 м.',
          views: '588',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.course__wrap {
  background: #f4f4f4;
}

.course {
  @extend .cb_column;
  width: 1160px;
  min-height: 1578px;

  padding: 109px 0px 110px 0px;
  box-sizing: border-box;

  &__lessons {
    min-height: 710px;

    display: flex;
    flex-wrap: wrap;

    padding-bottom: 70px;
    border-bottom: 1px solid #E4E4E4;
  }

  &__useful {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272A37;
  }
}
</style>