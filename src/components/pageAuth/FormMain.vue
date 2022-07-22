<template>
    <div class="auth">
        <v-icon 
            class="auth__logo" 
            path="img/logo.svg" 
        />

        <h1 class="auth__title">Войдите, чтобы продолжить</h1>

        <v-input
            v-model="form.email"
            class="auth__mail"
            :error-message="errors.email"
            @change="errors.email = ''"
            @blur="validateEmail"
            @keyup.enter.native="onLogin()"
        >
            E-mail
        </v-input>

        <v-input
            v-model="form.password"
            class="auth__password"
            type="password"
            :error-message="errors.password"
            @change="errors.password = ''"
            @keyup.enter.native="onLogin()"
        >
            Пароль
        </v-input>

        <div 
            class="auth__forget" 
            @click="$emit('changeForm', 'recovery')"
        >
            Забыли пароль?
        </div>

        <v-button
            class="auth__button"
            :type="typeButton"
            :isLoaded="isPageLoaded"
            @click="onLogin()"
        >
            Войти
        </v-button>

        <div class="auth__footer">
            <span>Новый пользователь?</span>
            <router-link 
                class="auth__reg" 
                to="/reg" 
            >
                Зарегистрируйтесь
            </router-link>
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';

// Helpers
import { REGEX_EMAIL } from '@/helpers/constants';

export default {
    name: 'AuthFormMain',

    components: {
        VIcon,
        VInput,
        VButton
    },

    data() {
        return {
            isPageLoaded: true,

            form: {
                email: '',
                password: '',
            },

            errors: {
                email: '',
                password: '',
            }
        };
    },

    computed: {
        isValid() {
            return REGEX_EMAIL.test(this.form.email) && this.form.password;
        },
        
        typeButton() {
            return this.isValid ? 'primary' : 'disabled';
        }
    },

    methods: {
        validateEmail() {
            if (!REGEX_EMAIL.test(this.form.email)) {
                this.errors.email = 'Неверный формат';
            } else {
                this.errors.email = '';
            }
        },

        async onLogin() {
            if (!this.isValid) return;
            this.isPageLoaded = false;

            try {
                await this.$service.auth.logIn(this.form);
                this.$router.push('/').then(() => location.reload());
            } catch ({ data }) {
                if (data.type === 'IncorrectEmail') {
                    this.errors.email = data.message;
                } else {
                    this.errors.password = data.message;
                }
            } finally {
                this.isPageLoaded = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.auth {
    @extend .flex_column-start-center;
    position: relative;
}

.auth__logo {
    @extend .flex_row-center-center;
    width: 107px;
    height: 75px;
    border: 3px solid $color-blue;
    border-radius: 6px;
    fill: $color-blue;
}

.auth__title {
    margin-top: 25px;
    font-size: 22px;
    text-align: center;
    color: $color-black;
}

.auth__mail {
    margin-top: 95px;
}

.auth__password {
    margin-top: 40px;
}

.auth__forget {
    margin-top: 10px;
    align-self: flex-end;
    font-size: 16px;
    color: $color-gray;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            color: $color-blue;
        }
    }
}

.auth__button {
    width: 100%;
    height: 70px;
    margin-top: auto;
    font-family: 'EuclidCircular';
    font-size: 20px;
}

.auth__footer {
    margin-top: 30px;
    font-size: 16px;
    color: $color-gray;
}

.auth__reg {
    margin-left: 5px;
    font-weight: bold;
    color: $color-black;
    background: no-repeat 0 90%;
    background-image: linear-gradient($color-blue, $color-blue);
    background-size: 100% 2px;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            color: $color-blue;
        }
    }
}

@media screen and (max-width: 575px) {
    .auth__logo {
        width: 71px;
        height: 50px;
        border-width: 2px;
        border-radius: 3px;
    }

    .auth__title {
        margin-top: 15px;
        font-size: 18px;
    }

    .auth__mail {
        margin-top: 25px;
    }

    .auth__password {
        margin-top: 30px;
    }

    .auth__forget {
        margin-top: 6px;
        font-size: 12px;
    }

    .auth__button {
        height: 45px;
        font-size: 15px;
    }

    .auth__footer {
        margin-top: 13px;
        font-size: 12px;
        text-align: center;
    }

    .auth__reg {
        margin-left: 0px;
        font-weight: 700;
        background-size: 100% 1px;
    }
}
</style>