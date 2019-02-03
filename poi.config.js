const plugins = [
  'eslint',
  'vue-static'
]

module.exports = {
  entry: 'src/index',
  plugins: plugins.map((plugin) => {
    return {
      resolve: `@poi/plugin-${plugin}`
    }
  }),
  css: { // using SCSS Variables globally
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/styles.scss";`
      }
    }
  }
}
