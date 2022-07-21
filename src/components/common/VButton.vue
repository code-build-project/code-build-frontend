<template>
    <button 
        class="button" 
        :class="classType" 
        @click="$emit('click')"
    >
        <slot v-if="isLoaded">Кнопка</slot>

        <div v-else class="button__preloader-wrap">
            <div class="button__preloader" />
        </div>
    </button>
</template>

<script>
export default {
    name: 'VButton',

    props: {
        // Флаг отображения прелоадера
        isLoaded: {
            type: Boolean,
            default: true
        },
        // Тип стилизации кнопки
        type: {
            type: String,
            default: 'normal',
            validator: (value) => {
                return ['normal', 'primary', 'disabled', 'active'].includes(value);
            }
        }
    },

    computed: {
        classType() {
            return this.isLoaded ? `button_type-${this.type}` : 'button_type-disabled';
        }
    }
};
</script>

<style lang="scss" scoped>
.button {
    @extend .flex_row-center-center;
    border-style: solid;
    border-radius: 8px;
    transition: ease-out 0.2s;
}

.button_type {
    &-normal {
        color: $color-black;
        background: transparent;
        border-color: $color-silver;
        border-width: 1px;
    }

    &-primary {
        color: $color-white;
        background: $color-blue;
        border: none;
        
        @media screen and (min-width: 1160px) {
            &:hover {
                box-shadow: 0px 27px 19px -18px rgba(37, 108, 254, 0.31);
            }
        }
    }

    &-disabled {
        color: $color-black;
        background: transparent;
        border-color: $color-gray;
        border-width: 1px;
        pointer-events: none;
    }

    &-active {
        color: $color-white;
        border: none;
        background: $color-pink;
        
        @media screen and (min-width: 1160px) {
            &:hover {
                box-shadow: 0px 12px 18px -13px $color-pink;
            }
        }
    }
}

.button__preloader-wrap {
    width: 30px;
    height: 30px;
}

.button__preloader {
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