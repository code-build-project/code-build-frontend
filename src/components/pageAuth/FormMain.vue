<template>
    <div class="auth">
        <v-icon 
            class="auth__logo" 
            path="img/logo.svg" 
        />

        <h1 class="auth__title">Войдите, чтобы продолжить</h1>

        <v-input
            v-model="email.name"
            class="auth__mail"
            :error-message="email.errorName"
            @change="email.errorName = ''"
            @blur="validateEmail"
            @keyup.enter.native="onLogin()"
        >
            E-mail
        </v-input>

        <v-input
            v-model="password.name"
            class="auth__password"
            type="password"
            :error-message="password.errorName"
            @change="password.errorName = ''"
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
                target="_blank"
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

// Constants
const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default {
    name: 'FormAuthMain',

    components: {
        VIcon,
        VInput,
        VButton
    },

    data() {
        return {
            isPageLoaded: true,

            email: {
                name: '',
                errorName: ''
            },

            password: {
                name: '',
                errorName: ''
            }
        };
    },

    computed: {
        isValid() {
            return regex.test(this.email.name) && this.password.name;
        },
        
        typeButton() {
            return this.isValid ? 'primary' : 'disabled';
        }
    },

    methods: {
        validateEmail() {
            if (regex.test(this.email.name) === false) {
                this.email.errorName = 'Неверный формат';
            } else {
                this.email.errorName = '';
            }
        },

        async onLogin() {
            if (!this.isValid) return;
            this.isPageLoaded = false;

            const payload = {
                email: this.email.name,
                password: this.password.name
            };

            try {
                await this.$service.auth.logIn(payload);
                this.$router.push('/').then(() => location.reload());
            } catch ({ data }) {
                if (data.name === 'IncorrectEmail') {
                    this.email.errorName = data.message;
                } else {
                    this.password.errorName = data.message;
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
    margin-top: 20px;
    align-self: flex-end;
    font-size: 16px;
    color: $color-gray;

    &:hover {
        cursor: pointer;
        color: $color-blue;
    }
}

.auth__button {
    width: 100%;
    height: 70px;
    margin-top: auto;
    font-family: 'EuclidCircular';
    font-size: 20px;

    &:hover {
        box-shadow: 0px 27px 19px -18px rgba(37, 108, 254, 0.31);
    }
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

    &:hover {
        cursor: pointer;
        color: $color-blue;
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
        margin-top: 35px;
    }

    .auth__password {
        margin-top: 20px;
    }

    .auth__forget {
        margin-top: 15px;
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