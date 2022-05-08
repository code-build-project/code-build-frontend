<template>
    <div class="preloader">
        <div class="preloader__circle" />
    </div>
</template>

<script>
export default {
    name: 'VPreloader'
};
</script>

<style lang="scss" scoped>
.preloader {
    display: flex;
    align-items: center;
    justify-content: center;
}

.preloader__circle {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: 3px solid transparent;
        border-top-color: $color-blue;
        top: -3px;
        left: -3px;
    }

    &:before {
        z-index: 1;
        animation: spin 1s infinite;
    }

    &:after {
        border: 3px solid transparent;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>