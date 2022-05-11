<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <!-- <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> -->
  <div>{{ test }},{{ toRefVal }}</div>
</template>

<script lang="ts">
import { ref, Ref, defineComponent, reactive, toRef, isRef } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count: Ref<number> = ref(0)
    const state = reactive({
      foo: 1,
      bar: 2
    })
    const toRefVal = toRef(state, 'foo')
    // eslint-disable-next-line no-plusplus
    toRefVal.value++
    console.log(toRefVal.value)
    console.log(toRefVal)
    // 骚操作，剑走偏锋
    // console.log(toRefVal._object.bar)

    const noReactive = {
      a: 1,
      b: 2
    }
    // 非响应式的
    const test = toRef(noReactive, 'a')
    console.log(isRef(test))
    // setInterval(() => {
    //   test.value++
    //   // toRefVal.value++
    // }, 1000)
    return { count, test, toRefVal }
  }
})
</script>
