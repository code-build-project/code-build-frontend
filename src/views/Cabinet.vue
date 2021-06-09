<template>
  <div class="cabinet">
    <div class="cabinet__profile">
      <div class="cabinet__profile-left">
        Мой<br />
        профиль
      </div>

      <div class="cabinet__profile-right">
        <div class="cabinet__input">
          Александр
        </div>
      </div>
    </div>

    <div class="cabinet__premium cb_top40" />
  </div>
</template>

<script>
export default {
  name: 'Cabinet',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.cabinet {
  @extend .cb_column;
  padding: 40px;
  box-sizing: border-box;
  background: #f4f4f4;

  &__profile {
    @extend .cb_row-between;

    width: 1160px;
    height: 403px;

    padding: 58px 80px 72px 72px;
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 29px;
  }

  &__profile-left {
    height: 100%;
    font-family: 'ObjectSans';
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -1px;
    color: #272a37;
  }

  &__profile-right {
    height: 100%;
  }

  &__input {
    width: 550px;
    height: 80px;

    font-family: 'Circe';
    font-size: 24px;
    letter-spacing: -0.01em;
    color: #272a37;

    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 18px;
  }

  &__premium {
    width: 1160px;
    height: 158px;

    background: #ffffff;
    border-radius: 29px;
  }
}
</style>