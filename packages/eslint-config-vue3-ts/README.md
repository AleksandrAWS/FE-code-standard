# @provincial-platform/eslint-config-vue3-ts

![eslint](https://img.shields.io/badge/eslint-v7.29.0-blue)
![@provincial-platform/eslint-config-js](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--js-v0.1.3-blue)
![@provincial-platform/eslint-config-ts](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--ts-v0.1.1-blue)
![@provincial-platform/eslint-config-vue3](https://img.shields.io/badge/%40provincial--platform%2Feslint--config--vue3-v0.1.2-blue)


## 说明

> `@provincial-platform/eslint-config-vue3-ts`包含了
> `@provincial-platform/eslint-config-js`、`@provincial-platform/eslint-config-ts`、
> `@provincial-platform/eslint-config-vue3`两个包的规则。

## 使用

### 安装

#### yarn
```shell
yarn add eslint @provincial-platform/eslint-config-vue3-ts -D
```

#### npm

```shell
npm install eslint @provincial-platform/eslint-config-vue3-ts --save-dev
```


### 配置
> 如果你使用的是`.eslintrc.js`文件，请在`.eslintignore`添加`.eslintrc.js`

.eslintrc
```text
{
  "extends": [
    "@provincial-platform/eslint-config-vue3-ts"
  ]
}
```


**出现报错`Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.`的解决方案：
（参考：https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser、
https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser）*
> 请注意，由于配置中指定了`parserOptions.project`，而未指定`createDefaultProgram`
> （配置`createDefaultProgram`会产生巨大的性能成本），只会`lint` `tsconfig.json`文件定义的项目中的lint文件（`include`）。
> 要解决这个问题有多种方式：
> 
> 1.如果现有配置中没有包含所有要`lint`的文件，则可以创建一个单独的`tsconfig.eslint.json`。
> 
> 2.将要`lint`的`.ts、.tsx`文件放入`tsconfig.json`中的`include`配置中。
> 
> 3.忽略这些文件
