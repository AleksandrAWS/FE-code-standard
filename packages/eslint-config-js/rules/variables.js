module.exports = {
  rules: {
    'init-declarations': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': [2, {
      functions: false,
      variables: false
    }]
  }
}
