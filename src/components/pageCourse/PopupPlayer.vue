<template>
    <div class="popup">
        <div class="popup__player">
            <div class="popup__screen">
                <iframe
                    v-show="isPageLoaded"
                    class="popup__iframe"
                    :src="lesson.video"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen
                    @load="load"
                />
            </div>

            <v-preloader 
                v-if="!isPageLoaded" 
                class="popup__preloader" 
            />

            <div class="popup__footer">
                <div class="popup__footer-titles">
                    <div class="popup__lesson-number">Урок №{{ lesson.number }}</div>
                    <h1 class="popup__title">{{ lesson.title }}</h1>
                </div>

                <div class="popup__footer-buttons">
                    <div 
                        v-if="isAuth" 
                        class="popup__icon-heart"
                    >
                        <v-like
                            v-model="lesson.isLike"
                            stroke="secondary"
                            :contentId="lesson.id"
                            :courseId="lesson.courseId"
                            fieldName="lessons"
                        />
                    </div>
                    <v-button 
                        class="popup__button" 
                        type="active"
                    >
                        <a 
                            :href="lesson.video" 
                            target="_blank"
                        >
                            Смотреть на YouTube
                        </a>
                    </v-button>
                </div>
            </div>

            <!-- Внешние кнопки -->
            <v-icon 
                class="popup__icon-close" 
                path="img/close.svg" 
                @click="$emit('close')" 
            />
            <v-icon
                v-if="intNumber > 1"
                class="popup__icon-bracket-left"
                path="img/angleBracketPopup.svg"
                @click="changeVideo('clickLeft')"
            />
            <v-icon
                v-if="intNumber !== lessonsLength"
                class="popup__icon-bracket-right"
                path="img/angleBracketPopup.svg"
                @click="changeVideo('clickRight')"
            />
            <!-- Внешние кнопки -->

            <!-- Только для адаптива -->
            <div
                v-if="intNumber > 1"
                class="popup__button-left"
                @click="changeVideo('clickLeft')"
            >
                <v-icon
                    class="popup__icon-bracket-left"
                    path="img/angleBracketPopup.svg"
                />
                Урок №{{ intNumber - 1 }}
            </div>

            <div
                v-if="intNumber !== lessonsLength"
                class="popup__button-right"
                @click="changeVideo('clickRight')"
            >
                Урок №{{ intNumber + 1 }}
                <v-icon
                    class="popup__icon-bracket-right"
                    path="img/angleBracketPopup.svg"
                />
            </div>
            <!-- Только для адаптива -->
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VLike from '@/components/common/VLike';
import VButton from '@/components/common/VButton';
import VPreloader from '@/components/common/VPreloader';

// Helpers
import { debounce } from 'lodash';
import { mapGetters } from 'vuex';

// Mixins
import popup from '@/mixins/popup';

export default {
    name: 'PopupPlayer',

    components: {
        VIcon,
        VLike,
        VButton,
        VPreloader
    },

    mixins: [popup],
    
    props: {
        lesson: {
            type: Object,
            default: () => {
                return {
                    id: '',
                    title: 'Название урока',
                    number: '1',
                    time: '15 м.',
                    views: '300',
                    likes: [],
                    courseId: '',
                    image: '',
                    video: '',
                    isLike: false
                };
            }
        },

        lessonsLength: {
            type: Number,
            default: 0
        }
    },

    computed: {
        ...mapGetters(['isAuth']),

        intNumber() {
            return Number(this.lesson.number);
        }
    },

    data() {
        return {
            isPageLoaded: false
        };
    },

    methods: {
        load() {
            this.isPageLoaded = true;
        },

        changeVideo: debounce(function(click) {
            this.$emit(click);
            this.isPageLoaded = false;
        }, 500)
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

.popup__player {
    @extend .flex_column;
    position: relative;
    width: 100%;
    max-width: 1022px;
    background: $color-white;
    border-radius: 8px;
}

.popup__screen {
    width: 100%;
    height: 535px;
    padding: 35px 35px 0 35px;
    overflow: hidden;
    line-height: 0;
}

.popup__iframe {
    width: 100%;
    height: 100%;
    background: #202020;
}

.popup__lesson-number {
    font-size: 17px;
    color: $color-blue;
}

.popup__title {
    margin-top: 20px;
    font-size: 24px;
    line-height: 19px;
    color: #3a3f4f;
}

.popup__button {
    width: 206px;
    height: 53px;
    font-size: 15px;
}

.popup__preloader {
    width: 80px;
    height: 80px;
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
}

.popup__footer {
    @extend .flex_row-center-between;
    width: 100%;
    padding: 29px 35px 35px 35px;

    &-titles {
        @extend .flex_column;
    }
    &-buttons {
        @extend .flex_row;
    }
}

.popup__button-left,
.popup__button-right {
    display: none;
}

// Иконки
.popup__icon {
    &-heart {
        @extend .flex_row-center-center;
        width: 53px;
        height: 53px;
        padding: 15px;
        border: 0.8px solid #dedede;
        border-radius: 8px;
        margin-right: 8px;
    }

    &-close {
        position: absolute;
        width: 33px;
        height: 33px;
        top: -60px;
        right: 0px;
        cursor: pointer;
        stroke: $color-white;
    }

    &-bracket-left,
    &-bracket-right {
        position: absolute;
        width: 20px;
        height: 38px;
        top: 320px;
        cursor: pointer;
        stroke: $color-white;
    }

    &-bracket-left {
        left: -80px;
        transform: rotate(180deg);
    }

    &-bracket-right {
        right: -80px;
        transform: rotate(0deg);
    }
}

@media screen and (max-width: 1160px) {
    .popup {
        padding: 20px;
    }
}

@media screen and (max-width: 575px) {
    .popup__player {
        @extend .flex_column;
        position: relative;
        width: 100%;
        padding: 0;
    }

    .popup__screen {
        padding: 0;
        height: 47.5vw;
    }

    .popup__lesson-number {
        font-size: 4vw;
    }

    .popup__title {
        margin-top: 7px;
        font-size: 6vw;
        line-height: 7vw;
    }

    .popup__footer-buttons {
        margin-top: 25px;
    }

    .popup__button {
        width: 180px;
        height: 46px;
        font-size: 14px;
    }

    .popup__preloader {
        width: 40px;
        height: 40px;
        top: calc(50% - 100px);
        left: calc(50% - 20px);
    }

    .popup__footer {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 18px 20px 20px 20px;
    }

    .popup__icon-heart {
        width: 46px;
        height: 46px;
        padding: 13px;
        border: 1.3px solid #dedede;
        border-radius: 7px;
    }

    .popup__icon-close {
        width: 17px;
        height: 17px;
        top: -30px;
        right: 0px;
    }

    .popup__icon-bracket-left,
    .popup__icon-bracket-right {
        display: none;
    }
    
    .popup__button-left,
    .popup__button-right {
        position: absolute;
        width: 136px;
        height: 50px;
        top: calc(100% + 30px);
        cursor: pointer;
        border: 1px solid $color-white;
        border-radius: 8px;
        font-size: 16px;
        color: $color-white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;

        .popup__icon-bracket-left,
        .popup__icon-bracket-right {
            display: block;
            position: static;
            width: 6px;
            height: 100%;
        }
    }

    .popup__button-right {
        right: 0;
    }
}
</style>