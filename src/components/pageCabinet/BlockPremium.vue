<template>
    <div 
        class="premium" 
        :class="{ premium_active: user.isPremium }"
    >
        <div class="premium__title">
            Премиум
            <v-icon
                class="premium__icon-premium"
                path="img/premium.svg"
            />
        </div>

        <div class="premium__info">
            <div 
                v-if="user.isPremium" 
                class="premium__text"
            >
                <span>Активен</span>
                <div>Подписка закончится 27 июля</div>
            </div>

            <div 
                v-else
                class="premium__text"
            >
                У вас нет активных подписок
            </div>

            <v-button
                v-if="user.isPremium"
                class="premium__button premium__button-cancel"
                type="normal"
                @click="$router.push('/subscribe')"
            >
                Отменить подписку
            </v-button>

            <v-button
                v-else
                class="premium__button premium__button-buy"
                type="active"
                @click="$router.push('/subscribe')"
            >
                <v-icon 
                    class="premium__icon-premium-buy" 
                    path="img/premium.svg" 
                />
                Купить премиум
            </v-button>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import { mapGetters } from 'vuex';

export default {
    name: 'BlockPremium',

    components: {
        VIcon,
        VButton,
    },

    computed: {
        ...mapGetters(['user'])
    },
};
</script>

<style lang="scss" scoped>
.premium {
    @extend .flex_row-center-between;
    width: 100%;
    max-width: 1160px;
    height: 158px;
    background: $color-white;
    border-radius: 29px;
    padding: 0 80px;
}

.premium__title {
    @extend .flex_row;
    font-family: 'ObjectSans';
    font-size: 30px;
    color: $color-black;
}

.premium__info {
    @extend .flex_row-center-center;
}

.premium__text {
    font-size: 20px;
    color: $color-black;

    span {
        color: #ee3465
    }
}

.premium__button {
    width: 204px;
    height: 55px;
    margin-left: 90px;
    font-size: 16px;
}

.premium__button-cancel {
    &:hover {
        color: $color-white;
        background: $color-pink;
    }
}

.premium__button-buy {
    &:hover {
        box-shadow: 0px 12px 18px -13px $color-pink;
    }
}

// Иконки
.premium__icon {
    &-premium {
        @extend .flex_row-center-center;
        width: 44px;
        height: 44px;
        margin-left: 30px;
        background: $color-pink;
        box-shadow: 0px 11px 18px -9px $color-pink;
        border-radius: 8px;
        fill: $color-white;
        padding: 12px;
    }

    &-premium-buy {
        width: 17px;
        height: 17px;
        margin-right: 9px;
        fill: $color-white;
    }
}

// Модфикаторы
.premium_active {
    border: 2px solid $color-pink;
}

@media screen and (max-width: 1160px) {
    .premium {
        padding: 0 40px;
    }
}

@media screen and (max-width: 991px) {
    .premium {
        height: auto;
        flex-direction: column;
        padding: 34px 40px 21px 40px;
    }

    .premium__title {
        flex-direction: column-reverse;
    }

    .premium__icon-premium {
        margin-left: calc(50% - 22px);
        margin-bottom: 10px;
    }

    .premium__info {
        margin-top: 35px;
    }

    .premium__button {
        margin-left: 30px;
    }
}

@media screen and (max-width: 767px) {
    .premium {
        padding: 34px 13px 21px 13px;
        border-radius: 10px;
    }

    .premium__title {
        font-size: 22px;
    }

    .premium__info {
        flex-direction: column;
        margin-top: 25px;
    }

    .premium__text {
        text-align: center;
        font-size: 16px;
    }

    .premium__button {
        margin-left: 0;
        margin-top: 26px;
        width: 254px;
        height: 58px;
    }
}
</style>