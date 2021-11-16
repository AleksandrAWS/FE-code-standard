module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    './vue3-strongly-recommended',
    './vue3-recommended',
    './uncategorized',
    './extension'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es6: true
  },
  rules: {}
}
