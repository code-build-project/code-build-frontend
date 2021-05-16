<template>
  <div class="reg">
    <div class="reg__info">
      Зарегистрируйся в codebuild
      и получи бесплатный доступ 
      к более чем 20 курсам
    </div>

    <v-input
      placeholder="your.email@example.com"
    >
      <template #rightIcon>
        <div class="reg__icon">
          <icon-arrow />
        </div>
      </template>
    </v-input>
  </div>
</template>

<script>
import IconArrow from '@/icons/IconArrow.vue'
import VInput from '@/components/common/VInput.vue'

export default {
  name: 'Registration',
  components: { IconArrow, VInput }
}
</script>

<style lang="scss" scoped>
  .reg {
    height: 364px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @include adaptiv-padding(380, 40);
    padding-bottom: 130px !important;
    padding-top: 130px !important;
    box-sizing: border-box;

    background: #256CFE;

    &__info {
      width: 380px;

      font-family: 'Circe';
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 39px;
      letter-spacing: -0.025em;

      color: #FFFFFF;
    }

    &__icon {
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 2px solid #3A7AFE;
      border-radius: 10px;
    }
  }
</style>
