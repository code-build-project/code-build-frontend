<template>
  <div class="auth">
    <icon-logo
      class="auth__logo cb_top75"
      width="107"
      height="75"
    />

    <div class="auth__title cb_top25">
      Войдите, чтобы продолжить
    </div>

    <v-input
      class="cb_top95"
      placeholder="Логин или E-mail"
    />

    <v-input
      class="cb_top40"
      placeholder="Пароль"
    />

    <div class="auth__forget cb_top8">
      Забыли пароль?
    </div>

    <v-button
      class="cb_top70"
      button-type="reg"
    >
      Войти
    </v-button>

    <div class="auth__footer cb_top30">
      <span>Новый пользователь?</span>
      <router-link
        class="auth__reg cb_left5"
        to="/reg"
        target="_blank"
      >
        Зарегистрируйтесь
      </router-link>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue'

// import IconCloseEye from '@/icons/IconCloseEye.vue'
// import IconOpenEye from '@/icons/IconOpenEye.vue'

import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'Authorization',
  components: {
    IconLogo,
    // IconCloseEye,
    // IconOpenEye,
    VInput,
    VButton
  },
  props: {},
  data() {
    return {
      viewPassword: false, // видимость пароля

      email: '',
      password: '',

      emailError: false,
      emailErrorText: '',

      passwordError: false
    }
  },
  computed: {},
  methods: {
    // validateEmail () {
    //   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    //   if (reg.test(this.email) === false) {
    //     this.emailError = true
    //     this.emailErrorText = 'Неверный формат'
    //   } else {
    //     this.emailError = false
    //     this.emailErrorText = ''
    //   }
    // },

    onLogin() {
      const payload = {
        email: this.email,
        password: this.password
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
    }
  }
}
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

  &__reg {
    cursor: pointer;
    color: #256cfe;
  }
}
</style>