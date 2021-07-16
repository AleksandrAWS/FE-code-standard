# @provincial-platform/eslint-config-vue3-js

![eslint](https://img.shields.io/badge/eslint-v7.29.0-blue)
![eslint-plugin-vue](https://img.shields.io/badge/eslint--plugin--vue-v7.13.0-blue)
![@provincial-platform/eslint-config-js](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--js-v0.1.0-blue)

## 使用

### 安装
```shell
# yarn
yarn add eslint @provincial-platform/eslint-config-vue3-js -D
# npm/cnpm
npm install @provincial-platform/eslint-config-vue3-js --save-dev
```

### 配置
.eslintrc.js
- 完整引入所有规则
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-vue3-js'
  ]
}
```
- 按需引入规则
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-vue3-js/rules/vue3-strongly-recommended',
    '@provincial-platform/eslint-config-vue3-js/rules/vue3-recommended',
    '@provincial-platform/eslint-config-vue3-js/rules/uncategorized',
    '@provincial-platform/eslint-config-vue3-js/rules/extension',
  ]
}
```

## 说明

> `@provincial-platform/eslint-config-vue3-js`几乎包含了eslint-plugin-vue的所有规范。其主要分为以下几个包：

#### rules/vue3-strongly-recommended.js
针对`plugin:vue3-strongly-recommended`的补充。参考：https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/vue3-strongly-recommended.js
#### rules/vue3-recommended.js
针对`plugin:vue3-recommended`的补充。参考：https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/vue3-recommended.js
#### rules/uncategorized.js
一些未分类的规则，对应[https://eslint.vuejs.org/rules/](https://eslint.vuejs.org/rules/ '')`Uncategorized`目录下的规则。
#### rules/extension.js
该包下的规则是基于Eslint本身提供的规则，应用至`<template>`内
