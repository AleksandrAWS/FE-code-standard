module.exports = {
  extends: [
    '@provincial-platform/eslint-config-js',
    '@provincial-platform/eslint-config-ts',
    '@provincial-platform/eslint-config-vue3'
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      // vue components key值可使用PascalCase风格
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'PascalCase', 'snake_case'],
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      },
    ],
  }
}
