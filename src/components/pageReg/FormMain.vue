<template>
  <div class="reg">
    <v-icon class="reg__icon-logo" path="img/logo.svg" />

    <h1 class="reg__title">Зарегистрируйтесь в Code Build</h1>

    <v-input v-model="name" class="mt-70px"> Имя </v-input>

    <v-input
      v-model="email.name"
      class="mt-40px"
      :error-message="email.errorName"
      @change="email.errorName = ''"
      @blur="validateEmail"
    >
      E-mail
    </v-input>

    <div class="reg__consent">
      <v-check-box v-model="checkbox" border-color="blue" />

      <div class="ml-10px">
        Я согласен с условиями обработки
        <v-underline>персональных данных</v-underline>
      </div>
    </div>

    <v-button class="reg__button" :type="typeButton" :isLoaded="isPageLoaded" @click="onSign()">
      Зарегистрироваться
    </v-button>

    <div class="reg__footer">
      У вас уже есть аккаунт?
      <router-link class="reg__entry" to="/auth" target="_blank"> Войти </router-link>
    </div>
  </div>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon.vue';
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';
import VCheckBox from '@/components/common/VCheckBox.vue';
import VUnderline from '@/components/common/VUnderline.vue';

// Services
import apiAuth from '@/services/auth.js';

// Constants
const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default {
  name: 'FormRegMain',

  components: {
    VIcon,
    VInput,
    VButton,
    VCheckBox,
    VUnderline
  },

  computed: {
    typeButton() {
      const isValid = this.name && regex.test(this.email.name) && this.checkbox;
      return isValid ? 'primary' : 'disabled';
    }
  },

  data() {
    return {
      isPageLoaded: true,

      name: '',

      email: {
        name: this.$route.params.email,
        errorName: ''
      },

      checkbox: false
    };
  },

  methods: {
    validateEmail() {
      if (regex.test(this.email.name) === false) {
        this.email.errorName = 'Неверный формат';
      } else {
        this.email.errorName = '';
      }
    },

    async onSign() {
      this.isPageLoaded = false;

      const payload = {
        name: this.name,
        email: this.email.name
      };

      try {
        await apiAuth.signIn(payload);
        this.$emit('changeForm', payload);
      } catch (error) {
        this.email.errorName = error.data.message;
      } finally {
        this.isPageLoaded = true;
      }
    }
  },
  created() {
    console.log(this.$route.params.email);
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

  &__entry {
    @extend .underline-blue;
    position: relative;
    margin-left: 5px;

    font-size: 16px;
    font-weight: bold;
    color: $color-black;
  }
}

.reg__button {
  width: 374px;
  height: 70px;
  margin-top: auto;

  font-family: 'EuclidCircular';
  font-size: 20px;
}

// icons
.reg__icon {
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