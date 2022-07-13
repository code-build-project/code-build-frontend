<template>
    <div 
        class="question" 
        :class="{ 'question_open': isDropdown }"
        @click="toggle"
    >
        <div class="question__title">
            Какие преимущества даёт Премиум подписка?

            <v-icon
                class="question__icon-angle-bracket"
                path="img/angleBracketMenu.svg"
            />
        </div>

        <div
            ref="dropdown"
            class="question__dropdown"
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

    data() {
        return {
            isDropdown: false
        };
    },

    methods: {
        toggle() {
            this.isDropdown = !this.isDropdown;
            let maxHeight = this.$refs.dropdown.style.maxHeight;
            let scrollHeight = this.$refs.dropdown.scrollHeight;
            this.$refs.dropdown.style.maxHeight = maxHeight ? null : scrollHeight + 'px';
        }
    },
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

        .question__icon-angle-bracket {
            stroke: $color-blue;
        }
    }
}

.question__dropdown {
    max-height: 0;
    overflow: hidden;
    font-weight: 350;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-black;
    transition: max-height 0.3s ease-out;
}

// Иконки
.question__icon {
    &-angle-bracket {
        width: 16px;
        height: 12px;
        stroke: #323232;
        stroke-width: 6px;
    }
}

// Модификаторы
.question_open {
    .question__icon-angle-bracket {
        transform: rotate(180deg);
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