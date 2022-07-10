<template>
    <div class="popup">
        <div class="popup__form">
            <v-icon 
                class="popup__icon-close" 
                path="img/close.svg" 
                @click="$emit('close')" 
            />

            <h1 class="popup__title">Личные данные</h1>

            <v-input
                v-model="form.name"
                class="popup__field"
                :error-message="errors.name"
                @change="errors.name = ''"
            >
                Имя
            </v-input>

            <div class="popup__change">
                <v-check-box 
                    v-model="form.checkbox"
                    class="popup__checkbox"
                />

                <span>Изменить пароль</span>
            </div>

            <v-input
                v-model="form.oldPassword"
                class="popup__field"
                type="password"
                :disabled="!form.checkbox"
                :error-message="errors.oldPassword"
                @change="errors.oldPassword = ''"
            >
                Старый пароль
            </v-input>

            <v-input
                v-model="form.newPassword"
                class="popup__field"
                type="password"
                :disabled="!form.checkbox"
                :error-message="errors.newPassword"
                @change="errors.newPassword = ''"
            >
                Новый пароль
            </v-input>

            <v-button
                class="popup__button"
                :type="typeButton"
                :isLoaded="isPageLoaded"
                @click="save"
            >
                Изменить
            </v-button>
        </div>
    </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';
import VInput from '@/components/common/VInput';
import VButton from '@/components/common/VButton';
import VCheckBox from '@/components/common/VCheckBox';
import { mapGetters } from 'vuex';

// Mixins
import popup from '@/mixins/popup';

export default {
    name: 'PopupCabinet',

    components: {
        VIcon,
        VInput,
        VButton,
        VCheckBox
    },

    mixins: [popup],

    computed: {
        ...mapGetters(['user']),

        isValid() {
            let { name, checkbox, oldPassword, newPassword } = this.form;
            let isChangeName = name !== this.user.name;

            return checkbox ? name && oldPassword && newPassword : name && isChangeName;
        },

        typeButton() {
            return this.isValid ? 'primary' : 'disabled';
        }
    },

    data() {
        return {
            isPageLoaded: true,

            form: {
                name: '',
                checkbox: false,
                oldPassword: '',
                newPassword: '',
            },

            errors: {
                name: '',
                oldPassword: '',
                newPassword: '',
            }
        };
    },

    methods: {
        async save() {
            this.isPageLoaded = false;

            try {
                if (this.form.name !== this.user.name) {
                    await this.$service.users.changeName(this.form);
                }

                if (this.form.checkbox) {
                    await this.$service.users.changePassword(this.form);
                }
            } catch ({ data }) {
                if (data.type === 'IncorrectName') {
                    this.errors.name = data.message;
                }
            } finally {
                this.isPageLoaded = true;
            }
        }
    },

    mounted() {
        this.form.name = this.user.name;
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

.popup__form {
    @extend .flex_column;
    position: relative;
    width: 430px;
    border-radius: 8px;
    padding: 50px;
    background: $color-white;
}

.popup__title {
    font-size: 22px;
    color: $color-black;
    margin-top: 20px;
    margin-bottom: 10px;
}

.popup__field {
    margin-top: 20px;
}

.popup__change {
    @extend .flex_row-center-start;
    margin-top: 25px;
}

.popup__checkbox {
    margin-right: 10px;

    &::v-deep {
        .checkbox-input + label::before {
            width: 20px;
            height: 20px;
            border-radius: 5px;
        }
    }
}

.popup__button {
    width: 100%;
    height: 60px;
    margin-top: 60px;
    font-family: 'EuclidCircular';
    font-size: 18px;
}

// Иконки
.popup__icon {
    &-close {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 5px;
        left: calc(100% + 20px);
        cursor: pointer;
        stroke: $color-white;
    }
}
</style>