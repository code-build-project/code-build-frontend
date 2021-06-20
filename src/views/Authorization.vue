<template>
  <div class="auth">
    <icon-logo class="auth__logo cb_top75" width="107" height="75" />

    <div class="auth__title cb_top25">Войдите, чтобы продолжить</div>

    <v-input
      v-model="email.name"
      class="cb_top95"
      label="Логин или E-mail"
      :is-error="email.isError"
      :error-message="email.errorName"
      @blur="validateEmail"
    />

    <v-input
      v-model="password.name"
      class="cb_top40"
      is-password
      label="Пароль"
      :is-error="password.isError"
      :error-message="password.errorName"
      @change="password.isError = false"
    />

    <div class="auth__forget cb_top8">Забыли пароль?</div>

    <v-button
      class="cb_top70"
      :class="isDisable ? 'auth__button' : 'auth__button-disable'"
      @click="onLogin"
    >
      Войти
    </v-button>

    <div class="auth__footer cb_top30">
      <span>Новый пользователь?</span>
      <router-link class="auth__reg cb_left5" to="/reg" target="_blank">
        Зарегистрируйтесь
      </router-link>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue';

import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'Authorization',
  components: {
    IconLogo,
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
  @extend .cb_column;
  font-family: 'Circe';
  align-items: center;

  &__title {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #272a37;
  }

  &__forget {
    @extend .cb_row-end;
    width: 374px;

    font-size: 15px;
    color: #b1b8c6;
  }

  &__footer {
    font-size: 16px;
    color: #b1b8c6;
  }

  &__reg {
    @extend .cb_underline-blue;
    position: relative;

    font-weight: bold;
    color: #272a37;
  }

  &__button {
    ::v-deep .button {
      width: 374px;
      height: 70px;

      font-family: 'EuclidCircular';
      font-size: 20px;
      color: #ffffff;
      background: #256cfe;
      border: none;

      &:active {
        background: #2468f2;
      }
    }
  }

  &__button-disable {
    ::v-deep .button {
      width: 374px;
      height: 70px;

      font-family: 'EuclidCircular';
      font-size: 20px;
      color: #272a37;
      background: transparent;
      border-color: #b1b8c6;
      border-width: 1px;

      pointer-events: none;
    }
  }
}

// hovers
:hover.auth {
  &__logo {
    cursor: pointer;

    ::v-deep {
      path {
        fill: #ffffff;
      }

      rect {
        fill: #256cfe;
      }
    }
  }

  &__forget {
    cursor: pointer;
    color: #256cfe;
  }

  &__reg {
    cursor: pointer;
    color: #256cfe;
  }

  &__button {
    ::v-deep .button {
      box-shadow: 0px 27px 19px -18px rgba(37, 108, 254, 0.31);
    }
  }
}
</style>