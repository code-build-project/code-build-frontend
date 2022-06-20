<template>
    <div class="actuality__wrap" @mousemove="mousemove">
        <div ref="actuality" class="actuality">
            <h1 class="actuality__title">
                Вы с нуля<br class="adaptive"/> освоите профессию<br class="desktop"/>
                разработчика и сможете добавить<br class="desktop"/>
                в арсенал<br class="adaptive"/> необходимые навыки.
            </h1>

            <h2 class="actuality__subtitle">
                Мы помогаем новичкам стать<br class="adaptive"/> профессиональными<br class="desktop"/>
                программистами,<br class="adaptive"/> а опытным разработчикам<br class="adaptive"/> получать<br class="desktop"/>
                новые знания и расти<br class="adaptive"/> профессионально
            </h2>

            <!-- Иконки заднего фона -->
            <v-icon
                class="actuality__icon"
                path="img/apple.svg"
                width="19px"
                height="24px"
                style="left: 16%; top: 133px; padding: 17px 20px 20px 21px"
                :style="[{ top: getIconPositionY(133, 30) }, { left: getIconPositionX(312, 30) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/codeBox.svg"
                width="31px"
                height="27px"
                style="left: 46%; top: 70px; padding: 32px 32px 32px 32px"
                :style="[{ top: getIconPositionY(70, 46) }, { left: getIconPositionX(877, 46) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/commandLine.svg"
                width="35px"
                height="35px"
                style="left: 76%; top: 135px; padding: 53px 53px 53px 53px"
                :style="[{ top: getIconPositionY(135, 70) }, { left: getIconPositionX(1462, 70) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/css3.svg"
                width="29px"
                height="27px"
                style="left: 14%; top: 379px; padding: 31px 32px 31px 32px"
                :style="[{ top: getIconPositionY(379, 45) }, { left: getIconPositionX(1751, 45) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/html.svg"
                width="18px"
                height="20px"
                style="left: 91%; top: 420px; padding: 20px 20px 20px 20px"
                :style="[{ top: getIconPositionY(420, 30) }, { left: getIconPositionX(267, 30) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/lock.svg"
                width="18px"
                height="20px"
                style="left: 5%; top: 631px; padding: 20px 20px 20px 20px"
                :style="[{ top: getIconPositionY(631, 30) }, { left: getIconPositionX(89, 30) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/cursor.svg"
                width="18px"
                height="30px"
                style="left: 23%; top: 670px; padding: 32px 38px 32px 38px"
                :style="[{ top: getIconPositionY(670, 46) }, { left: getIconPositionX(448, 46) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/gitMerge.svg"
                width="19px"
                height="18px"
                style="left: 48%; top: 763px; padding: 20px 20px 20px 20px"
                :style="[{ top: getIconPositionY(763, 30) }, { left: getIconPositionX(912, 30) }]"
            />

            <v-icon
                class="actuality__icon"
                path="img/bug.svg"
                width="27px"
                height="30px"
                style="left: 75%; top: 644px; padding: 32px 33px 32px 33px"
                :style="[{ top: getIconPositionY(631, 46) }, { left: getIconPositionX(1448, 46) }]"
            />
            <!-- Иконки заднего фона -->
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'BlockActuality',

    components: {
        VIcon
    },

    data() {
        return {
            cursor: {
                X: 0,
                Y: 0
            }
        };
    },

    methods: {
        mousemove(mouse) {
            // Координаты курсора относительно данного блока
            this.cursor.Y = mouse.pageY - this.$refs.actuality.offsetTop;
            this.cursor.X = mouse.pageX - this.$refs.actuality.offsetLeft;
        },

        getIconPositionY(iconPositionY, iconRadius) {
            // Если курсор ниже иконки, двигаем вверх
            if (this.cursor.Y - iconRadius >= iconPositionY) {
                return iconPositionY - 20 + 'px';
            }
            // Если курсор выше иконки, двигаем вниз
            else {
                return iconPositionY + 20 + 'px';
            }
        },

        getIconPositionX(iconPositionX, iconRadius) {
            // Если курсор правее иконки, двигаем влево
            if (this.cursor.X - iconRadius >= iconPositionX) {
                return iconPositionX - 20 + 'px';
            }
            // Если курсор левее иконки, двигаем вправо
            else {
                return iconPositionX + 20 + 'px';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.actuality__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: $color-blue;
    overflow: hidden;
}

.actuality {
    @extend .flex_column-center-center;
    position: relative;
    height: 900px;
    max-width: 1920px;
    width: 100%;
    color: $color-white;
}

.actuality__title {
    font-family: 'ObjectSans';
    font-size: 45px;
    line-height: 55px;
    letter-spacing: -1px;
    text-align: center;
}

.actuality__subtitle {
    margin-top: 30px;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.55px;
    text-align: center;
}

.actuality__icon {
    @extend .flex_row-center-center;
    position: absolute;
    background: #3a7afe;
    border: 2px solid #3a7afe;
    border-radius: 21%;
    transition: all 1s ease-in-out;
}

.adaptive {
    display: none;
}

@media screen and (max-width: 575px) {
    .actuality {
        height: 527px;
    }

    .actuality__title {
        font-size: 22px;
        line-height: 26px;
        text-align: center;
    }

    .actuality__subtitle {
        margin-top: 13px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0;
    }

    .actuality__icon {
        display: none;
    }

    .desktop {
        display: none;
    }

    .adaptive {
        display: block;
    }
}
</style>