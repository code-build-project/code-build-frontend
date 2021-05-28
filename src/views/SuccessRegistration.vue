<template>
  <div>
    <div class="success__header">Спасибо</div>

    <div class="success__text">
      Завершите регистрацию по ссылке в письме, которое мы отправили на
      <b>{{ $route.params.email }}</b>
    </div>

    <div class="success__footer">
      <div class="success__footer-text">Отправить повторно через</div>

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
  @extend .cb_column;

  &__header {
    font-family: 'Circe';
    font-size: 26px;
    line-height: 28px;
    color: #272A37;
  }

  &__text {
    font-family: 'Circe';
    font-size: 20px;
    line-height: 28px;
    color: #272A37;

    margin-top: 50px;
  }

  &__footer {
    @extend .cb_row-between;
    margin-top: 330px;
  }

  &__footer-text {
    font-family: 'Circe';
    font-size: 20px;
    line-height: 24px;
    color: #272A37;
  }
}

.repeat {
  display: flex;
  align-items: center;
  margin-top: 200px;

  &__text {
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