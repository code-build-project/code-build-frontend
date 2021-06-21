<template>
  <div class="reg">
    <icon-logo class="reg__logo cb_top75" width="107" height="75" />

    <div class="reg__title cb_top25">
      Зарегистрируйтесь в Code Build
    </div>

    <v-input v-model="name" class="cb_top70">
      Имя
    </v-input>

    <v-input 
      v-model="email.name" 
      class="cb_top40"    
      :is-error="email.isError"
      :error-message="email.errorName"
      @blur="validateEmail"
    >
      E-mail
    </v-input>

    <div class="reg__consent cb_top40">
      <v-check-box border-color="blue" />

      <div class="cb_left10">
        Я согласен с условиями обработки
        <v-underline>персональных данных</v-underline>
      </div>
    </div>

    <v-button class="reg__button cb_top50">
      Зарегистрироваться
    </v-button>

    <div class="reg__footer cb_top25">
      <span>У вас уже есть аккаунт?</span>
      <router-link class="reg__entry cb_left5" to="/auth" target="_blank">
        Войти
      </router-link>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue';

import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';
import VCheckBox from '@/components/common/VCheckBox.vue';
import VUnderline from '@/components/common/VUnderline.vue'

export default {
  name: 'Registration',

  components: {
    IconLogo,
    VInput,
    VButton,
    VCheckBox,
    VUnderline
  },

  props: {},

  data() {
    return {
      name: '',

      email: {
        name: '',
        isError: false,
        errorName: ''
      },

      checkbox: false
    };
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

    onSign() {
      const payload = {
        name: this.name,
        surname: this.surname,
        email: this.email
      };

      this.axios
        .post('/reg', payload)
        .then(() => {
          this.$router.push({ name: 'SuccessRegistration', params: payload });
        })
        .catch(() => {
          this.emailError = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.reg {
  @extend .cb_column;
  font-family: 'Circe';
  align-items: center;

  &__title {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #272a37;
  }

  &__consent {
    @extend .cb_row;
    align-items: center;
    width: 374px;

    font-size: 13px;
    line-height: 15px;
    color: #b1b8c6;
  }

  &__footer {
    font-size: 16px;
    color: #b1b8c6;
  }

  &__entry {
    @extend .cb_underline-blue;
    position: relative;

    font-size: 16px;
    font-weight: bold;
    color: #272a37;
  }

  &__button {
    ::v-deep .button {
      width: 374px;
      height: 70px;

      font-family: 'EuclidCircular';
      font-size: 20px;
      color: #272a37;
      border: 1px solid #b1b8c6;
      background: transparent;
    }
  }
}

// hovers
:hover.reg {
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

  &__entry {
    cursor: pointer;
    color: #256cfe;
  }

  &__button {
    ::v-deep .button {
      color: #ffffff;
      background: #256cfe;
    }
  }
}
</style>