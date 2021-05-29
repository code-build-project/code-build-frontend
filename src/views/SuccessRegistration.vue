<template>
  <div class="success">
    <div class="cb_circe26-black cb_top60">Спасибо</div>

    <div class="cb_circe20-black-line28 cb_top60">
      Завершите регистрацию по ссылке<br/> в письме, которое мы отправили на<br/>
      {{ $route.params.email }}
    </div>

    <div class="cb_row-between cb_top370">
      <div class="cb_circe20-black-line24">Отправить<br/> повторно через</div>

      <v-button v-if="interval" buttonType="interval">
        00:{{ interval > 9 ? interval : '0' + interval }}
      </v-button>

      <v-button v-else buttonType="success">
        Отправить
      </v-button>
    </div>
  </div>
</template>

<script>
import IconTimer from '@/icons/IconTimer.vue'

import VButton from '@/components/common/VButton.vue'

export default {
  name: 'SuccessRegistration',
  components: { IconTimer, VButton },
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