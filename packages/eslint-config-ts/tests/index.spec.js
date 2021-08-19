const { CLIEngine } = require('eslint')
const path = require('path')

function lintProject(name) {
  const eslint = new CLIEngine({
    baseConfig: {
      extends: [
        'plugin:@typescript-eslint/recommended'
      ]
    },
    parser: '@typescript-eslint/parser',
    extensions: ['.ts', '.tsx'],
    ignore: false,
    configFile: `rules/${name}.js`,
    fix: false,
  })
  const projectPath = path.resolve(__dirname, 'fixtures/@typescript-eslint')
  const lintFilesPattern = path.resolve(projectPath, '**')
  const result = eslint.executeOnFiles(lintFilesPattern)
  return result.results.reduce((res, cur) => {
    cur.messages.forEach(message => {
      // if (message.ruleId === '@typescript-eslint/prefer-for-of') {
      //   console.log(cur.filePath)
      // }
      // 只验证error规则
      if (message.severity === 2) {
        res.push(message.ruleId)
      }
    })
    return res
  }, [])
}

describe.each([
  '@typescript-eslint/array-type',
  '@typescript-eslint/ban-ts-comment',
  '@typescript-eslint/ban-types',
  '@typescript-eslint/comma-dangle',
  '@typescript-eslint/comma-spacing',
  '@typescript-eslint/consistent-indexed-object-style',
  '@typescript-eslint/consistent-type-definitions',
  '@typescript-eslint/consistent-type-imports',
  '@typescript-eslint/default-param-last',
  '@typescript-eslint/explicit-function-return-type',
  '@typescript-eslint/explicit-member-accessibility',
  '@typescript-eslint/explicit-module-boundary-types',
  '@typescript-eslint/func-call-spacing',
  '@typescript-eslint/indent',
  '@typescript-eslint/init-declarations',
  '@typescript-eslint/keyword-spacing',
  '@typescript-eslint/lines-between-class-members',
  '@typescript-eslint/member-delimiter-style',
  '@typescript-eslint/member-ordering',
  '@typescript-eslint/method-signature-style',
  '@typescript-eslint/naming-convention',
  '@typescript-eslint/no-array-constructor',
  '@typescript-eslint/no-confusing-non-null-assertion',
  '@typescript-eslint/no-dupe-class-members',
  '@typescript-eslint/no-duplicate-imports',
  '@typescript-eslint/no-dynamic-delete',
  '@typescript-eslint/no-empty-function',
  '@typescript-eslint/no-empty-interface',
  '@typescript-eslint/no-explicit-any',
  '@typescript-eslint/no-extra-non-null-assertion',
  '@typescript-eslint/no-extra-parens',
  '@typescript-eslint/no-extra-semi',
  '@typescript-eslint/no-extraneous-class',
  '@typescript-eslint/no-implicit-any-catch',
  '@typescript-eslint/no-inferrable-types',
  '@typescript-eslint/no-invalid-this',
  '@typescript-eslint/no-invalid-void-type',
  '@typescript-eslint/no-loop-func',
  '@typescript-eslint/no-loss-of-precision',
  '@typescript-eslint/no-misused-new',
  '@typescript-eslint/no-namespace',
  '@typescript-eslint/no-non-null-asserted-optional-chain',
  '@typescript-eslint/no-non-null-assertion',
  '@typescript-eslint/no-parameter-properties',
  '@typescript-eslint/no-redeclare',
  '@typescript-eslint/no-require-imports',
  '@typescript-eslint/no-shadow',
  '@typescript-eslint/no-this-alias',
  '@typescript-eslint/no-unnecessary-type-constraint',
  '@typescript-eslint/no-unused-vars',
  '@typescript-eslint/no-use-before-define',
  '@typescript-eslint/no-useless-constructor',
  '@typescript-eslint/no-var-requires',
  '@typescript-eslint/object-curly-spacing',
  '@typescript-eslint/prefer-as-const',
  '@typescript-eslint/prefer-for-of',
  '@typescript-eslint/prefer-function-type',
  '@typescript-eslint/prefer-literal-enum-member',
  '@typescript-eslint/prefer-optional-chain',
  '@typescript-eslint/prefer-ts-expect-error',
  '@typescript-eslint/quotes',
  '@typescript-eslint/semi',
  '@typescript-eslint/sort-type-union-intersection-members',
  '@typescript-eslint/space-before-function-paren',
  '@typescript-eslint/space-infix-ops',
  '@typescript-eslint/triple-slash-reference',
  '@typescript-eslint/type-annotation-spacing',
  '@typescript-eslint/unified-signatures'
])('%s', s => {
  test(`${s} rules should pass validate`, () => {
    const lintRes = lintProject('index')
    expect(lintRes).toContain(s)
  })
})
