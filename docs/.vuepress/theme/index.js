const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Home: path.resolve(__dirname, 'components/Home.vue'),
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
    Navbar: path.resolve(__dirname, 'components/Navbar.vue'),
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.js'),
}
