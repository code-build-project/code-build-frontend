<template>
  <div class="actuality">
    <div class="actuality__title">
      <span class="actuality__center">
        Вы с нуля освоите профессию
      </span>
      разработчика и сможете добавить
      <span class="actuality__center">
        в арсенал необходимые навыки.
      </span>
    </div>

    <div class="actuality__subtitle">
      <span class="actuality__center">
        Мы помогаем новичкам стать профессиональными 
      </span>
      программистами, а опытным разработчикам получать 
      <span class="actuality__center">
        новые знания и расти профессионально
      </span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Actuality',
  components: {  }
}
</script>

<style lang="scss" scoped>
  .actuality {
    height: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include adaptiv-padding(380, 40);
    padding-bottom: 314px !important;
    padding-top: 314px !important;
    box-sizing: border-box;

    background: #256CFE;
    color: #FFFFFF;

    &__title {
      width: 788px;

      font-family: 'ObjectSans';
      font-style: normal;
      font-weight: normal;
      font-size: 45px;
      line-height: 55px;
      letter-spacing: -0.01em;
    }

    &__subtitle {
      width: 496px;

      font-family: 'Circe';
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 29px;
      letter-spacing: -0.025em;
    }

    &__center {
      display: flex;
      justify-content: center;
    }
  }
</style>
