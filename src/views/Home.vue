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
import BlockIntro from '@/components/blocks/BlockIntro.vue'
import BlockActuality from '@/components/blocks/BlockActuality.vue'
import BlockCourses from '@/components/blocks/BlockCourses.vue'
import BlockArticles from '@/components/blocks/BlockArticles.vue'
import BlockSubscribe from '@/components/blocks/BlockSubscribe.vue'
import BlockReviews from '@/components/blocks/BlockReviews.vue'
import BlockRegistration from '@/components/blocks/BlockRegistration.vue'

export default {
  name: 'Home',
  components: {
    BlockIntro,
    BlockActuality,
    BlockCourses,
    BlockArticles,
    BlockSubscribe,
    BlockReviews,
    BlockRegistration
  }
}
</script>