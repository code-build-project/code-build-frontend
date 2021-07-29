<template>
  <div class="success">
    <h1 class="success__title">Спасибо</h1>

    <h2 class="success__subtitle">
      Завершите регистрацию по ссылке<br />
      в письме, которое мы отправили на<br />
      {{ $route.params.email }}
    </h2>

    <div class="success__footer">
      <div>
        Отправить<br />
        повторно через
      </div>

      <v-button v-if="interval" button-type="interval">
        00:{{ interval > 9 ? interval : '0' + interval }}
      </v-button>

      <v-button v-else class="success__button"> Отправить </v-button>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'SuccessRegistration',
  components: { VButton },

  data() {
    return {
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

    onSign() {
      this.interval = 60;
      this.startTimer();

      const payload = {
        name: this.$route.params.name,
        surname: this.$route.params.surname,
        email: this.$route.params.email
      };

      this.axios
        .post('/reg', payload)
        .then(() => {
          console.log('Успешно');
        })
        .catch(() => {
          console.log('Ошибка');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.success {
  @extend .flex_column;

  &__title {
    margin-top: 60px;

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

  &__footer {
    @extend .flex_row-center-between;
    margin-top: 370px;

    font-family: 'Circe';
    font-size: 20px;
    line-height: 24px;
    color: #272a37;
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