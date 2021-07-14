module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    './vue3-strongly-recommended',
    './vue3-recommended',
    './uncategorized',
    './extension'
  ],
  rules: {},
  overrides: []
}
