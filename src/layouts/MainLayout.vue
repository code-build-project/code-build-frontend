<template>
    <div class="layout">
        <Header />
        <router-view class="layout__content" />
        <Footer />
    </div>
</template>

<script>
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

export default {
    name: 'MainLayout',
    
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.layout {
    @extend .flex_column-between-center;
    height: 100%;

    &__content {
        @extend .flex_column-start-center;
        width: 100%;
    }
}
</style>