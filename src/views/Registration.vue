<template>
  <div class="reg">
    <icon-logo class="reg__logo" width="107" height="75"/>

    <div class="reg__title">Зарегистрируйтесь в Code Build</div>

    <v-input class="cb_top75" placeholder="Имя" />

    <v-input class="cb_top55" placeholder="E-mail" />

    <div class="reg__consent">
      <v-check-box />

      <div class="cb_left10">
        Я согласен с условиями обработки<br/> 
        <span class="reg__consent_blue">персональных данных</span>
      </div>
    </div>

    <v-button class="cb_top60" buttonType="reg" >Зарегистрироваться</v-button>

    <div class="reg__footer">
      <span>У вас уже есть аккаунт?</span>
      <span class="reg__footer_entry">Войти</span>
    </div>
  </div>
</template>

<script>
import IconLogo from '@/icons/IconLogo.vue'

import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'
import VCheckBox from '@/components/common/VCheckBox.vue'

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

      checkbox: false,
    }
  },

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
  @extend .cb_column-center;
  align-items: center;

  width: 490px;
  height: 735px;

  border: 2px solid #256CFE;
  border-radius: 8px;
  box-sizing: border-box;

  &__title {
    font-family: 'Circe';
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #272A37;

    margin-top: 26px;
  }

  &__consent {
    @extend .cb_row;
    align-items: center;
    width: 374px;

    font-family: 'Circe';
    font-size: 13px;
    line-height: 15px;
    color: #B1B8C6;

    margin-top: 40px;

    &_blue {
      color: #256cfe;
    }
  }

  &__footer {
    margin-top: 27px;
    font-family: 'Circe';
    font-size: 16px;
    color: #B1B8C6;

    &_entry {
      @extend .cb_underline-blue;
      position: relative;
      margin-left: 3px;
      font-weight: bold;
      color: #272A37;
    }
  }
}

// hovers
:hover.reg {
  &__logo {
    cursor: pointer;
    
    ::v-deep {
      path {
        fill: #FFFFFF;
      }

      rect {
        fill: #256CFE;
      }
    }
  }

  &__footer_entry {
    cursor: pointer;
    color: #256CFE;
  }
}
</style>