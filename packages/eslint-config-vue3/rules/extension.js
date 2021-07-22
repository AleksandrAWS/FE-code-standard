module.exports = {
  rules: {
    'vue/array-bracket-newline': [2, {
      multiline: true
    }],
    'vue/array-bracket-spacing': [2, 'always', {
      singleValue: true,
      objectsInArrays: false,
      arraysInArrays: false
    }],
    'vue/arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'vue/block-spacing': [2, 'always'],
    'vue/brace-style': [2, '1tbs'],
    'vue/camelcase': 2,
    'vue/comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never'
    }],
    'vue/comma-spacing': [2, {
      before: false,
      after: true
    }],
    'vue/comma-style': [2, 'last'],
    'vue/dot-location': [2, 'property'],
    'vue/dot-notation': 2,
    'vue/eqeqeq': 2,
    'vue/func-call-spacing': [2, 'never'],
    'vue/key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'vue/keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'vue/max-len': [2, {
      code: 80,
      template: 80,
      tabWidth: 2,
      comments: 80,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: false,
      ignoreHTMLTextContents: false
    }],
    'vue/no-constant-condition': 2,
    'vue/no-empty-pattern': 2,
    'vue/no-extra-parens': [2, 'all', {
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
      conditionalAssign: true,
      returnAssign: false,
      ignoreJSX: 'all'
    }],
    'vue/no-irregular-whitespace': 2,
    'vue/no-restricted-syntax': 0,
    'vue/no-sparse-arrays': 2,
    'vue/no-useless-concat': 2,
    'vue/object-curly-newline':[2, {
      ObjectExpression: { minProperties: 2, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 2, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 2, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 2, multiline: true, consistent: true },
    }],
    'vue/object-curly-spacing': [2, 'always'],
    'vue/object-property-newline': [2, {
      allowAllPropertiesOnSameLine: true
    }],
    'vue/operator-linebreak': [2, 'before', {
      overrides: {
        '=': 'none'
      }
    }],
    'vue/prefer-template': 2,
    'vue/space-in-parens': [2, 'never'],
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {}
    }],
    'vue/template-curly-spacing': [2, 'never']
  }
}
