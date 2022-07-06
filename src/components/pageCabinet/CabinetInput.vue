<template>
    <div class="input__wrap">
        <label class="input__label">
            <slot>Label</slot>
        </label>

        <div
            class="input"
            :class="componentClasses"
        >
            <input
                class="input__field"
                :value="value"
                type="text"
                :readonly="readonly"
                maxlength="25"
                @input="onInput($event.target.value)"
                @focus="onFocus"
                @blur="onBlur"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CabinetInput',

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        value: {
            type: [String, Number],
            default: ''
        },

        readonly: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        componentClasses() {
            return { 
                'input_focus': this.isFocus && !this.readonly,
                'input_hover': !this.readonly
            }
        }
    },

    data() {
        return {
            isFocus: false
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
        }
    }
};
</script>

<style lang="scss" scoped>
.input {
    width: 550px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0px 25px;
    margin-top: 20px;
    border: 1px solid $color-silver;
    border-radius: 18px;
}

.input__label {
    pointer-events: none;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: $color-gray;
}

.input__field {
    width: 100%;
    font-size: 24px;
    letter-spacing: -0.01em;
    color: $color-black;
    border: none;
    background: transparent;
    outline: none;
    cursor: default;
}

// Модификаторы
.input_focus {
    border-color: $color-pink;
}

.input_hover {
    &:hover {
        border-color: $color-pink;
        cursor: pointer;

        .input__field {
            cursor: text;
        }
    }
}

@media screen and (max-width: 767px) {
    .input {
        width: 100%;
        height: 58px;
        padding: 0px 18px;
        margin-top: 10px;
        border-radius: 10px;
    }

    .input__label {
        font-size: 16px;
    }

    .input__field {
        font-size: 16px;
    }
}
</style>