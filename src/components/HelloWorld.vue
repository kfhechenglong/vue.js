<template>
  <div class="hello">
    <div>{{test}}</div>
    <button @click="buttonClickHanlder">点击按钮</button>
    {{computedVal}}
    <div>
      {{testData}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, watchEffect, computed, ComputedRef } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  data () {
    return {
      testData: 'testData'
    }
  },
  props: {
    msg: null
  },
  setup (prop) {
    console.log(prop.msg)
    // const { msg }= prop
    console.log('setup')
    const val: Ref<number | string> = ref(0)
    const buttonClickHanlder = () => {
      val.value = (val.value as number) + 1
    }
    watchEffect(() => {
      console.log(val.value)
    })
    watch(val, (a, b) => {
      console.log(a, b)
    })
    const computedVal: ComputedRef<number | string> = computed(() => {
      if (typeof val.value === 'number') {
        return val.value + 1
      }
      return val.value + 'tets'
    })
    return {
      test: val,
      computedVal: computedVal,
      buttonClickHanlder: buttonClickHanlder
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
