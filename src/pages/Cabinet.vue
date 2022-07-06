<template>
    <div class="cabinet">
        <block-main class="cabinet__main" />

        <block-premium class="cabinet__premium" />
    </div>
</template>

<script>
import BlockMain from '@/components/pageCabinet/BlockMain';
import BlockPremium from '@/components/pageCabinet/BlockPremium';

export default {
    name: 'Cabinet',

    components: {
        BlockMain,
        BlockPremium
    }
};
</script>

<style lang="scss" scoped>
.cabinet {
    @extend .flex_column;
    padding: 40px;
    background: #f4f4f4;
}

.cabinet__premium {
    margin-top: 40px;
}

@media screen and (max-width: 575px) {
    .cabinet {
        padding: 20px;
    }

    .cabinet__premium {
        margin-top: 20px;
    }
}
</style>