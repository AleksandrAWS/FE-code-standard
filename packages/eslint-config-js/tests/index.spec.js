const { CLIEngine } = require('eslint')
const path = require('path')

function lintProject(name) {
  const eslint = new CLIEngine({
    ignore: false,
    configFile: `rules/${name}.js`,
    fix: false
  })
  const projectPath = path.resolve(__dirname, `fixtures/${name}`)
  const lintFilesPattern = path.resolve(projectPath, '**')
  const result = eslint.executeOnFiles(lintFilesPattern)
  return result.results.reduce((res, cur) => {
    res.push(...cur.messages.map(message => message.ruleId))
    return res
  }, [])
}

test('possible errors rules should pass validate',  () => {
  const lintRes = lintProject('possible-errors')
  expect(lintRes).toContain('no-dupe-keys')
  expect(lintRes).toContain('no-empty')
  expect(lintRes).toContain('valid-typeof')
})

test('best practices rules should pass validate',  () => {
  const lintRes = lintProject('best-practices')
  expect(lintRes).toContain('vars-on-top')
  expect(lintRes).toContain('block-scoped-var')
  expect(lintRes).toContain('eqeqeq')
  expect(lintRes).toContain('no-alert')
})

test('variables rules should pass validate',  () => {
  const lintRes = lintProject('variables')
  expect(lintRes).toContain('init-declarations')
  expect(lintRes).toContain('no-unused-vars')
  expect(lintRes).toContain('no-shadow-restricted-names')
})

test('style rules should pass validate',  () => {
  const lintRes = lintProject('style')
  expect(lintRes).toContain('array-bracket-newline')
  expect(lintRes).toContain('array-bracket-spacing')
  expect(lintRes).toContain('array-element-newline')
  expect(lintRes).toContain('no-trailing-spaces')
})

test('es6 rules should pass validate',  () => {
  const lintRes = lintProject('es6')
  expect(lintRes).toContain('no-var')
  expect(lintRes).toContain('prefer-destructuring')
  expect(lintRes).toContain('no-new-symbol')
  expect(lintRes).toContain('no-confusing-arrow')
})
