<template>
  <div class="auth">
    <icon-logo class="auth__logo" width="107" height="75"/>

    <div class="auth__title">Войдите, чтобы продолжить</div>

    <v-input class="cb_top100" placeholder="Логин или E-mail" />

    <v-input class="cb_top55" placeholder="Пароль" />

    <div class="auth__forget">
      <span class="auth__forget_text">Забыли пароль?</span>
    </div>

    <v-button class="cb_top75" buttonType="reg" >Войти</v-button>

    <div class="auth__footer">
      <span>Новый пользователь?</span>
      <span class="auth__footer_reg">Зарегистрируйтесь</span>
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
  @extend .cb_column-center;
  align-items: center;

  width: 490px;
  height: 735px;

  border: 2px solid #256CFE;
  border-radius: 8px;
  box-sizing: border-box;


  &__title {
    font-family: 'Circe';
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #272A37;

    margin-top: 26px;
  }

  &__forget {
    width: 374px;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    font-family: 'Circe';
    font-size: 15px;
    color: #B1B8C6;
  }

  &__footer {
    margin-top: 27px;
    font-family: 'Circe';
    font-size: 16px;
    color: #B1B8C6;

    &_reg {
      @extend .cb_underline-blue;
      position: relative;
      margin-left: 3px;
      font-weight: bold;
      color: #272A37;
    }
  }
}

// hovers
:hover.auth {
  &__logo {
    cursor: pointer;
    
    ::v-deep {
      path {
        fill: #FFFFFF;
      }

      rect {
        fill: #256CFE;
      }
    }
  }

  &__footer_reg {
    cursor: pointer;
    color: #256CFE;
  }
}
</style>