const { CLIEngine } = require('eslint')
const path = require('path')

function lintProject(name) {
  const eslint = new CLIEngine({
    baseConfig: {
      extends: [
        '@provincial-platform/eslint-config-js',
        'plugin:vue/vue3-recommended'
      ]
    },
    extensions: ['.js', '.jsx', '.vue'],
    ignore: false,
    configFile: `rules/${name}.js`,
    fix: false,
  })
  const projectPath = path.resolve(__dirname, `fixtures/${name}`)
  const lintFilesPattern = path.resolve(projectPath, '**')
  const result = eslint.executeOnFiles(lintFilesPattern)
  return result.results.reduce((res, cur) => {
    cur.messages.forEach(message => {
      // 只验证error规则
      if (message.severity === 2) {
        res.push(message.ruleId)
      }
    })
    return res
  }, [])
}

test('vue3-strongly-recommended rules should pass validate',  () => {
  const lintRes = lintProject('vue3-strongly-recommended')
  expect(lintRes).toContain('vue/attribute-hyphenation')
  expect(lintRes).toContain('vue/component-definition-name-casing')
  expect(lintRes).toContain('vue/html-self-closing')
})

test('vue3-recommended rules should pass validate',  () => {
  const lintRes = lintProject('vue3-recommended')
  expect(lintRes).toContain('vue/attributes-order')
  expect(lintRes).toContain('vue/component-tags-order')
  expect(lintRes).toContain('vue/no-v-html')
})

test('uncategorized rules should pass validate',  () => {
  const lintRes = lintProject('uncategorized')
  expect(lintRes).toContain('vue/block-tag-newline')
  expect(lintRes).toContain('vue/next-tick-style')
  expect(lintRes).toContain('vue/no-unused-refs')
  expect(lintRes).toContain('vue/require-name-property')
})

test('extension rules should pass validate',  () => {
  const lintRes = lintProject('extension')
  expect(lintRes).toContain('vue/array-bracket-newline')
  expect(lintRes).toContain('vue/camelcase')
  expect(lintRes).toContain('vue/max-len')
  expect(lintRes).toContain('vue/object-curly-spacing')
  expect(lintRes).toContain('vue/object-curly-newline')
  expect(lintRes).toContain('eqeqeq')
  expect(lintRes).toContain('key-spacing')
  expect(lintRes).toContain('keyword-spacing')
  // validate jsx
  expect(lintRes).toContain('no-multi-spaces')
  expect(lintRes).toContain('no-multi-str')
})
