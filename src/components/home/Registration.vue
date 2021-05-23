<template>
  <div class="reg__wrap">
    <div class="reg">
      <div class="reg__info">
        Зарегистрируйся в codebuild
        и получи бесплатный доступ 
        к более чем 20 курсам
      </div>

      <v-input placeholder="your.email@example.com">
        <template #rightIcon>
          <div class="reg__icon">
            <icon-arrow />
          </div>
        </template>
      </v-input>
    </div>
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
.reg__wrap {
  @extend .cb_center;
  width: 100%;
  background: #256CFE;
}

.reg {
  @extend .cb_row-between;
  width: 1160px;
  height: 364px;

  &__info {
    width: 380px;

    font-family: 'Circe';
    font-size: 30px;
    line-height: 39px;
    letter-spacing: -0.025em;
    color: #FFFFFF;
  }

  &__icon {
    @extend .cb_center;
    width: 50px;
    height: 50px;

    border: 2px solid #3A7AFE;
    border-radius: 10px;
  }
}
</style>
