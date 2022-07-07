<template>
    <div class="popup">
        <div class="popup__form">
            <v-icon
                class="popup__icon-close"
                path="img/close.svg"
                @click="$emit('close')"
            />

            <div class="popup__score">
                <v-icon 
                    class="popup__icon-star" 
                    path="img/star.svg" 
                />
                <span class="popup__score-text">{{ review.score }}</span>
            </div>

            <div class="popup__text">
                {{ review.text }}
            </div>

            <div class="popup__footer">
                <img 
                    class="popup__avatar-img" 
                    alt="avatar" 
                    :src="review.image" 
                />

                <div class="popup__avatar-info">
                    <h1 class="popup__avatar-name">{{ review.name }}</h1>
                    <div class="popup__avatar-date">{{ review.date }}</div>
                </div>
            </div>

            <!-- Внешние кнопки -->
            <v-icon
                class="popup__icon-bracket-left"
                path="img/angleBracketPopup.svg"
                @click="$emit('clickLeft')"
            />
            <v-icon
                class="popup__icon-bracket-right"
                path="img/angleBracketPopup.svg"
                @click="$emit('clickRight')"
            />
            <!-- Внешние кнопки -->
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';

// Mixins
import popup from '@/mixins/popup';

export default {
    name: 'PopupReview',

    components: {
        VIcon
    },

    mixins: [popup],

    props: {
        review: {
            type: Object,
            default: () => {
                return {
                    score: '',
                    text: '',
                    name: '',
                    date: '',
                    image: ''
                };
            }
        }
    }
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
    @extend .flex_column-start-center;
    position: relative;
    width: 764px;
    height: 600px;
    padding: 40px;
    background: $color-white;
    border-radius: 29px;
}

.popup__score {
    @extend .flex_row-center-center;
    width: 116px;
    min-height: 58px;
    margin-top: 38px;
    font-size: 29px;
    letter-spacing: -0.9px;
    color: #3e4462;
    background: #ecf2ff;
    border-radius: 9px;

    &-text {
        margin-top: 3px;
    }
}

.popup__text {
    width: 615px;
    height: 100%;
    text-align: center;
    margin-top: 40px;
    overflow: auto;
    font-size: 25px;
    line-height: 36px;
    color: #3e4462;
}

.popup__footer {
    @extend .flex_row;
    margin-top: 60px;
}

.popup__avatar {
    &-img {
        width: 56px;
        height: 56px;
        background: $color-blue;
        border-radius: 11.9226px;
    }

    &-info {
        @extend .flex_column-center;
        margin-left: 17px;
    }

    &-name {
        font-weight: bold;
        font-size: 20px;
        letter-spacing: -0.55px;
        color: #18214d;
    }

    &-date {
        font-size: 14px;
        letter-spacing: -0.4px;
        color: #b0b7c8;
    }
}

// Иконки
.popup__icon {
    &-close {
        width: 23px;
        height: 23px;
        align-self: flex-end;
        stroke: $color-gray;
        cursor: pointer;
    }

    &-star {
        width: 26px;
        height: 25px;
        margin-right: 10px;
        fill: $color-blue;
    }

    &-bracket-left,
    &-bracket-right {
        position: absolute;
        width: 23px;
        height: 39px;
        cursor: pointer;
        stroke: $color-white;
    }

    &-bracket-left {
        right: calc(100% + 42px);
        top: 50%;
        transform: rotate(180deg);
    }

    &-bracket-right {
        left: calc(100% + 42px);
        top: 50%;
        transform: rotate(0deg);
    }
}

@media screen and (max-width: 991px) {
    .popup__form {
        width: 560px;
    }
    
    .popup__score {
        margin-top: 20px;
    }

    .popup__text {
        width: 100%;
        margin-top: 35px;
        font-size: 22px;
        line-height: 32px;
    }

    .popup__footer {
        margin-top: 30px;
    }

    .popup__icon-bracket-left,
    .popup__icon-bracket-right {
        display: none;
    }
}

@media screen and (max-width: 575px) {
    .popup__form {
        width: 280px;
        height: auto;
        max-height: 500px;
        padding: 22px;
        border-radius: 8px;
    }

    .popup__score {
        width: 60px;
        min-height: 30px;
        margin-top: 15px;
        font-size: 16px;
        border-radius: 8px;
        line-height: 0;
    }

    .popup__icon-star {
        width: 15px;
        height: 13px;
        margin-right: 4px;
    }

    .popup__text {
        margin-top: 30px;
        font-size: 13px;
        line-height: 19px;
    }

    .popup__footer {
        margin-top: 20px;
    }

    .popup__icon-close {
        width: 16px;
        height: 16px;
    }

    .popup__avatar {
        &-img {
            width: 46px;
            height: 46px;
            border-radius: 8px;
        }

        &-info {
            margin-left: 15px;
        }

        &-name {
            font-weight: 700;
            font-size: 16px;
        }

        &-date {
            font-size: 13px;
        }
    }
}
</style>