<template>
  <div class="reg">
    <v-icon class="reg__icon-logo" path="img/logo.svg" />

    <h1 class="reg__title">
      Зарегистрируйтесь в Code Build
    </h1>

    <v-input v-model="name" class="mt-70px">
      Имя
    </v-input>

    <v-input
      v-model="email.name"
      class="mt-40px"
      :is-error="email.isError"
      :error-message="email.errorName"
      @blur="validateEmail"
    >
      E-mail
    </v-input>

    <div class="reg__consent">
      <v-check-box border-color="blue" />

      <div class="ml-10px">
        Я согласен с условиями обработки
        <v-underline>персональных данных</v-underline>
      </div>
    </div>

    <v-button class="reg__button">
      Зарегистрироваться
    </v-button>

    <div class="reg__footer">
      У вас уже есть аккаунт?
      <router-link class="reg__entry" to="/auth" target="_blank">
        Войти
      </router-link>
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon.vue';
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';
import VCheckBox from '@/components/common/VCheckBox.vue';
import VUnderline from '@/components/common/VUnderline.vue';

export default {
  name: 'Registration',

  components: {
    VIcon,
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
  @extend .flex_column-start-center;
  font-family: 'Circe';

  &__title {
    margin-top: 25px;

    font-size: 22px;
    text-align: center;
    color: $color-black;
  }

  &__consent {
    @extend .flex_row-center;
    width: 374px;
    margin-top: 40px;

    font-size: 13px;
    line-height: 15px;
    color: $color-gray;
  }

  &__footer {
    margin-top: 25px;

    font-size: 16px;
    color: $color-gray;
  }

  &__button {
    width: 374px;
    height: 70px;
    margin-top: 50px;

    font-family: 'EuclidCircular';
    font-size: 20px;
    color: $color-black;
    border: 1px solid $color-gray;
    background: transparent;
  }

  &__entry {
    @extend .underline-blue;
    position: relative;
    margin-left: 5px;

    font-size: 16px;
    font-weight: bold;
    color: $color-black;
  }
}

// icons
.reg__icon {
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
:hover.reg {
  &__entry {
    cursor: pointer;
    color: $color-blue;
  }

  &__button {
    color: $color-white;
    background: $color-blue;
  }
}
</style>