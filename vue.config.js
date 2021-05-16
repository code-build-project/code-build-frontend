module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '127.0.0.1',
    port: 8080, // CHANGE YOUR PORT HERE!
  },

  css: {
    loaderOptions: {
      scss: {
        // Глобальный инпорт миксина scss
        prependData: `@import "~@/assets/scss/mixins.scss";`,
      },
    },
  },
}
