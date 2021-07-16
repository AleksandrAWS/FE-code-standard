module.exports = {
  rules: {
    'vue/block-tag-newline': [2],
    'vue/component-name-in-template-casing': [2, 'kebab-case', {
      registeredComponentsOnly: false,
      ignores: []
    }],
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/html-button-has-type': [2, {
      button: true,
      submit: true,
      reset: true
    }],
    'vue/html-comment-content-newline': [2, {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-comment-content-spacing': [2, 'always'],
    'vue/html-comment-indent': [2, 2],
    'vue/match-component-file-name': [0, {
      extensions: ['vue', 'jsx', 'tsx', 'js', 'ts'],
      shouldMatchCase: false
    }],
    'vue/new-line-between-multi-line-property': [0, {
      minLineOfMultilineProperty: 3
    }],
    'vue/next-tick-style': [2, 'promise'],
    'vue/no-bare-strings-in-template': 0,
    'vue/no-boolean-default': 0,
    'vue/no-deprecated-v-is': 2,
    'vue/no-duplicate-attr-inheritance': 0,
    'vue/no-empty-component-block': 0,
    'vue/no-invalid-model-keys': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-potential-component-option-typo': [2, {
      presets: ['all'],
    }],
    'vue/no-reserved-component-names': [2, {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true
    }],
    'vue/no-restricted-block': [0],
    'vue/no-restricted-call-after-await': 0,
    'vue/no-restricted-component-options': 0,
    'vue/no-restricted-custom-event': 0,
    'vue/no-restricted-props': 0,
    'vue/no-restricted-static-attribute': 0,
    'vue/no-restricted-v-bind': [2, '/^v-/'],
    'vue/no-static-inline-styles': [2, {
      allowBinding: true
    }],
    'vue/no-template-target-blank': 0,
    'vue/no-this-in-before-route-enter': 2,
    // 无法检测全局组件及mixins混入的组件
    'vue/no-unregistered-components': 0,
    'vue/no-unsupported-features': 0,
    'vue/no-unused-properties': [2, {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
      deepData: true
    }],
    'vue/no-unused-refs': 2,
    'vue/no-useless-mustaches': [2, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    'vue/no-useless-v-bind': [2, {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    'vue/padding-line-between-blocks': [2, 'always'],
    'vue/require-direct-export': [2, {
      disallowFunctionalComponentFunction: false
    }],
    'vue/require-emit-validator': 0,
    'vue/require-name-property': 2,
    'vue/script-indent': 0,
    'vue/sort-keys': 0,
    'vue/static-class-names-order': 0,
    'vue/v-for-delimiter-style': 0,
    'vue/v-on-event-hyphenation': [2, 'never'],
    'vue/v-on-function-call': [2, 'never'],
    'vue/valid-next-tick': 2
  }
}
