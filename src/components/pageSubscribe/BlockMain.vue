<template>
    <div class="main">
        <!-- Левая часть -->
        <div class="main__left-side">
            <h1 class="main__title">
                Подключи премиум подписку
                <v-icon
                    class="main__icon-premium"
                    path="img/premium.svg"
                />
            </h1>

            <h2 class="main__subtitle">
                и получи доступ к более чем 10 платным курсам по цене чашки кофе
            </h2>
        </div>
        <!-- Левая часть -->

        <!-- Правая часть -->
        <div class="main__right-side">
            <subscribe-radio
                v-for="(item, index) in radioList"
                :key="index"
                v-model="radioValue"
                class="main__radio"
                :key-field="index"
                :price="item.price"
                :economy="item.economy"
            >
                {{ item.title }}
            </subscribe-radio>

            <div class="main__footer">
                <div class="main__consent">
                    <v-check-box 
                        v-model="isChecked"
                        key-field="consent"
                        type="primary" 
                    />

                    <div class="main__consent-text">
                        Я принимаю
                        <div>условия подписки</div>
                    </div>
                </div>

                <v-button 
                    class="main__button"
                    :type="typeButton"
                    @click="isPopup = true"
                >
                    Подключить
                </v-button>
            </div>
        </div>
        <!-- Правая часть -->

        <popup-subscribe 
            v-if="isPopup" 
            @close="isPopup = false" 
        />
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import VCheckBox from '@/components/common/VCheckBox';
import PopupSubscribe from '@/components/pageSubscribe/Popup';
import SubscribeRadio from '@/components/pageSubscribe/Radio';

// Mixins
import window from '@/mixins/window';

export default {
    name: 'Subscribe',

    components: {
        VIcon,
        VButton,
        VCheckBox,
        PopupSubscribe,
        SubscribeRadio,
    },

    mixins: [window],

    computed: {
        radioList() {
            let subscribe = this.isDesktop ? ' подписки' : '';

            return [
                { title: '1 месяц' + subscribe, price: '99', economy: undefined },
                { title: '3 месяца' + subscribe, price: '239', economy: '58' },
                { title: '1 год' + subscribe, price: '799', economy: '389' }
            ]
        },

        isValid() {
            return this.radioValue && this.isChecked;
        },

        typeButton() {
            return this.isValid ? 'active' : 'disabled';
        }
    },

    data() {
        return {
            radioValue: '',
            isChecked: false,
            isPopup: false
        };
    }
};
</script>

<style lang="scss" scoped>
.main {
    @extend .flex_row-center-between;
    width: 100%;
    max-width: 1160px;
    height: 591px;
    padding: 73px 80px 72px 77px;
    background: $color-white;
    border-radius: 29px;
}

.main__left-side {
    @extend .flex_column;
}

.main__title {
    position: relative;
    width: 300px;
    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: $color-black;
}

.main__subtitle {
    width: 270px;
    margin-top: 25px;
    font-size: 24px;
    line-height: 32px;
    color: $color-black;
}

.main__right-side {
    @extend .flex_column;
    width: 550px;
}

.main__radio {
    margin-top: 20px;
}

.main__footer {
    @extend .flex_row-center-between;
    margin-top: 45px;
    font-size: 14px;
    line-height: 15px;
    color: $color-gray;
}

.main__consent {
    @extend .flex_row-center-center;
}

.main__consent-text {
    margin-left: 13px;

    div {
        color: $color-blue;
        background: no-repeat 0 110%;
        background-image: linear-gradient($color-blue, $color-blue);
        background-size: 100% 1px;
    }
}

.main__button {
    width: 188px;
    height: 60px;
    font-size: 18px;
}

// Иконки
.main__icon {
    &-premium {
        @extend .flex_row-center-center;
        position: absolute;
        right: -45px;
        bottom: 0px;
        width: 44px;
        height: 44px;
        margin-left: 30px;
        background: $color-pink;
        box-shadow: 0px 11px 18px -9px $color-pink;
        border-radius: 8px;
        fill: $color-white;
        padding: 12px;
    }
}

@media screen and (max-width: 1160px) {
    .main {
        flex-direction: column;
        height: auto;
        padding: 94px 13px 21px 13px;
    }

    .main__title {
        width: 100%;
        font-size: 42px;
        line-height: 40px;
        text-align: center;
    }

    .main__icon-premium {
        right: calc(50% - 22px);
        bottom: calc(100% + 15px);
        margin-left: 0;
    }

    .main__subtitle {
        width: 100%;
        margin-top: 15px;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
    }
}

@media screen and (max-width: 767px) {
    .main {
        border-radius: 10px;
    }

    .main__title {
        font-size: 32px;
        line-height: 30px;
    }

    .main__subtitle {
        font-size: 16px;
        line-height: 20px;
    }

    .main__right-side {
        width: 100%;
        max-width: 400px;
    }

    .main__footer {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 36px;
    }

    .main__button {
        width: 254px;
        height: 58px;
        margin-top: 22px;
        align-self: center;
    }
}
</style>