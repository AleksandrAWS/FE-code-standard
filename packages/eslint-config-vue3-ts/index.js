module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.vue'],
  },
  extends: [
    '@provincial-platform/eslint-config-js',
    '@provincial-platform/eslint-config-vue3',
    '@provincial-platform/eslint-config-ts'
  ]
}
