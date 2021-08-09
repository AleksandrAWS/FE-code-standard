module.exports = {
  rules: {
    'array-bracket-newline': [2, {
      multiline: true
    }],
    'array-bracket-spacing': [2, 'always', {
      singleValue: true,
      objectsInArrays: false,
      arraysInArrays: false
    }],
    'array-element-newline': [0, {
      multiline: true,
      minItems: 3
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'camelcase': [2, {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [1, 'that'],
    'eol-last': [2, 'always'],
    'func-call-spacing': [2, 'never'],
    'func-name-matching': [2, 'always', {
      includeCommonJSModuleExports: true
    }],
    'function-paren-newline': [2, 'consistent'],
    'id-length': [2, {
      min: 1,
      max: 30
    }],
    'implicit-arrow-linebreak': [2, 'beside'],
    'indent': [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false
    }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'line-comment-position': [2, {
      position: 'above',
      ignorePattern: '',
      applyDefaultIgnorePatterns: true
    }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: false,
      allowObjectEnd: false,
      allowArrayStart: false,
      allowArrayEnd: false,
      allowClassStart: true,
      allowClassEnd: false
    }],
    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: false
    }],
    'max-depth': [1, 4],
    'max-len': [2, {
      code: 100,
      tabWidth: 2,
      ignorePattern: '',
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: false
    }],
    'max-lines': [1, {
      max: 600,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-lines-per-function': [0, {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],
    'max-nested-callbacks': 0,
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'max-statements-per-line': [0, {
      max: 1
    }],
    'multiline-comment-style': [0, 'starred-block'],
    'multiline-ternary': [0, 'never'],
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false,
      newIsCapExceptions: [],
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    'new-parens': 2,
    'newline-per-chained-call': [2, {
      ignoreChainWithDepth: 2
    }],
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 2,
    'no-mixed-operators': [2, {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 0,
      maxBOF: 0
    }],
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],
    'no-restricted-syntax': [
      2,
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      }
    ],
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': [2, {
      skipBlankLines: false,
      ignoreComments: false
    }],
    'no-underscore-dangle': [2, {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': [2, 'beside', {
      overrides: {}
    }],
    'object-curly-newline': [2, {
      ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 3, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
    }],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, {
      allowAllPropertiesOnSameLine: true
    }],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'before', {
      overrides: {
        '=': 'none'
      }
    }],
    'padded-blocks': [2, {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }, {
      allowSingleLineBlocks: true
    }],
    'padding-line-between-statements': 0,
    'prefer-object-spread': 2,
    'quote-props': [2, 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],
    'quotes': [2, 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }],
    'semi': [2, 'never', {
      beforeStatementContinuationChars: 'always'
    }],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'semi-style': [2, 'last'],
    'sort-keys': [0, 'asc', {
      caseSensitive: false,
      natural: true
    }],
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {}
    }],
    'spaced-comment': [2, 'always', {
      line: {
        markers: ['!' , '/', '='],
        exceptions: ['-', '+']
      },
      block: {
        markers: ['=', '!', ':', '::'],
        exceptions: ['-', '+'],
        balanced: true
      },
    }],
    'switch-colon-spacing': [2, {
      after: true,
      before: false
    }],
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': [2, 'never'],
    'wrap-regex': 0
  }
}
