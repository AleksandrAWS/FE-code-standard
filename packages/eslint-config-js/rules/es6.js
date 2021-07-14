module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {}
  },
  rules: {
    'arrow-body-style': [2, 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    'constructor-super': 2,
    'generator-star-spacing': [2, {
      before: false,
      after: true
    }],
    'no-class-assign': 2,
    'no-confusing-arrow': [2, {
      allowParens: true
    }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [2, {
      includeExports: true
    }],
    'no-new-symbol': 2,
    'no-restricted-imports': [0, {
      paths: [],
      patterns: []
    }],
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': [2, {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false
    }],
    'no-var': 2,
    'object-shorthand': [2, 'always', {
      avoidQuotes: true,
      ignoreConstructors: false
    }],
    'prefer-arrow-callback': [2, {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],
    'prefer-const': [2, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],
    'prefer-destructuring': [2, {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      }
    }, {
      enforceForRenamedProperties: false
    }],
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': [1, {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'symbol-description': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'after']
  }
}
