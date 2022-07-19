<template>
    <div class="intro__wrap">
        <div class="intro">
            <h1 class="intro__title">
                Повысь<br />
                свои навыки программирования вместе с
                <span class="intro__title-blue">codebuild</span>
            </h1>

            <h2 class="intro__subtitle">
                Платные и бесплатные видеокурсы по программированию для новичков и
                middle-разработчиков
            </h2>

            <v-button 
                class="intro__button" 
                @click="$router.push('/courses')"
            >
                Начать учиться
                <v-icon 
                    class="intro__icon-arrow" 
                    path="img/arrow.svg" 
                />
            </v-button>

            <!-- Иконки заднего фона -->
            <v-icon 
                class="intro__icon-iphone" 
                path="img/iphone.svg" 
            />

            <v-icon 
                class="intro__icon-ipad" 
                path="img/ipad.svg" 
            />
            <!-- Иконки заднего фона -->
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

export default {
    name: 'BlockIntro',

    components: {
        VIcon,
        VButton
    }
};
</script>

<style lang="scss" scoped>
.intro__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: transparent;
    overflow: hidden;
}

.intro {
    @extend .flex_column;
    position: relative;
    max-width: 1160px;
    width: 100%;
    height: 960px;
}

.intro__title {
    max-width: 550px;
    margin-top: 170px;
    font-family: 'ObjectSans';
    font-size: 57px;
    line-height: 56px;
    letter-spacing: -0.1px;
    color: #15244b;
}

.intro__title-blue {
    color: $color-blue;
}

.intro__subtitle {
    max-width: 400px;
    margin-top: 30px;
    font-size: 24px;
    line-height: 35px;
    color: #3e4462;
}

.intro__button {
    width: 298px;
    height: 84px;
    margin-top: 80px;
    font-size: 24px;
    color: $color-blue;
    border: 2px solid $color-blue;
    box-shadow: inset 0 0 0 0 $color-blue;
    transition: ease-out 0.3s;

    @media screen and (min-width: 1160px) {
        &:hover {
            color: $color-white;
            box-shadow: inset 298px 0 0 0 $color-blue;
    
            .intro__icon-arrow {
                stroke: $color-white;
            }
        }
    }
}

// Иконки
.intro__icon {
    &-arrow {
        width: 30px;
        height: 30px;
        margin-left: 9px;
        stroke: $color-blue;
        transition: ease-out 0.4s;
        stroke-width: 1.5px;
    }

    &-iphone {
        position: absolute;
        width: 361px;
        height: 719px;
        right: 286px;
        top: 487px;
        z-index: 1;
    }

    &-ipad {
        position: absolute;
        width: 801px;
        height: 868px;
        right: -384px;
        top: 252px;
    }
}

@media screen and (max-width: 1160px) {
    .intro {
        padding: 32px 20px;
    }

    .intro__icon-iphone {
        right: 210px;
        top: 580px;
    }

    .intro__icon-ipad {
        right: -430px;
        top: 350px;
    }
}

@media screen and (max-width: 991px) {
    .intro {
        align-items: center;
        padding: 0;
        height: 760px;
    }

    .intro__title {
        margin-top: 110px;
        font-size: 52px;
        line-height: 51px;
        text-align: center;
    }

    .intro__subtitle {
        text-align: center;
    }

    .intro__icon-iphone,
    .intro__icon-ipad {
        display: none;
    }
}

@media screen and (max-width: 575px) {
    .intro {
        max-width: 320px;
        height: 605px;
        align-items: center;
    }

    .intro__title {
        margin-top: 32px;
        font-size: 26px;
        line-height: 30px;
        color: #272A37;
        text-align: center;
    }

    .intro__subtitle {
        margin-top: 15px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        max-width: 230px;
    }

    .intro__button {
        width: 254px;
        height: 58px;
        margin-top: 30px;
        font-size: 18px;
        border-width: 1px;
    }

    .intro__icon-arrow {
        width: 25px;
        height: 25px;
        margin-left: 9px;
        stroke-width: 1px;
    }

    .intro__icon-iphone {
        display: block;
        width: 159px;
        height: 316px;
        right: 140px;
        top: 422px;
    }

    .intro__icon-ipad {
        display: block;
        width: 400px;
        height: 323px;
        right: -140px; 
        top: 337px;
    }
}

@media screen and (max-width: 375px) {
    .intro__icon-iphone {
        right: 140px;
        top: 422px;
    }

    .intro__icon-ipad {
        right: -140px; 
        top: 337px;
    }
}
</style>