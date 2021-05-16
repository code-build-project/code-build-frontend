<template>
  <div class="home">
    <block-intro />

    <block-actuality />

    <block-courses />

    <block-articles />

    <block-subscribe />

    <block-reviews />

    <block-registration />
  </div>
</template>

<script>
import BlockIntro from '@/components/home/Intro.vue'
import BlockActuality from '@/components/home/Actuality.vue'
import BlockCourses from '@/components/home/Courses.vue'
import BlockArticles from '@/components/home/Articles.vue'
import BlockSubscribe from '@/components/home/Subscribe.vue'
import BlockReviews from '@/components/home/Reviews.vue'
import BlockRegistration from '@/components/home/Registration.vue'

export default {
  name: 'Home',
  components: {
    BlockIntro,
    BlockActuality,
    BlockCourses,
    BlockArticles,
    BlockSubscribe,
    BlockReviews,
    BlockRegistration,
  }
}
</script>
