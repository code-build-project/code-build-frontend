<template>
  <div class="form">
    <h1 class="form__title">Введите код</h1>

    <h2 class="form__subtitle">
      Мы отправили письмо с паролем<br />
      на почту {{ form.email }},<br />
      введите пароль из письма<br />
    </h2>

    <v-input
      v-model="password.name"
      class="mt-20px"
      :error-message="password.errorName"
      @change="password.errorName = ''"
    >
      Пароль
    </v-input>

    <div class="form__send">
      <div v-if="interval">
        Отправить новый пароль через 00:{{ interval > 9 ? interval : '0' + interval }}
      </div>
      <div v-else class="form__send-again" @click="sendCodeAgain()">Отправить пароль повторно</div>
    </div>

    <v-button
      class="form__button mt-auto"
      type="primary"
      :isLoaded="isPageLoaded"
      @click="confirmRegistration()"
    >
      Подтвердить
    </v-button>
  </div>
</template>

<script>
// Components
import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';

// Services
import apiAuth from '@/services/auth.js';

export default {
  name: 'RegistrationConfirm',
  components: { VInput, VButton },

  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      isPageLoaded: true,

      password: {
        name: '',
        errorName: ''
      },

      interval: 60
    };
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    startTimer() {
      let timer = setInterval(() => {
        if (this.interval > 0) {
          this.interval--;
        } else clearInterval(timer);
      }, 1000);
    },

    async sendCodeAgain() {
      await apiAuth.signIn(this.form);
      this.interval = 60;
      this.startTimer();
    },

    async confirmRegistration() {
      this.isPageLoaded = false;

      const payload = {
        email: this.form.email,
        password: this.password.name
      };

      try {
        await apiAuth.completionSignIn(payload);
      } catch (err) {
        this.password.errorName = err.response.data.message;
      } finally {
        this.isPageLoaded = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  @extend .flex_column;
  padding: 60px;

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

  &__send {
    @extend .flex_row-center-between;
    margin-top: 40px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 24px;
    color: #272a37;
  }

  &__send-again {
    cursor: pointer;
    color: #256cfe;
    border-bottom: 1px dashed #256cfe;

    &:hover {
      opacity: 0.7;
    }
  }

  &__button {
    height: 70px;

    font-family: 'EuclidCircular';
    font-size: 20px;
  }
}
</style>