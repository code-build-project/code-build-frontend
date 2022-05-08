<template>
    <div class="reg">
        <v-icon 
            class="reg__logo" 
            path="img/logo.svg" 
        />

        <h1 class="reg__title">Зарегистрируйтесь в Code Build</h1>

        <v-input 
            v-model="name" 
            class="reg__name"
        > 
            Имя 
        </v-input>

        <v-input
            v-model="email.name"
            class="reg__mail"
            :error-message="email.errorName"
            @change="email.errorName = ''"
            @blur="validateEmail"
        >
            E-mail
        </v-input>

        <div class="reg__consent">
            <v-check-box 
                v-model="checkbox" 
            />

            <div class="reg__consent-text">
                Я согласен с условиями обработки
                <span class="reg__consent-link">персональных данных</span>
            </div>
        </div>

        <v-button 
            class="reg__button" 
            :type="typeButton" 
            :isLoaded="isPageLoaded" 
            @click="onSign()"
        >
            Зарегистрироваться
        </v-button>

        <div class="reg__footer">
            У вас уже есть аккаунт?
            <router-link 
                class="reg__auth" 
                to="/auth" 
                target="_blank"
            > 
                Войти 
            </router-link>
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';
import VCheckBox from '@/components/common/VCheckBox';

// Helpers
import { REGEX_EMAIL } from '@/helpers/constants';

export default {
    name: 'FormRegMain',

    components: {
        VIcon,
        VInput,
        VButton,
        VCheckBox
    },

    computed: {
        typeButton() {
            const isValid = this.name && REGEX_EMAIL.test(this.email.name) && this.checkbox;
            return isValid ? 'primary' : 'disabled';
        }
    },

    data() {
        return {
            isPageLoaded: true,
            name: '',
            email: {
                name: this.$route.params.email,
                errorName: ''
            },
            checkbox: false
        };
    },

    methods: {
        validateEmail() {
            if (REGEX_EMAIL.test(this.email.name) === false) {
                this.email.errorName = 'Неверный формат';
            } else {
                this.email.errorName = '';
            }
        },

        async onSign() {
            this.isPageLoaded = false;

            const payload = {
                name: this.name,
                email: this.email.name
            };

            try {
                await this.$service.auth.signIn(payload);
                this.$emit('changeForm', payload);
            } catch (error) {
                this.email.errorName = error.data.message;
            } finally {
                this.isPageLoaded = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.reg {
    @extend .flex_column-start-center;
}

.reg__logo {
    @extend .flex_row-center-center;
    width: 107px;
    height: 75px;
    border: 3px solid $color-blue;
    border-radius: 6px;
    fill: $color-blue;
}

.reg__title {
    margin-top: 25px;
    font-size: 22px;
    text-align: center;
    color: $color-black;
}

.reg__name {
    margin-top: 70px;
}

.reg__mail {
    margin-top: 40px;
}

.reg__consent {
    @extend .flex_row-center;
    align-self: flex-start;
    margin-top: 40px;

    &-text {
        margin-left: 10px;
        line-height: 15px;
        font-size: 13px;
        color: $color-gray;
    }

    &-link {
        display: block;
        color: $color-blue;;
    }
}

.reg__button {
    width: 100%;
    height: 70px;
    margin-top: auto;
    font-family: 'EuclidCircular';
    font-size: 20px;

    &:hover {
        box-shadow: 0px 27px 19px -18px rgba(37, 108, 254, 0.31);
    }
}

.reg__footer {
    margin-top: 25px;
    font-size: 16px;
    color: $color-gray;
}

.reg__auth {
    margin-left: 5px;
    font-weight: bold;
    color: $color-black;
    background: no-repeat 0 90%;
    background-image: linear-gradient($color-blue, $color-blue);
    background-size: 100% 2px;

    &:hover {
        cursor: pointer;
        color: $color-blue;
    }
}

@media screen and (max-width: 575px) {
    .reg__logo {
        width: 71px;
        height: 50px;
        border-width: 2px;
        border-radius: 3px;
    }

    .reg__title {
        margin-top: 15px;
        font-size: 18px;
        line-height: 20px;
        max-width: 210px;
    }

    .reg__name {
        margin-top: 35px;
    }

    .reg__mail {
        margin-top: 20px;
    }

    .reg__consent {
        margin-top: 37px;

        &-text {
            margin-left: 9px;
            line-height: 12px;
            font-size: 11px;
            color: $color-gray;
        }

        &-link {
            display: block;
            color: $color-blue;;
        }
    }

    .reg__button {
        height: 45px;
        font-size: 15px;
    }

    .reg__footer {
        margin-top: 13px;
        font-size: 12px;
    }

    .reg__auth {
        margin-left: 2px;
        font-weight: 700;
        background-size: 100% 1px;
    }
}
</style>