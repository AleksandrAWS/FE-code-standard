# 更新日志

## 0.1.5
`2021-08-18`
- `style.js/operator-linebreak`：移除`overrides`中的`=`限制
- `style.js/lines-around-comment`：`allowObjectStart`参数设置为`true`

## 0.1.4
`2021-08-09`
- 关闭`best-practices.js/complexity`、`max-lines-per-function`规则
- `style.js/camelcase`：添加`properties`与`ignoreDestructuring`属性
- `best-practices.js/no-param-reassign`：`no-param-reassign`属性设置`true`，
  `ignorePropertyModificationsFor`添加`state`属性
- `style.js/function-paren-newline`：改为`consistent`模式

## 0.1.3
`2021-07-23`
- `style.js/object-curly-newline`：`minProperties`由2改为3

## 0.1.2
`2021-07-22`
- 关闭规则：`best-practices.js/no-magic-numbers`、`style.js/array-element-newline`
- `style.js/max-len`：`code`由80增加至100

## 0.1.1
`2021-07-22`
- `style.js/array-element-newline`：`minItems`由5改为3
- `style.js/object-curly-newline`：`minProperties`由4改为2
- `style.js/max-lines`：`max`由300增加至600
- 添加`default-param-last`、`no-loss-of-precision`规则

## 0.1.0
`2021-07-15`
- 第一个版本
  - 整理开发中常用的一些代码规范
