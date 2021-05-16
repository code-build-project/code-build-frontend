<template>
  <div class="success">
    <div class="success__header">Спасибо</div>

    <div class="success__text">
      Завершите регистрацию по ссылке в письме, которое мы отправили на
      <b>{{ $route.params.email }}</b>
    </div>

    <div class="repeat">
      <v-button
        class="repeat__button"
        text="Отправить повторно"
        :disabled="interval !== 0"
        :buttonStyle="'small'"
        @click="onSign()"
      />

      <icon-timer class="ps_ml11" />

      <span class="repeat__timer">
        через 00:{{ interval > 9 ? interval : '0' + interval }}
      </span>
    </div>
  </div>
</template>

<script>
import IconTimer from '@/icons/IconTimer.vue'

import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'SuccessRegistration',
  components: { IconTimer, VInput, VButton },
  props: {},
  data() {
    return {
      interval: 60,
    }
  },
  computed: {},
  methods: {
    startTimer() {
      let timer = setInterval(() => {
        if (this.interval > 0) {
          this.interval--
        } else clearInterval(timer)
      }, 1000)
    },

    onSign() {
      this.interval = 60
      this.startTimer()

      const payload = {
        name: this.$route.params.name,
        surname: this.$route.params.surname,
        email: this.$route.params.email,
      }

      this.axios
        .post('http://localhost:3000/reg', payload)
        .then(() => {
          console.log('Успешно')
        })
        .catch(() => {
          console.log('Ошибка')
        })
    },
  },
  mounted() {
    this.startTimer()
  },
}
</script>

<style lang="scss" scoped>
.success {
  width: 30%;

  border: 2px solid #0083f5;
  border-radius: 22px;

  @include adaptiv-padding(65, 12);
  box-sizing: border-box;

  &__header {
    font-family: 'Graphik LCG';
    font-style: normal;
    font-weight: bold;
    @include adaptiv-font(25, 12);

    color: #000000;
  }

  &__text {
    width: 85%;

    font-family: 'Graphik LCG';
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    @include adaptiv-font(20, 10);

    color: #000000;

    margin-top: 45px;
  }
}

.repeat {
  display: flex;
  align-items: center;
  margin-top: 200px;

  &__button {
    width: 60%;
  }

  &__timer {
    margin-left: 3%;
    width: 21%;

    font-family: 'Graphik LCG';
    font-style: normal;
    font-weight: normal;
    @include adaptiv-font(14, 7);

    color: #a5b4c5;
  }
}

.ps {
  &_ml11 {
    margin-left: 11%;
  }
}
</style>