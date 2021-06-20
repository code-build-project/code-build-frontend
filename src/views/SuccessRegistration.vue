<template>
  <div class="success">
    <div class="success__title cb_top60">Спасибо</div>

    <div class="success__subtitle cb_top60">
      Завершите регистрацию по ссылке<br />
      в письме, которое мы отправили на<br />
      {{ $route.params.email }}
    </div>

    <div class="success__footer cb_top370">
      <div>
        Отправить<br />
        повторно через
      </div>

      <v-button v-if="interval" button-type="interval">
        00:{{ interval > 9 ? interval : '0' + interval }}
      </v-button>

      <v-button v-else class="success__button">Отправить</v-button>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'SuccessRegistration',
  components: { VButton },
  props: {},
  data() {
    return {
      interval: 60
    };
  },
  computed: {},
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
        .post('http://localhost:3000/reg', payload)
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
  @extend .cb_column;

  &__title {
    font-family: 'Circe';
    font-size: 26px;
    line-height: 28px;
    color: #272a37;
  }

  &__subtitle {
    font-family: 'Circe';
    font-size: 20px;
    line-height: 28px;
    color: #272a37;
  }

  &__footer {
    @extend .cb_row-between;
    font-family: 'Circe';
    font-size: 20px;
    line-height: 24px;
    color: #272a37;
  }

  &__button {
    ::v-deep .button {
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
}
</style>