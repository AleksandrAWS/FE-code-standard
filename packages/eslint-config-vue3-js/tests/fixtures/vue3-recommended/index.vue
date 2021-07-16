<template>
  <div
    ref="header"
    v-for="item in items"
    v-once
    id="uniqueID"
    v-model="headerData"
    my-prop="prop"
    v-if="!visible"
    v-html="'<a></a>'"
    is="header"
    @click="functionCall"
    v-text="textContent">
  </div>
</template>

<style lang="less" scoped></style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'index',
  setup() {
    return {}
  },
})
</script>
