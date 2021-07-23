# @provincial-platform/eslint-config-js

![eslint](https://img.shields.io/badge/eslint-v7.29.0-blue)

## 使用

### 安装
```shell
# yarn
yarn add eslint @provincial-platform/eslint-config-js -D
# npm/cnpm
npm install eslint @provincial-platform/eslint-config-js --save-dev
```

### 配置
.eslintrc.js
- 完整引入所有规则
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-js'
  ]
}
```
- 按需引入规则
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-js/rules/possible-errors',
    '@provincial-platform/eslint-config-js/rules/best-practices',
    '@provincial-platform/eslint-config-js/rules/strict',
    '@provincial-platform/eslint-config-js/rules/variables',
    '@provincial-platform/eslint-config-js/rules/node',
    '@provincial-platform/eslint-config-js/rules/style',
    '@provincial-platform/eslint-config-js/rules/es6',
  ]
}
```

## 说明

> `@provincial-platform/eslint-config-js`几乎包含了Eslint的所有规范。其主要分为以下几个包：

#### rules/possible-errors.js
该包下的规则与JavaScript代码中可能的错误或逻辑错误有关。例如禁止出现空语句块、禁止不必要的分号等规则。
#### rules/best-practices.js
该包下的规则与一些最佳实践有关。如禁用`alert`、`confirm`、`prompt`、`eval()`，禁止多个空格等规则。
#### rules/strict.js
该包下只有一条规则：禁用严格模式指令。
#### rules/variables.js
该包下规则与变量声明相关。例如禁止出现未使用过的变量。
#### rules/node.js
该包下的规则是针对Node.js和浏览器中的CommonJS。例如要求`require()`必须出现在顶层模块作用域。
#### rules/style.js
该包下规则与代码风格相关。例如末尾逗号、数组之间换行、一致的缩进等等。
#### rules/es6.js
该包下规则只与es6相关。例如箭头函数的参数必须使用圆括号、禁止`new Symbol`。

