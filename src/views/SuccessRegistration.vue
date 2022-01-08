<template>
  <div class="success">
    <h1 class="success__title">Введите код</h1>

    <h2 class="success__subtitle">
      Мы отправили письмо с паролем<br />
      на почту {{ $route.params.email }},<br />
      введите пароль из письма<br />
    </h2>

    <v-input v-model="password" class="mt-20px"> Пароль </v-input>

    <div class="success__send">
      <div v-if="interval">
        Отправить новый пароль через 00:{{ interval > 9 ? interval : '0' + interval }}
      </div>
      <div v-else class="success__send-again" @click="sendCodeAgain()">Отправить пароль повторно</div>
    </div>

    <v-button class="success__button mt-auto" @click="confirmRegistration()">
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
  name: 'SuccessRegistration',
  components: { VInput, VButton },

  data() {
    return {
      password: null,
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
      await apiAuth.signIn(this.$route.params);
      this.interval = 60;
      this.startTimer();
    },

    async confirmRegistration() {
      const payload = {
        email: this.$route.params.email,
        password: this.password
      };

      await apiAuth.completionSignIn(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.success {
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
    width: 190px;
    height: 70px;

    font-family: 'Circe';
    font-size: 20px;
    color: #ffffff;
    border-color: #b1b8c6;
    border-width: 1px;
    background: #256cfe;
  }
}
</style>