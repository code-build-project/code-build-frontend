<template>
  <div class="icons">
    <div v-for="(item, index) in iconsList" :key="index" :title="item.name">
      <component :is="item.component" class="icons__component" width="50px" height="50px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  components: {},
  data() {
    return {
      iconsList: []
    }
  },

  created() {
    // получаем названия все файлы в папке @/icons
    const icons = require.context('@/icons', true, /^.*\.vue$/)

    // заполняем массив импортами и названиями каждого компонента иконки
    icons.keys().forEach((item) => {
      this.iconsList.push({
        component: () => import(`@/icons${item.substring(1)}`),
        name: item.substring(2)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.icons {
  background: turquoise;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__component {
    margin-left: 50px;
  }
}
</style>