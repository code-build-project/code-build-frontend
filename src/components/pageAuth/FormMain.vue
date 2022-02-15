<template>
  <div class="auth">
    <v-icon class="auth__icon-logo" path="img/logo.svg" />

    <h1 class="auth__title">Войдите, чтобы продолжить</h1>

    <v-input
      v-model="email.name"
      class="mt-95px"
      :error-message="email.errorName"
      @change="email.errorName = ''"
      @blur="validateEmail"
      @keyup.enter.native="onLogin()"
    >
      E-mail
    </v-input>

    <v-input
      v-model="password.name"
      class="mt-40px"
      type="password"
      :error-message="password.errorName"
      @change="password.errorName = ''"
      @keyup.enter.native="onLogin()"
    >
      Пароль
    </v-input>

    <div class="auth__forget" @click="$emit('changeForm')">Забыли пароль?</div>

    <v-button class="auth__button" :type="typeButton" :isLoaded="isPageLoaded" @click="onLogin()">
      Войти
    </v-button>

    <div class="auth__footer">
      <span>Новый пользователь?</span>
      <router-link class="auth__reg" to="/reg" target="_blank"> Зарегистрируйтесь </router-link>
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

// Services
import apiAuth from '@/services/auth.js';

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
      if(!this.isValid) return;
      this.isPageLoaded = false;

      const payload = {
        email: this.email.name,
        password: this.password.name
      };

      try {
        await apiAuth.logIn(payload);
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
  font-family: 'Circe';
  position: relative;

  &__title {
    margin-top: 25px;

    font-size: 22px;
    text-align: center;
    color: $color-black;
  }

  &__forget {
    margin-top: 20px;
    align-self: flex-end;

    font-size: 16px;
    color: $color-gray;

    &:hover {
      cursor: pointer;
      color: $color-blue;
    }
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
    width: 100%;
    height: 70px;
    margin-top: auto;

    font-family: 'EuclidCircular';
    font-size: 20px;
  }
}

// icons
.auth__icon {
  &-logo {
    @extend .flex_row-center-center;
    width: 107px;
    height: 75px;

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