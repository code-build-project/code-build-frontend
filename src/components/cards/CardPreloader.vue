<template>
    <div class="preloader">
        <div 
            v-for="(item, index) in new Array(6)" 
            :key="index" 
            class="preloader__card" 
        />
    </div>
</template>

<script>
export default {
    name: 'CardPreloader'
};
</script>

<style lang="scss" scoped>
.preloader {
    @extend .flex_wrap;
}

.preloader__card {
    width: 367px;
    height: 465px;
    margin-bottom: 30px;
    background: linear-gradient(-90deg, $color-white-dark, $color-silver);
    background-size: 200% 200%;
    border-radius: 8px;
    animation: gradient 1.5s linear infinite;

    &:nth-child(3n+2) {
        margin-left: 29px;
        margin-right: 29px;
    }
}

@keyframes gradient {
    0% {
        background-position: 0% 100%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 50% 100%;
    }
}

@media screen and (max-width: 1160px) {
    .preloader {
        justify-content: center;
    }

    .preloader__card {
        &:nth-child(3n+2) {
            margin-left: 0;
            margin-right: 0;
        }
        &:nth-child(2n+2) {
            margin-left: 29px;
        }
    }
}

@media screen and (max-width: 767px) {
    .preloader__card {
        &:nth-child(2n+2) {
            margin-left: 0;
        }
    }
}

@media screen and (max-width: 575px) {
    .preloader__card {
        width: 280px;
        height: 378px;
        margin-bottom: 20px;
        border-radius: 6px;
    }
}
</style>