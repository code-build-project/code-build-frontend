<template>
    <div class="reg__wrap">
        <div class="reg">
            <h1 class="reg__title">
                Зарегистрируйся в codebuild и получи бесплатный доступ к более чем 20 курсам
            </h1>

            <div class="reg__input">
                <div class="reg__input-label">Email</div>

                <input
                    class="reg__input-field"
                    v-model="email"
                    placeholder="your.email@example.com"
                />

                <v-icon
                    class="reg__icon-arrow"
                    :class="{ 'reg__icon-arrow_active': isValid }"
                    path="img/arrow.svg"
                    @click="openPageRegistration()"
                />
            </div>

            <!-- Только для адаптива -->
            <v-button 
                class="reg__button"
                :class="{ 'reg__button_active': isValid }"
                @click="openPageRegistration()"
            >
                Зарегистрироваться
            </v-button>
            <!-- Только для адаптива -->
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

// Helpers
import { REGEX_EMAIL } from '@/helpers/constants';

export default {
    name: 'BlockRegistration',

    components: { 
        VIcon,
        VButton
    },

    computed: {
        isValid() {
            return REGEX_EMAIL.test(this.email);
        }
    },

    data() {
        return {
            email: ''
        };
    },

    methods: {
        openPageRegistration() {
            this.$router.push({ name: 'Registration', params: { email: this.email } });
        }
    }
};
</script>

<style lang="scss" scoped>
.reg__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: $color-blue;
}

.reg {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 364px;
}

.reg__title {
    width: 380px;
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -0.025em;
    color: $color-white;
}

.reg__input {
    position: relative;
    width: 496px;
    height: 76px;
    margin-top: 20px;
    border-bottom: 1px solid $color-white;
}

.reg__input-label {
    font-size: 17px;
    color: $color-white;
}

.reg__input-field {
    margin-top: 15px;
    font-size: 26px;
    letter-spacing: -0.02em;
    border: none;
    background: transparent;
    color: $color-white;
    outline: none;
    width: 80%;

    &::placeholder {
        color: #518aff;
    }
}

.reg__button {
    display: none;
}

// Иконки
.reg__icon {
    &-arrow {
        @extend .flex_row-center-center;
        position: absolute;
        width: 50px;
        height: 50px;
        right: 0px;
        bottom: 20px;
        padding: 11px;
        pointer-events: none;
        stroke: #3a7afe;
        stroke-width: 1.5px;
        border: 2px solid #3a7afe;
        border-radius: 10px;
        transition: ease-out 0.3s;

        &:hover {
            cursor: pointer;
            stroke: $color-blue;
            background: $color-white;
        }

        &_active {
            pointer-events: auto;
            stroke: $color-white;
            border-color: $color-white;
        }
    }
}

@media screen and (max-width: 1160px) {
    .reg {
        flex-direction: column;
        justify-content: center;
    }

    .reg__title {
        text-align: center;
    }

    .reg__input {
        margin-top: 33px;
    }
}

@media screen and (max-width: 575px) {
    .reg {
        width: 320px;
        height: auto;
        padding: 40px 0;
    }

    .reg__title {
        width: 210px;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0;
    }

    .reg__input {
        width: 254px;
        height: 55px;
    }

    .reg__input-label {
        font-size: 12px;
        text-align: center;
    }

    .reg__input-field {
        width: 100%;
        margin-top: 9px;
        font-size: 19px;

        &::placeholder {
            text-align: center;
        }
    }

    .reg__icon-arrow {
        display: none;
    }

    .reg__button {
        display: block;
        width: 254px;
        height: 58px;
        margin-top: 32px;
        font-family: 'EuclidCircular';
        font-size: 18px;
        text-align: center;
        color: #3a7afe;
        border: 2px solid #3A7AFE;
        transition: ease-out 0.3s;

        &_active {
            color: $color-white;
            border-color: $color-white;
        }
    }
}
</style>