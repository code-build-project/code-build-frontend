<template>
  <div class="page">
    <form-main
      v-if="openForm === 'main'"
      class="page__form"
      @changeForm="openForm = 'recovery'"
    />

    <form-recovery
      v-else-if="openForm === 'recovery'"
      class="page__form"
      @changeForm="openForm = 'main'"
    />
  </div>
</template>

<script>
// Components
import FormMain from '@/components/pageAuth/FormMain';
import FormRecovery from '@/components/pageAuth/FormRecovery';

export default {
  name: 'Authorization',
  components: {
    FormMain,
    FormRecovery
  },
  data() {
    return {
      openForm: 'main'
    };
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

.loader{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
}

#loader-7{
  -webkit-perspective: 120px;
  -moz-perspective: 120px;
  -ms-perspective: 120px;
  perspective: 120px;
}

#loader-7:before{
  content: "";
  position: absolute;
  left: 25px;
  top: 25px;
  width: 50px;
  height: 50px;
  background-color: #3498db;
  animation: flip 1s infinite;
}

@keyframes flip {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(180deg)  rotateX(180deg);
  }
}

</style>