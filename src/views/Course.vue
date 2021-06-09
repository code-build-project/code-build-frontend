<template>
  <div class="course__wrap">
    <block-course-cover />

    <div class="course">
      <div class="course__lessons">
        <div
          v-for="(item, index) in lessonList"
          :key="index"
        >
          <v-lesson-card
            class="cb_bottom30"
            :class="[
              { 'cb_left22': (index - 1) % 4 === 0 },
              { 'cb_left22 cb_right22': (index - 1) % 2 === 0 }
            ]"
            :title="item.title"
            :lesson-number="item.lessonNumber"
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
import VMediaPlayer from '@/components/common/VMediaPlayer.vue'

import BlockCourseCover from '@/components/blocks/BlockCourseCover.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'

export default {
  name: 'Course',
  components: {
    VLessonCard,
    VCourseCard,
    VMediaPlayer,
    BlockCourseCover,
    BlockSubscribe
  },
  data() {
    return {
      isPlayer: false,

      lessonList: []
    }
  },

  created() {
    this.axios.get('http://127.0.1.1:4000/lessons')
    .then((request) => {
      this.lessonList = request.data;
    })
  }
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
    border-bottom: 1px solid #e4e4e4;
  }

  &__useful {
    font-family: 'ObjectSans';
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -1px;
    color: #272a37;
  }
}
</style>