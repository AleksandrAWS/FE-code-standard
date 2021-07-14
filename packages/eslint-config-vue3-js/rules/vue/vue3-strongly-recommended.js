const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  rules: {
    'vue/attribute-hyphenation': [2, 'always', {
      ignore: []
    }],
    'vue/component-definition-name-casing': [2, 'PascalCase'],
    'vue/html-closing-bracket-newline': [2, {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': [2, {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-end-tags': 2,
    'vue/html-indent': [2, 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-quotes': [2, 'double', {
      avoidEscape: true
    }],
    'vue/html-self-closing': [2, {
      html: {
        void: 'always',
        normal: 'never'
      },
      "svg": "always",
      "math": "always"
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: {
        max: 3,
        allowFirstLine: true
      },
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/multiline-html-element-content-newline': [2, {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
      allowEmptyLines: false
    }],
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'vue/no-multi-spaces': [2, {
      ignoreProperties: false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-shadow': 2,
    'vue/one-component-per-file': 2,
    'vue/prop-name-casing': [2, 'camelCase'],
    'vue/require-default-prop': 2,
    'vue/require-prop-types': 2,
    'vue/singleline-html-element-content-newline': [2, {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ["pre", "textarea", ...INLINE_ELEMENTS]
    }],
    'vue/v-bind-style': [2, 'shorthand'],
    'vue/v-on-style': [2, 'shorthand'],
    'vue/v-slot-style': [2, {
      atComponent: 'v-slot',
      default: 'shorthand',
      named: 'shorthand'
    }],
    // Vue.js 3.x
    'vue/require-explicit-emits': [2, {
      allowProps: false
    }]
  }
}
