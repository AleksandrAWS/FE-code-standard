<template>
  <a>test</a><a>test</a><a>test</a><a>test</a><a>test</a><a>test</a><a>test</a><a>test</a>
  <my-component :a="[2,
  3, 4]"
    @b="() => {let is_login = 1}"
    :c="{a:1,b:2,c:3}"
  ></my-component>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'index',
  setup() {
    if (a == 1) {

    }else{

    }
    const a = {
      a : 1
    }
    return {}
  },
})
</script>

<style lang="less" scoped></style>
