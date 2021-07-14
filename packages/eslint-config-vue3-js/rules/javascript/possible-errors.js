module.exports = {
  rules: {
    'no-sparse-arrays': 2,
    'no-constant-condition': 2,
    'no-await-in-loop': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-extra-parens': [2, 'all', {
      nestedBinaryExpressions: false,
      enforceForArrowConditionals: false,
      conditionalAssign: true,
      returnAssign: false,
      ignoreJSX: 'all'
    }],
    'no-irregular-whitespace': 2,
    'no-template-curly-in-string': 1,
  }
}
