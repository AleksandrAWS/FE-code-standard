# @provincial-platform/eslint-config-ts

![eslint](https://img.shields.io/badge/eslint-v7.29.0-blue)

## 使用

### 安装
```shell
# yarn
yarn add eslint @provincial-platform/eslint-config-ts -D
# npm/cnpm
npm install eslint @provincial-platform/eslint-config-ts --save-dev
```

### 配置
.eslintrc.js
- 完整引入所有规则
```javascript
module.exports = {
  ...,
  extends: [
    '@provincial-platform/eslint-config-ts'
  ]
}
```
