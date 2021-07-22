<template>
<input ref="foo"/></template>

<style lang="less" scoped></style>

<script>
import {defineComponent, nextTick} from 'vue'

export default defineComponent({
  setup() {
    nextTick(() => {})
    return {}
  },
})
</script>
