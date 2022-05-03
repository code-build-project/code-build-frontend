<template>
    <div class="subscribe">
        <main class="subscribe__main">
            <!-- Левая часть -->
            <div class="subscribe__main-left-side">
                <h1 class="subscribe__main-title">
                    Подключи премиум подписку
                    <v-icon
                        class="subscribe__icon-premium"
                        path="img/premium.svg"
                        width="20px"
                        height="20px"
                    />
                </h1>

                <h2 class="subscribe__main-subtitle">
                    и получи доступ к более чем 10 платным курсам по цене чашки кофе
                </h2>
            </div>
            <!-- Левая часть -->

            <!-- Правая часть -->
            <div class="subscribe__main-right-side">
                <subscribe-radio
                    v-for="(item, index) in radioList"
                    :key="index"
                    v-model="radioValue"
                    class="mt-20px"
                    :key-field="index"
                    :price="item.price"
                    :economy="item.economy"
                >
                    {{ item.title }}
                </subscribe-radio>

                <div class="subscribe__consent">
                    <div class="flex_row-center-center">
                        <v-check-box key-field="11" type="primary" />

                        <div class="ml-10px">
                            Я принимаю
                            <v-underline>условия подписки</v-underline>
                        </div>
                    </div>

                    <v-button class="subscribe__button" @click="isPopup = true">
                        Подключить
                    </v-button>
                </div>
            </div>
            <!-- Правая часть -->
        </main>

        <div class="subscribe__questions">
            <div class="subscribe__questions-title">Часто задаваемые вопросы</div>
            <div class="subscribe__questions-list">
                <subscribe-question />
            </div>
        </div>

        <popup-subscribe v-if="isPopup" @close="isPopup = false" />
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import VCheckBox from '@/components/common/VCheckBox';
import VUnderline from '@/components/common/VUnderline';
import PopupSubscribe from '@/components/pageSubscribe/Popup';
import SubscribeRadio from '@/components/pageSubscribe/Radio';
import SubscribeQuestion from '@/components/pageSubscribe/Question';

export default {
    name: 'Subscribe',
    components: {
        VIcon,
        VButton,
        VCheckBox,
        VUnderline,
        PopupSubscribe,
        SubscribeRadio,
        SubscribeQuestion
    },
    data() {
        return {
            radioValue: '',

            radioList: [
                { title: '1 месяц подписки', price: '99', economy: undefined },
                { title: '3 месяца подписки', price: '239', economy: '58' },
                { title: '1 год подписки', price: '799', economy: '389' }
            ],

            isPopup: false
        };
    }
};
</script>

<style lang="scss" scoped>
.subscribe {
    @extend .flex_column;
    padding: 40px;
    background: #f4f4f4;

    // Верхний блок подписки
    &__main {
        @extend .flex_row-center-between;
        width: 1160px;
        height: 591px;

        padding: 73px 80px 72px 77px;

        background: $color-white;
        border-radius: 29px;
    }

    &__main-left-side {
        @extend .flex_column;
    }

    &__main-title {
        position: relative;
        width: 300px;

        font-family: 'ObjectSans';
        font-size: 62px;
        line-height: 60px;
        letter-spacing: -1px;
        color: $color-black;
    }

    &__main-subtitle {
        width: 270px;
        margin-top: 25px;

        font-family: 'Circe';
        font-size: 24px;
        line-height: 32px;
        color: #3e4462;
    }

    &__main-right-side {
        @extend .flex_column;
        width: 550px;
    }

    &__consent {
        @extend .flex_row-center-between;
        margin-top: 45px;

        font-family: 'Circe';
        font-size: 14px;
        line-height: 15px;
        color: $color-gray;
    }

    // Нижний блок
    &__questions {
        @extend .flex_row-center-between;
        width: 1160px;
        height: 437px;
        margin-top: 40px;

        padding: 73px 80px 72px 77px;

        background: $color-white;
        border-radius: 29px;
    }

    &__questions-title {
        width: 200px;

        font-family: 'ObjectSans';
        font-size: 30px;
        line-height: 30px;
        color: $color-black;
    }

    &__questions-list {
        margin-top: 10px;
        border-top: 1px solid $color-silver;
    }

    &__button {
        width: 188px;
        height: 60px;

        font-family: 'Circe';
        font-size: 18px;
    }
}

// icons
.subscribe__icon {
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
    }
}

// hovers
:hover.subscribe {
    &__button {
        border: none;
        color: $color-white;
        background: $color-pink;
        box-shadow: 0px 12px 18px -13px $color-pink;
    }
}
</style>