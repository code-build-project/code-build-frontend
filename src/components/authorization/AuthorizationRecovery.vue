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
      >
        E-mail
      </v-input>

      <v-button
        class="recovery__button"
        type="primary"
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

      <v-button class="recovery__button" @click="$emit('changeForm')"> Авторизоваться </v-button>
    </template>
  </div>
</template>

<script>
// Components
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

// Services
import apiAuth from '@/services/auth.js';

export default {
  name: 'AuthorizationRecovery',
  components: { VInput, VButton },

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
    async send() {
      this.isPageLoaded = false;

      try {
        await apiAuth.recoveryPassword({ email: this.email.name });
        this.isSuccess = true;
      } catch (error) {
        this.email.errorName = error.response.data.message;
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
    color: #272a37;
  }

  &__subtitle {
    margin-top: 60px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 28px;
    color: #272a37;
  }

  &__button {
    height: 70px;
    margin-top: auto;

    font-family: 'EuclidCircular';
    font-size: 20px;
  }
}
</style>