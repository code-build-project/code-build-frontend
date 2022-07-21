<template>
    <div class="popup">
        <div class="popup__form">
            <v-icon
                class="popup__icon-close"
                path="img/close.svg"
                @click="$emit('close')"
            />

            <h2 class="popup__title">Опачки!</h2>

            <p class="popup__text">
                На данный момент сервис не имеет платного контента.<br />
                Вы можете получить доступ ко всем ресурсам после авторизации.
            </p>

            <v-button 
                class="popup__button"
                @click="$emit('close')"
            >
                Понятно
            </v-button>
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

// Mixins
import popup from '@/mixins/popup';

export default {
    name: 'PopupSubscribe',

    components: {
        VIcon,
        VButton
    },

    mixins: [popup],
};
</script>

<style lang="scss" scoped>
.popup {
    @extend .flex_row-center-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(18px);
}

.popup__form {
    @extend .flex_column;
    position: relative;
    width: 488px;
    height: 600px;
    padding: 70px 64px;
    background: $color-white;
    border-radius: 8px;
}

.popup__title {
    margin-top: 15px;
    font-family: 'ObjectSans';
    font-size: 34px;
    color: $color-black;
}

.popup__text {
    margin-top: 40px;
    font-size: 25px;
    line-height: 33px;
    color: $color-black;
}

.popup__button {
    margin-top: auto;
    height: 80px;
    font-size: 24px;
    border: 2px solid $color-pink;

    @media screen and (min-width: 1160px) {
        &:hover {
            color: $color-white;
            background: $color-pink;
        }
    }
}

// Иконки
.popup__icon {
    &-close {
        position: absolute;
        width: 23px;
        height: 23px;
        top: 35px;
        right: 35px;
        cursor: pointer;
        stroke: $color-gray;
    }
}

@media screen and (max-width: 575px) {
    .popup {
        padding: 0 10px;
    }

    .popup__form {
        width: 100%;
        height: 500px;
        border-radius: 5px;
        padding: 25px;
    }

    .popup__title {
        margin-top: 0px;
        font-size: 32px;
    }

    .popup__text {
        margin-top: 30px;
        font-size: 22px;
        line-height: 32px;
    }

    .popup__button {
        align-self: center;
        width: 100%;
        max-width: 300px;
        height: 60px;
        font-size: 20px;
    }

    .popup__icon-close {
        width: 20px;
        height: 20px;
        top: 20px;
        right: 20px;
    }
}
</style>