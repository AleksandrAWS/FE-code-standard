// rules: https://typescript-eslint-armano.netlify.app/
module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    './rules/index',
    './rules/require-type'
  ],
  rules: {
  }
}
