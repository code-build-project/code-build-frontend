<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    // Перед отрисовкой страницы, получать данные пользователя 
    this.$store.dispatch('authorize');
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/fonts.scss';

#app {
  font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0; /* Убираем отступы */
  user-select: none; /* Чтобы не выделялся текст */
}

html,
body,
#app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  text-align: left;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

ul {
  list-style: none;
}
</style>