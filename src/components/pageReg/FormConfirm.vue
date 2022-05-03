<template>
    <div class="form">
        <h1 class="form__title">Введите код</h1>

        <h2 class="form__subtitle">
            Мы отправили письмо с паролем<br />
            на почту {{ form.email }},<br />
            введите пароль из письма<br />
        </h2>

        <v-input
            v-model="password.name"
            class="form__password"
            :error-message="password.errorName"
            @change="password.errorName = ''"
        >
            Пароль
        </v-input>

        <div class="form__send">
            <div v-if="interval">
                Отправить новый пароль через 00:{{ interval > 9 ? interval : '0' + interval }}
            </div>
            <div 
                v-else 
                class="form__send-again" 
                @click="sendCodeAgain()"
            >
                Отправить пароль повторно
            </div>
        </div>

        <v-button
            class="form__button"
            type="primary"
            :isLoaded="isPageLoaded"
            @click="confirmRegistration()"
        >
            Подтвердить
        </v-button>
    </div>
</template>

<script>
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';

export default {
    name: 'FormRegConfirm',

    components: { 
        VInput, 
        VButton 
    },

    props: {
        form: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },

    data() {
        return {
            isPageLoaded: true,

            password: {
                name: '',
                errorName: ''
            },

            interval: 60
        };
    },

    mounted() {
        this.startTimer();
    },

    methods: {
        startTimer() {
            let timer = setInterval(() => {
                if (this.interval > 0) {
                    this.interval--;
                } else clearInterval(timer);
            }, 1000);
        },

        async sendCodeAgain() {
            await this.$service.auth.signIn(this.form);
            this.interval = 60;
            this.startTimer();
        },

        async confirmRegistration() {
            this.isPageLoaded = false;

            const payload = {
                email: this.form.email,
                password: this.password.name
            };

            try {
                await this.$service.auth.completionSignIn(payload);
            } catch (err) {
                this.password.errorName = err.response.data.message;
            } finally {
                this.isPageLoaded = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.form {
    @extend .flex_column;
}

.form__title {
    font-size: 26px;
    color: $color-black;
}

.form__subtitle {
    margin-top: 60px;
    font-size: 20px;
    line-height: 28px;
    color: $color-black;
}

.form__password {
    margin-top: 20px;
}

.form__send {
    @extend .flex_row-center-between;
    margin-top: 40px;
    font-size: 20px;
    line-height: 24px;
    color: $color-black;
}

.form__send-again {
    cursor: pointer;
    color: $color-blue;

    &:hover {
        opacity: 0.7;
    }
}

.form__button {
    height: 70px;
    margin-top: auto;
    font-family: 'EuclidCircular';
    font-size: 20px;
}

@media screen and (max-width: 575px) {
    .form__title {
        font-size: 18px;
    }

    .form__subtitle {
        margin-top: 30px;
        font-size: 15px;
        line-height: 20px;
    }

    .form__send {
        margin-top: 20px;
        font-size: 13px;
        line-height: 14px;
    }

    .form__button {
        height: 45px;
        font-size: 15px;
    }
}
</style>