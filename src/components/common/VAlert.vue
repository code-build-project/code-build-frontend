<template>
    <transition name="fade-bottom">
        <div v-if="isAlert" class="alert">
            <div class="message">
                {{ message }}
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('alert', ['isAlert', 'message'])
    },

    methods: {
        startTimer() {
            setTimeout(this.stopTimer, 3000);
        },

        stopTimer() {
            this.$store.commit('alert/close');
        }
    },

    watch: {
        isAlert(value) {
            if (value === true) {
                this.startTimer();
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.alert {
    @extend .flex_row-center-center;
    color: $color-white;
    width: 500px;
    margin-left: calc(50% - 250px);
    z-index: 10;
    position: fixed;
    bottom: 40px;
}

.message {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    padding: 8px 16px;
}

// Анимация
.fade-bottom-enter-active,
.fade-bottom-leave-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.fade-bottom-enter,
.fade-bottom-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
</style>