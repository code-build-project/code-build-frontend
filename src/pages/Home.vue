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
import BlockIntro from '@/components/pageHome/BlockIntro';
import BlockActuality from '@/components/pageHome/BlockActuality';
import BlockCourses from '@/components/pageHome/BlockCourses';
import BlockArticles from '@/components/pageHome/BlockArticles';
import BlockSubscribe from '@/components/blocks/BlockSubscribe';
import BlockReviews from '@/components/pageHome/BlockReviews';
import BlockRegistration from '@/components/blocks/BlockRegistration';

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
};
</script>