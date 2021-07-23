// rules: https://typescript-eslint-armano.netlify.app/
module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/all',
    './rules'
  ],
  rules: {
  }
}
