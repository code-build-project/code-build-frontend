<template>
  <div class="reg">
    <icon-logo class="reg__logo cb_top75" width="107" height="75" />

    <div class="reg__title cb_top25">Зарегистрируйтесь в Code Build</div>

    <v-input class="cb_top70" placeholder="Имя" />

    <v-input class="cb_top40" placeholder="E-mail" />

    <div class="reg__consent cb_top40">
      <v-check-box />

      <div class="cb_left10">
        Я согласен с условиями обработки<br />
        <span class="cb_color-blue">персональных данных</span>
      </div>
    </div>

    <v-button class="reg__button cb_top50"> Зарегистрироваться </v-button>

    <div class="reg__footer cb_top25">
      <span>У вас уже есть аккаунт?</span>
      <router-link class="reg__entry cb_left5" to="/auth" target="_blank"> Войти </router-link>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue';

import VInput from '@/components/common/VInput.vue';
import VButton from '@/components/common/VButton.vue';
import VCheckBox from '@/components/common/VCheckBox.vue';

export default {
  name: 'Registration',

  components: {
    IconLogo,
    VInput,
    VButton,
    VCheckBox
  },

  props: {},

  data() {
    return {
      name: '',
      surname: '',
      email: '',

      emailError: false,

      checkbox: false
    };
  },

  methods: {
    onSign() {
      const payload = {
        name: this.name,
        surname: this.surname,
        email: this.email
      };

      this.axios
        .post('http://localhost:3000/reg', payload)
        .then(() => {
          this.$router.push({ name: 'SuccessRegistration', params: payload });
        })
        .catch(() => {
          this.emailError = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.reg {
  @extend .cb_column;
  font-family: 'Circe';
  align-items: center;

  &__title {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #272a37;
  }

  &__consent {
    @extend .cb_row;
    align-items: center;
    width: 374px;

    font-size: 13px;
    line-height: 15px;
    color: #b1b8c6;
  }

  &__footer {
    font-size: 16px;
    color: #b1b8c6;
  }

  &__entry {
    @extend .cb_underline-blue;
    position: relative;

    font-size: 16px;
    font-weight: bold;
    color: #272a37;
  }

  &__button {
    ::v-deep .button {
      width: 374px;
      height: 70px;

      font-family: 'EuclidCircular';
      font-size: 20px;
      color: #272a37;
      border: 1px solid #b1b8c6;
      background: transparent;
    }
  }
}

// hovers
:hover.reg {
  &__logo {
    cursor: pointer;

    ::v-deep {
      path {
        fill: #ffffff;
      }

      rect {
        fill: #256cfe;
      }
    }
  }

  &__entry {
    cursor: pointer;
    color: #256cfe;
  }

  &__button {
    ::v-deep .button {
      color: #ffffff;
      background: #256cfe;
    }
  }
}
</style>