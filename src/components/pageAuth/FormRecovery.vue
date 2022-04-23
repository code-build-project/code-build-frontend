<template>
  <div class="recovery">
    <h1 class="recovery__title">Восстановление пароля</h1>

    <template v-if="!isSuccess">
      <h2 class="recovery__subtitle">Укажите свой email и на него будет выслан новый пароль.</h2>

      <v-input
        v-model="email.name"
        class="mt-20px"
        :error-message="email.errorName"
        @change="email.isError = false"
        @blur="validateEmail"
        @keyup.enter.native="send()"
      >
        E-mail
      </v-input>

      <v-button
        class="recovery__button"
        :type="typeButton"
        :isLoaded="isPageLoaded"
        @click="send()"
      >
        Отправить
      </v-button>
    </template>

    <template v-else>
      <h2 class="recovery__subtitle">
        По вашему запросу на адрес {{ email.name }} было отправлено письмо с новым паролем.
      </h2>

      <v-button class="recovery__button"  type="primary" @click="$emit('changeForm')"> Авторизоваться </v-button>
    </template>
  </div>
</template>

<script>
// Components
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

// Constants
const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export default {
  name: 'FormAuthRecovery',
  components: { VInput, VButton },
  computed: {
    isValid() {
      return regex.test(this.email.name);
    },
    typeButton() {
      return this.isValid ? 'primary' : 'disabled';
    }
  },
  data() {
    return {
      isPageLoaded: true,

      email: {
        name: '',
        errorName: ''
      },

      isSuccess: false
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

    async send() {
      if(!this.isValid) return;
      this.isPageLoaded = false;

      try {
        await this.$service.auth.recoveryPassword({ email: this.email.name });
        this.isSuccess = true;
      } catch ({ data }) {
        this.email.errorName = data.message;
      } finally {
        this.isPageLoaded = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recovery {
  @extend .flex_column;

  &__title {
    font-family: 'Circe';
    font-size: 26px;
    color: $color-black;
  }

  &__subtitle {
    margin-top: 60px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 28px;
    color: $color-black;
  }

  &__button {
    height: 70px;
    margin-top: auto;

    font-family: 'EuclidCircular';
    font-size: 20px;
  }
}
</style>