<template>
    <div 
        class="input" 
        :class="componentClasses"
    >
        <input
            class="input__field"
            :value="value"
            :type="isPassword ? 'password' : 'text'"
            required="true"
            @input="onInput($event.target.value)"
            @focus="onFocus"
            @blur="onBlur"
        />
        <label class="input__label">
            <slot>Label</slot>
        </label>

        <div 
            v-if="errorMessage" 
            class="input__error"
        >
            {{ errorMessage }}
        </div>

        <div 
            v-if="type === 'password'" 
            class="input__icon-group"
        >
            <v-icon
                v-if="isPassword"
                class="input__icon"
                path="img/closeEye.svg"
                @click="onClickIcon(false)"
            />

            <v-icon 
                v-else 
                class="input__icon" 
                path="img/openEye.svg" 
                @click="onClickIcon(true)" 
            />
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'VInput',

    components: {
        VIcon
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        // Значение текста в поле
        value: {
            type: [String, Number],
            default: ''
        },
        // Тип поля
        type: {
            type: String,
            default: 'text'
        },
        // Текст ошибки
        errorMessage: {
            type: String,
            default: ''
        }
    },

    computed: {
        componentClasses() {
            return {
                input_focus: this.isFocus || this.value,
                input_error: this.errorMessage,
                input_password: this.type === 'password'
            };
        }
    },

    data() {
        return {
            isFocus: false,
            isPassword: this.type === 'password'
        };
    },

    methods: {
        onFocus() {
            this.isFocus = true;
        },

        onBlur() {
            this.isFocus = false;
            this.$emit('blur');
        },

        onInput(event) {
            this.$emit('change', event);
        },

        onClickIcon(value) {
            this.isPassword = value;
        }
    }
};
</script>

<style lang="scss" scoped>
.input {
    position: relative;
    width: 100%;
    height: 55px;
    font-family: 'Circe';
    border-bottom: 1px solid $color-gray;
}

.input__label {
    pointer-events: none;
    position: absolute;
    transition: all 200ms;
    left: 0;
    bottom: 15px;
    font-family: 'Circe';
    font-size: 17px;
    color: $color-gray;
}

.input__field {
    width: 95%;
    margin-top: 20px;
    font-size: 17px;
    line-height: 16px;
    border: none;
    background: transparent;
    color: $color-black;
    outline: none;
}

.input__icon-group {
    position: absolute;
    right: 0px;
    top: 25px;
}

.input__icon {
    width: 21px;
    height: 15px;
    fill: $color-silver;
}

.input__error {
    position: absolute;
    top: 60px;
    font-size: 13px;
    color: $color-red;
}

// Модификаторы
.input_focus {
    border-color: $color-blue;

    .input__label {
        font-size: 13px;
        bottom: 40px;
    }
}

.input_error {
    border-color: $color-red;
}

.input_password {
    .input__field {
        padding-right: 20px;
    }
}

@media screen and (max-width: 575px) {
    .input {
        height: 40px;
    }

    .input__label {
        bottom: 9px;
        font-size: 15px;
    }

    .input__field {
        font-size: 15px;
        line-height: 9px;
        margin-top: 13px;
    }

    .input__error {
        top: 43px;
        font-size: 11px;
    }

    .input__icon-group {
        top: 18px;
    }

    .input__icon {
        width: 17px;
        height: 12px;
    }

    // Модификаторы
    .input_focus {
        .input__label {
            font-size: 11px;
            bottom: 26px;
        }
    }
}
</style>