<template>
    <div 
        v-if="isAuth" 
        class="cabinet"
    >
        <block-main class="cabinet__main" />

        <block-premium class="cabinet__premium" />
    </div>
</template>

<script>
import BlockMain from '@/components/pageCabinet/BlockMain';
import BlockPremium from '@/components/pageCabinet/BlockPremium';
import { mapGetters } from 'vuex';

export default {
    name: 'Cabinet',

    components: {
        BlockMain,
        BlockPremium
    },

    computed: {
        ...mapGetters(['isAuth'])
    },

    created() {
        if (!this.isAuth) {
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.cabinet {
    @extend .flex_column;
    padding: 40px;
    background: $color-white-dark;
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