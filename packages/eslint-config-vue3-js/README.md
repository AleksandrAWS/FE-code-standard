# @provincial-platform/eslint-config-vue3-js

![eslint](https://img.shields.io/badge/eslint-v7.29.0-blue)
![@babel/core](https://img.shields.io/badge/%40babel%2Fcore-v7.14.8-blue)
![@babel/eslint-parser](https://img.shields.io/badge/%40babel%2Feslint--parser-v7.14.7-blue)
![@provincial-platform/eslint-config-js](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--js-v0.1.5-blue)
![@provincial-platform/eslint-config-vue3](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--vue3-v0.1.2-blue)


## 说明

> `@provincial-platform/eslint-config-vue3-js`包含了`@provincial-platform/eslint-config-js`、`@provincial-platform/eslint-config-vue3`两个包的规则。

## 使用

### 安装

#### yarn
```shell
yarn add eslint @provincial-platform/eslint-config-vue3-js -D
```

#### npm

```shell
npm install eslint @provincial-platform/eslint-config-vue3-js --save-dev
```

如果您使用`vue-cli`,请执行如下命令
```shell
yarn add eslint @babel/core @babel/eslint-parser -D
```

### 配置
.eslintrc.js
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-vue3-js'
  ],
  // vue-cli项目需要
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
```
