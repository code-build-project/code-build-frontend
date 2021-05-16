<template>
  <div class="reg">
    <div class="reg__header">Зарегистрироваться</div>

    <v-input class="ps_mt50" v-model="name" placeholder="Имя" />

    <v-input class="ps_mt20" v-model="surname" placeholder="Фамилия" />

    <v-input
      class="ps_mt20"
      v-model="email"
      placeholder="Email"
      :error="emailError"
    />

    <div class="reg__accord">
      <v-check-box v-model="checkbox" />
      <div class="reg__accord__text">
        <span class="reg__accord__text_left">
          Я согласен с условиями обработки
        </span>
        <span class="reg__accord__text_right">персональных данных</span>
      </div>
    </div>

    <v-button
      class="ps_mt50"
      text="Зарегистрироваться"
      :disabled="name && surname && email && checkbox ? false : true"
      @click="onSign()"
    />

    <div class="reg__login">
      <span class="reg__login_left">У вас уже есть аккаунт?</span>

      <router-link
        class="reg__login_right"
        :to="{ name: 'Authorization' }"
        target="_blank"
      >
        Войти
      </router-link>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'
import VCheckBox from '@/components/common/VCheckBox.vue'

export default {
  name: 'Registration',
  components: { VInput, VButton, VCheckBox },
  props: {},
  data() {
    return {
      name: '',
      surname: '',
      email: '',

      emailError: false,

      checkbox: false,
    }
  },
  computed: {},
  methods: {
    onSign() {
      const payload = {
        name: this.name,
        surname: this.surname,
        email: this.email,
      }

      this.axios
        .post('http://localhost:3000/reg', payload)
        .then(() => {
          this.$router.push({ name: 'SuccessRegistration', params: payload })
        })
        .catch(() => {
          this.emailError = true
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.reg {
  width: 30%;

  border: 1px solid #efefef;
  border-radius: 22px;

  @include adaptiv-padding(65, 12);
  padding-bottom: 3% !important;
  box-sizing: border-box;

  &__header {
    font-family: 'Graphik LCG';
    font-style: normal;
    font-weight: bold;
    @include adaptiv-font(25, 12);

    color: #000000;
  }

  &__accord {
    display: flex;
    align-items: center;
    margin-top: 20px;

    &__text {
      font-family: 'Graphik LCG';
      font-style: normal;
      font-weight: normal;
      @include adaptiv-font(13, 5);

      margin-left: 10px;

      &_left {
        color: #a5b4c5;
      }

      &_right {
        color: #0083f5;

        &:hover {
          cursor: pointer;
          color: #000000;
        }
      }
    }
  }

  &__login {
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Graphik LCG';
    font-style: normal;
    @include adaptiv-font(14, 7);

    margin-top: 20px;

    &_left {
      color: #b4b9cb;
      font-weight: normal;
    }

    &_right {
      color: #000000;
      margin-left: 5px;
      font-weight: 600;

      border-bottom: 2px solid #0083f5;

      &:hover {
        color: #0083f5;
        cursor: pointer;
      }
    }
  }
}

.ps {
  &_mt10 {
    margin-top: 10px;
  }

  &_mt20 {
    margin-top: 20px;
  }

  &_mt30 {
    margin-top: 30px;
  }

  &_mt50 {
    margin-top: 50px;
  }

  &_cursor {
    cursor: pointer;
  }
}
</style>