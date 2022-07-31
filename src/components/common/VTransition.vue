<template>
    <transition name="fade">
        <slot />
    </transition>
</template>

<script>
export default {
    name: 'VTransition',
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>