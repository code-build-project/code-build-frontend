<template>
  <div class="auth">
    <v-icon class="auth__icon-logo" path="img/logo.svg" />

    <h1 class="auth__title">
      Войдите, чтобы продолжить
    </h1>

    <v-input
      v-model="email.name"
      class="mt-95px"
      :is-error="email.isError"
      :error-message="email.errorName"
      @blur="validateEmail"
    >
      Логин или E-mail
    </v-input>

    <v-input
      v-model="password.name"
      class="mt-40px"
      type="password"
      :is-error="password.isError"
      :error-message="password.errorName"
      @change="password.isError = false"
    >
      Пароль
    </v-input>

    <v-button
      class="auth__button"
      :class="isDisable ? 'auth__button-active' : 'auth__button-disable'"
      @click="onLogin"
    >
      Войти
    </v-button>

    <div class="auth__footer">
      <span>Новый пользователь?</span>
      <router-link class="auth__reg" to="/reg" target="_blank">
        Зарегистрируйтесь
      </router-link>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'Authorization',
  components: {
    VIcon,
    VInput,
    VButton
  },
  data() {
    return {
      email: {
        name: '',
        isError: false,
        errorName: ''
      },

      password: {
        name: '',
        isError: false,
        errorName: ''
      }
    };
  },
  computed: {
    // Флаг дизейбла кнопки
    isDisable() {
      return this.email.name && !this.email.isError && this.password.name && !this.password.isError;
    }
  },
  methods: {
    validateEmail() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(this.email.name) === false) {
        this.email.isError = true;
        this.email.errorName = 'Неверный формат';
      } else {
        this.email.isError = false;
        this.email.errorName = '';
      }
    },

    onLogin() {
      const payload = {
        email: this.email.name,
        password: this.password.name
      };

      this.axios
        .post('/login', payload)
        .then((response) => {
          localStorage.token = response.data.token;
          this.$router.push('/').then(() => location.reload());
        })
        .catch((error) => {
          this.email.isError = true;
          this.password.isError = true;
          this.password.errorName = error.response.data.message;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  @extend .flex_column-start-center;
  font-family: 'Circe';

  &__title {
    margin-top: 25px;

    font-size: 22px;
    text-align: center;
    color: $color-black;
  }

  &__footer {
    margin-top: 30px;

    font-size: 16px;
    color: $color-gray;
  }

  &__reg {
    @extend .underline-blue;
    position: relative;
    margin-left: 5px;

    font-weight: bold;
    color: $color-black;
  }

  &__button {
    width: 374px;
    height: 70px;
    margin-top: 100px;

    font-family: 'EuclidCircular';
    font-size: 20px;
  }

  &__button-active {
    color: $color-white;
    background: $color-blue;
    border: none;

    &:active {
      background: $color-navy;
    }
  }

  &__button-disable {
    color: $color-black;
    background: transparent;
    border-color: $color-gray;
    border-width: 1px;

    pointer-events: none;
  }
}

// icons
.auth__icon {
  &-logo {
    @extend .flex_row-center-center;
    width: 107px;
    height: 75px;
    margin-top: 75px;

    border: 3px solid $color-blue;
    border-radius: 6px;
    fill: $color-blue;
  }
}

// hovers
:hover.auth {
  &__reg {
    cursor: pointer;
    color: $color-blue;
  }

  &__button {
    box-shadow: 0px 27px 19px -18px rgba(37, 108, 254, 0.31);
  }
}
</style>