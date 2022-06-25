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
            <div class="actuality__icon-list">
                <v-icon
                    class="actuality__icon"
                    path="img/apple.svg"
                    :style="getPositionStyles(133, 16, 30)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/codeBox.svg"
                    :style="getPositionStyles(70, 46, 46)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/commandLine.svg"
                    :style="getPositionStyles(135, 76, 70)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/css3.svg"
                    :style="getPositionStyles(379, 14, 45)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/html.svg"
                    :style="getPositionStyles(420, 91, 30)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/lock.svg"
                    :style="getPositionStyles(631, 5, 30)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/cursor.svg"
                    :style="getPositionStyles(670, 23, 46)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/gitMerge.svg"
                    :style="getPositionStyles(763, 48, 30)"
                />

                <v-icon
                    class="actuality__icon"
                    path="img/bug.svg"
                    :style="getPositionStyles(631, 75, 46)"
                />
            </div>
            <!-- Иконки заднего фона -->
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';

// Mixins
import window from '@/mixins/window';

export default {
    name: 'BlockActuality',

    components: {
        VIcon
    },

    mixins: [window],

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

        getPositionStyles(positionY, positionX, radius) {
            if (this.isDesktop) {
                return [
                    { marginTop: this.getIconPositionY(positionY, radius) }, 
                    { marginLeft: this.getIconPositionX(positionX, radius) },
                ];
            }
        },

        getIconPositionY(position, radius) {
            // Если курсор ниже иконки, двигаем вверх
            if (this.cursor.Y - radius >= position) {
                return '-20px';
            }
            // Если курсор выше иконки, двигаем вниз
            else {
                return '20px';
            }
        },

        getIconPositionX(position, radius) {
            let precentPosition = (this.width / 100) * position;
            // Если курсор правее иконки, двигаем влево
            if (this.cursor.X - radius >= precentPosition) {
                return '-20px';
            }
            // Если курсор левее иконки, двигаем вправо
            else {
                return '20px';
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

.actuality__icon-list {
    width: 100%;
}

.actuality__icon {
    @extend .flex_row-center-center;
    position: absolute;
    background: #3a7afe;
    border: 2px solid #3a7afe;
    border-radius: 21%;
    transition: all 1s ease-in-out;
    &:nth-child(1) {
        width: 59px;
        height: 59px;
        left: 16%;
        top: 133px; 
        padding: 14px 17px 17px 18px;
    }
    &:nth-child(2) {
        width: 93px;
        height: 93px;
        left: 46%;
        top: 70px; 
        padding: 29px;
    }
    &:nth-child(3) {
        width: 141px;
        height: 141px;
        left: 76%;
        top: 135px; 
        padding: 51px;
    }
    &:nth-child(4) {
        width: 91px;
        height: 91px;
        left: calc(28% - 267px);
        top: 379px; 
        padding: 28px 29px;
    }
    &:nth-child(5) {
        width: 59px;
        height: 59px;
        left: 91%;
        top: 420px; 
        padding: 18px;
    }
    &:nth-child(6) {
        width: 59px;
        height: 59px;
        left: 5%;
        top: 631px; 
        padding: 18px;
    }
    &:nth-child(7) {
        width: 93px;
        height: 93px;
        left: 23%;
        top: 670px; 
        padding: 29px 35px;
    }
    &:nth-child(8) {
        width: 59px;
        height: 59px;
        left: 48%;
        top: 763px; 
        padding: 18px;
    }
    &:nth-child(9) {
        width: 93px;
        height: 93px;
        left: 75%;
        top: 644px; 
        padding: 30px 31px;
    }
}

.adaptive {
    display: none;
}

@media screen and (max-width: 1160px) {
    .actuality__title {
        font-size: 42px;
        line-height: 52px;
    }

    .actuality__subtitle {
        font-size: 19px;
        line-height: 26px;
    }
}

@media screen and (max-width: 991px) {
    .actuality {
        height: 527px;
    }

    .actuality__title {
        font-size: 30px;
        line-height: 37px;
    }

    .actuality__subtitle {
        margin-top: 30px;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: 0;
    }

    .actuality__icon {
        &:nth-child(1) {
            width: 39px;
            height: 39px;
            left: 12%;
            top: 93px; 
            padding: 9px 12px 11px 11px;
        }
        &:nth-child(2) {
            width: 57px;
            height: 57px;
            left: 43%;
            top: 28px; 
            padding: 18px;
        }
        &:nth-child(3) {
            width: 64px;
            height: 64px;
            left: 85%;
            top: 71px; 
            padding: 22px;
        }
        &:nth-child(4) {
            width: 67px;
            height: 67px;
            left: 8%;
            top: 397px; 
            padding: 19px 20px;
        }
        &:nth-child(5) {
            width: 57px;
            height: 57px;
            left: 85%;
            top: 397px; 
            padding: 16px;
        }
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8) {
            display: none;
        }
        &:nth-child(9) {
            width: 47px;
            height: 47px;
            left: 50%;
            top: 450px; 
            padding: 13px 14px;
        }
    }
}

@media screen and (max-width: 575px) {
    .actuality__title {
        font-size: 22px;
        line-height: 26px;
        max-width: 320px;
    }

    .actuality__subtitle {
        margin-top: 13px;
        font-size: 14px;
        line-height: 20px;
        max-width: 320px;
    }

    .actuality__icon {
        &:nth-child(1) {
            left: 10%;
        }
        &:nth-child(2) {
            left: 36%;
        }
        &:nth-child(3) {
            left: 72%;
        }
        &:nth-child(4) {
            left: 6%;
        }
        &:nth-child(5) {
            left: 74%;
        }
        &:nth-child(9) {
            left: 44%;
        }
    }

    .desktop {
        display: none;
    }

    .adaptive {
        display: block;
    }
}
</style>