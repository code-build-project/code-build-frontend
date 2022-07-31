<template>
    <div class="recovery">
        <h1 class="recovery__title">Восстановление пароля</h1>

        <template v-if="!isSuccess">
            <h2 class="recovery__subtitle">
                Укажите свой email и на него будет выслан новый пароль.
            </h2>

            <v-input
                v-model="form.email"
                class="recovery__mail"
                :errorMessage="errors.email"
                @change="errors.email = ''"
                @blur="validateEmail"
                @keyup.enter.native="send()"
            >
                E-mail
            </v-input>

            <v-button
                class="recovery__button"
                :type="typeButton"
                :isLoaded="isPageLoaded"
                @click="send()"
            >
                Отправить
            </v-button>

            <div class="recovery__footer">
                Вспомнили пароль?
                <div 
                    class="recovery__auth" 
                    @click="$emit('changeForm', 'main')"
                > 
                    Войти 
                </div>
            </div>
        </template>

        <template v-else>
            <h2 class="recovery__subtitle">
                По вашему запросу на адрес {{ form.email }} было отправлено письмо с новым паролем.
            </h2>

            <v-button 
                class="recovery__button" 
                type="primary" 
                @click="$emit('changeForm', 'main')"
            >
                Авторизоваться
            </v-button>
        </template>
    </div>
</template>

<script>
// Components
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';

// Helpers
import { REGEX_EMAIL } from '@/helpers/constants';

export default {
    name: 'AuthFormRecovery',

    components: {
        VInput,
        VButton
    },

    data() {
        return {
            isPageLoaded: true,
            isSuccess: false,

            form: {
                email: ''
            },

            errors: {
                email: ''
            }
        };
    },

    computed: {
        isValid() {
            return REGEX_EMAIL.test(this.form.email);
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

        async send() {
            if (!this.isValid) return;
            this.isPageLoaded = false;

            try {
                await this.$service.auth.recovery(this.form);
                this.isSuccess = true;
            } catch ({ data }) {
                this.errors.email = data.message;
            } finally {
                this.isPageLoaded = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.recovery {
    @extend .flex_column;
}

.recovery__title {
    font-size: 26px;
    color: $color-black;
}

.recovery__subtitle {
    margin-top: 60px;
    font-size: 20px;
    line-height: 28px;
    color: $color-black;
}

.recovery__mail {
    margin-top: 60px;
}

.recovery__button {
    height: 70px;
    margin-top: auto;
    font-family: 'EuclidCircular';
    font-size: 20px;
}

.recovery__footer {
    display: flex;
    margin-top: 25px;
    font-size: 16px;
    color: $color-gray;
    align-self: center;
}

.recovery__auth {
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
    .recovery__title {
        font-size: 18px;
    }

    .recovery__subtitle {
        margin-top: 30px;
        font-size: 15px;
        line-height: 20px;
    }

    .recovery__mail {
        margin-top: 30px;
    }

    .recovery__button {
        height: 45px;
        font-size: 15px;
    }

    .recovery__footer {
        margin-top: 13px;
        font-size: 12px;
    }

    .recovery__auth {
        margin-left: 2px;
        font-weight: 700;
        background-size: 100% 1px;
    }
}
</style>