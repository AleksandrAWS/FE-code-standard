module.exports = {
  rules: {
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
    }]
  }
}
