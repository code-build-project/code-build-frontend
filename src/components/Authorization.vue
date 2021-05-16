<template>
  <div class="auth">
    <div class="auth__logo">
      <icon-logo />
    </div>

    <div class="auth__subtitle">Войдите, чтобы продолжить</div>

    <v-input
      class="ps_mt50"
      :class="{ ps_mb30: emailError && emailErrorText }"
      v-model="email"
      placeholder="Логин или E-mail"
      :error="emailError"
      :errorMessage="emailErrorText"
      @blur="validateEmail"
      @change="emailError = false"
    />

    <v-input
      class="ps_mt20"
      v-model="password"
      placeholder="Пароль"
      :error="passwordError"
      :errorMessage="'Неправильный логин или пароль'"
      :typeInput="viewPassword ? 'text' : 'password'"
      @change="passwordError = false"
    >
      <template #rightIcon>
        <icon-open-eye
          v-if="viewPassword"
          class="ps_cursor"
          width="1.6vw"
          height="1.8vh"
          @click.native="viewPassword = !viewPassword"
        />
        <icon-close-eye
          v-else
          class="ps_cursor"
          width="1.7vw"
          height="1.5vh"
          @click.native="viewPassword = !viewPassword"
        />
      </template>
    </v-input>

    <div class="auth__forget">
      <span class="auth__forget_text">Забыли пароль?</span>
    </div>

    <v-button
      class="ps_mt30"
      text="Войти"
      :disabled="email && password ? false : true"
      @click="onLogin()"
    />

    <div class="auth__login">
      <span class="auth__login_left">Новый пользователь?</span>
      <router-link
        class="auth__login_right"
        :to="{ name: 'Registration' }"
        target="_blank"
      >
        Зарегистрируйтесь
      </router-link>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue'

import IconCloseEye from '@/icons/IconCloseEye.vue'
import IconOpenEye from '@/icons/IconOpenEye.vue'

import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Authorization',
  components: { IconLogo, IconCloseEye, IconOpenEye, VInput, VButton },
  props: {},
  data() {
    return {
      viewPassword: false, // видимость пароля

      email: '',
      password: '',

      emailError: false,
      emailErrorText: '',

      passwordError: false,
    }
  },
  computed: {},
  methods: {
    validateEmail() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

      if (reg.test(this.email) === false) {
        this.emailError = true
        this.emailErrorText = 'Неверный формат'
      } else {
        this.emailError = false
        this.emailErrorText = ''
      }
    },

    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      }

      this.axios
        .post('http://localhost:3000/auth', payload)
        .then((response) => {
          console.log(response)
          alert('Вы успешно авторизовались!')
        })
        .catch((error) => {
          console.log(error.response.data.type)
          this.emailError = true
          this.passwordError = true
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.auth {
  width: 25.5%;

  border: 2px solid #3300FF;
  border-radius: 5px;

  @include adaptiv-padding(58, 12);
  box-sizing: border-box;

  &__logo {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  &__subtitle {
    display: flex;
    justify-content: center;

    font-family: 'EuclidCircular';
    font-style: normal;
    font-weight: normal;
    @include adaptiv-font(20, 12);

    color: #000000;

    margin-top:  12px;
  }

  &__forget {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-family: 'Graphik LCG';
    font-style: normal;
    font-weight: normal;
    @include adaptiv-font(14, 7);

    color: #b4b9cb;

    &_text {
      &:hover {
        color: #0083f5;
        cursor: pointer;
      }
    }
  }

  &__login {
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Graphik LCG';
    font-style: normal;
    @include adaptiv-font(14, 7);

    margin-top: 20px;

    &_left {
      color: #b4b9cb;
      font-weight: normal;
    }

    &_right {
      color: #000000;
      margin-left: 5px;
      font-weight: 600;

      border-bottom: 2px solid #0083f5;

      &:hover {
        color: #0083f5;
        cursor: pointer;
      }
    }
  }
}

.ps {
  &_mt10 {
    margin-top: 10px;
  }

  &_mt20 {
    margin-top: 20px;
  }

  &_mt30 {
    margin-top: 30px;
  }

  &_mt50 {
    margin-top: 50px;
  }

  &_mb30 {
    margin-bottom: 30px;
  }

  &_cursor {
    cursor: pointer;
  }
}
</style>