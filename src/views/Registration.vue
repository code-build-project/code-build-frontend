<template>
  <div class="page">
    <form-main
      v-if="openForm === 'main'"
      class="page__form"
      @changeForm="changeForm($event)"
    />

    <form-confirm v-else-if="openForm === 'confirm'" class="page__form" :form="form" />
  </div>
</template>

<script>
// Components
import FormMain from '@/components/pageReg/FormMain';
import FormConfirm from '@/components/pageReg/FormConfirm';

export default {
  name: 'Registration',
  components: {
    FormMain,
    FormConfirm
  },
  data() {
    return {
      openForm: 'main',

      form: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    changeForm(ev) {
      this.form = ev;
      this.openForm = 'confirm';
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  @extend .flex_row-center-center;
  height: 100%;

  &__form {
    width: 490px;
    height: 735px;

    border: 2px solid $color-blue;
    border-radius: 8px;

    padding: 75px 58px;
  }
}
</style>