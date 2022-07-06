<template>
    <div 
        class="question" 
        @click="isDropdown = !isDropdown"
    >
        <div class="question__title">
            Какие преимущества даёт Премиум подписка?

            <v-icon
                class="question__icon-angle-bracket"
                path="img/angleBracketMenu.svg"
                :style="iconStyles"
            />
        </div>

        <div
            class="question__dropdown"
            :class="dropdownClasses"
        >
            Премиум подписка даёт вам доступ к платным курсам и их обновлениям, в течении выбранного
            срока подписки.
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'SubscribeQuestion',
    
    components: {
        VIcon
    },

    computed: {
        iconStyles() {
            return this.isDropdown ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'
        },

        dropdownClasses() {
            return this.isDropdown ? 'animation-appearance' : 'animation-disappearance'
        }
    },

    data() {
        return {
            isDropdown: false
        };
    }
};
</script>

<style lang="scss" scoped>
.question {
    @extend .flex_column;
    width: 550px;
    padding: 34px 0;
    border-bottom: 1px solid $color-silver;
    cursor: pointer;
}

.question__title {
    @extend .flex_row-center-between;
    font-size: 20px;
    color: $color-black;
    background: $color-white;
    position: relative;

    &:hover {
        color: $color-blue;
    }
}

.question__dropdown {
    font-weight: 350;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-black;
}

.animation-appearance {
    opacity: 0;
    animation: appearance 0.7s linear forwards;
}

.animation-disappearance {
    opacity: 1;
    animation: disappearance 0.7s linear forwards;
}

@keyframes appearance {
    0% {
        margin-top: -30px;
    }
    100% {
        opacity: 1;
        margin-top: 15px;
    }
}

@keyframes disappearance {
    0% {
        margin-top: 15px;
    }
    100% {
        margin-top: -30px;
        opacity: 0;
    }
}

// Иконки
.question__icon {
    &-angle-bracket {
        width: 16px;
        height: 12px;
        stroke: #323232;
        stroke-width: 6px;

        &:hover {
            stroke: $color-blue;
        }
    }
}

@media screen and (max-width: 1160px) {
    .question {
        width: 100%;
    }
}

@media screen and (max-width: 575px) {
    .question {
        padding: 14px 0;
    }

    .question__title {
        font-size: 14px;
        line-height: 13px;
    }

    .question__dropdown {
        font-size: 14px;
        line-height: 13px;
    }

    .question__icon-angle-bracket {
        width: 29px;
        height: 5px;
    }
}
</style>