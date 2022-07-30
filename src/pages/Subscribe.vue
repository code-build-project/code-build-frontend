<template>
    <div class="subscribe">
        <block-main class="subscribe__main" />

        <block-questions class="subscribe__questions" />
    </div>
</template>

<script>
import BlockMain from '@/components/pageSubscribe/BlockMain';
import BlockQuestions from '@/components/pageSubscribe/BlockQuestions';

export default {
    name: 'Subscribe',

    components: {
        BlockMain,
        BlockQuestions
    },
};
</script>

<style lang="scss" scoped>
.subscribe {
    @extend .flex_column;
    padding: 40px;
    background: $color-white-dark;
}

.subscribe__questions {
    margin-top: 40px;
}

@media screen and (max-width: 575px) {
    .subscribe {
        padding: 20px;
    }

    .subscribe__questions {
        margin-top: 20px;
    }
}
</style>