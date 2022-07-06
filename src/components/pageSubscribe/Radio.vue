<template>
    <div 
        class="radio" 
        :class="componentClasses" 
        @click="$emit('change', price)"
    >
        <div class="radio__main">
            <input
                :id="keyField"
                class="radio__input"
                type="radio"
                :value="price"
                :checked="isChecked"
                name="subscribe"
                @change="$emit('change', price)"
            />
            <label 
                class="radio__label" 
                :for="keyField" 
            />

            <div class="radio__title">
                <slot>1 месяц подписки</slot>
                <div 
                    v-if="economy" 
                    class="radio__economy"
                >
                    {{ textEconomy }}
                </div>
            </div>
        </div>

        <div class="radio__price">{{ price }}₽</div>
    </div>
</template>

<script>
import window from '@/mixins/window';

export default {
    name: 'SubscribeRadio',

    model: {
        prop: 'picked',
        event: 'change'
    },

    mixins: [window],

    props: {
        // Значение выбранного переключателя
        picked: {
            type: [Number, String],
            default: ''
        },
        // Уникальный ключ чекбокса
        keyField: {
            type: [Number, String],
            default: 1
        },
        // Ценник
        price: {
            type: [Number, String],
            default: '99'
        },
        // Экономия про покупке больше чем месяц
        economy: {
            type: [Number, String],
            default: ''
        }
    },

    computed: {
        isChecked() {
            return this.picked === this.price;
        },

        componentClasses() {
            return { 
                'radio_focus': this.isChecked 
            }
        },

        textEconomy() {
            return this.isDesktop ? `Экономия — ${this.economy}₽` : `-${this.economy}₽`;
        }
    }
};
</script>

<style lang="scss" scoped>
.radio {
    @extend .flex_row-center-between;
    width: 550px;
    height: 100px;
    padding: 0px 34px;
    border: 1px solid $color-silver;
    border-radius: 18px;

    &:hover {
        border-color: $color-pink;
        cursor: pointer;
    }

    &__main {
        @extend .flex_row;
    }

    &__title {
        @extend .flex_column-center;
        margin-left: 30px;
        font-size: 24px;
        letter-spacing: -0.01em;
        color: $color-black;
    }

    &__price {
        font-family: 'ObjectSans';
        font-size: 38px;
        letter-spacing: -0.01em;
        color: $color-black;
    }

    &__economy {
        @extend .flex_row-center-center;
        width: 108px;
        height: 28px;
        font-size: 12px;
        letter-spacing: -0.01em;
        color: $color-pink;
        background: #fff1f5;
        border-radius: 15px;
        margin-top: 10px;
    }

    &_focus {
        border-color: $color-pink;
    }
}

/* для элемента input c type="radio" */
.radio__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

/* для элемента label, связанного с .custom-radio */
.radio__input + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding-top: 2px;
}

/* создание в label псевдоэлемента before со следующими стилями */
.radio__input + label::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $color-silver;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 55% 55%;
    cursor: pointer;

    &:hover {
        border-color: $color-pink;
    }
}

/* стили при наведении курсора на radio */
.radio__input:not(:disabled):not(:checked) + label:hover::before {
    border-color: $color-pink;
}

/* стили для активного чекбокса (при нажатии на него) */
.radio__input:not(:disabled):active + label::before {
    background-color: transparent;
    border-color: transparent;
}

/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.radio__input:focus:not(:checked) + label::before {
    border-color: $color-pink;
}

/* стили для чекбокса, находящегося в состоянии checked */
.radio__input:checked + label::before {
    border-color: $color-pink;
    background-color: $color-pink;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 11'%3e%3cpath fill='white' d='M5.75014 8.2755L13.7931 0.231628L15.0313 1.46888L5.75014 10.75L0.181641 5.1815L1.41889 3.94425L5.75014 8.2755Z'/%3e%3c/svg%3e");
}

/* стили для чекбокса, находящегося в состоянии disabled */
.radio__input:disabled + label::before {
    background-color: #e9ecef;
}

@media screen and (max-width: 1160px) {
    .radio__economy {
        width: 46px;
        height: 27px;
        font-size: 14px;
        border-radius: 56px;
    }
}

@media screen and (max-width: 767px) {
    .radio {
        width: 100%;
        height: 58px;
        padding: 0px 18px;
        border-radius: 10px;

        &__title {
            flex-direction: row;
            align-items: center;
            margin-left: 12px;
            font-size: 14px;
        }

        &__price {
            font-size: 22px;
        }

        &__economy {
            margin-top: 0;
            margin-left: 10px;
        }
    }
}
</style>