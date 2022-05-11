<template>
  <div class="content">
    dasd
    <div>
      <a-button type="primary" @click="addAgeHandler">reactive</a-button>
      <a-button type="primary" @click="addRefAgeHandler">ref</a-button>
      <a-button type="primary" @click="addRefNumHandler">num</a-button>
    </div>
    <div>
      <p>objReactName:{{objReact.name}}</p>
      <p>objReactAge:{{objReact.age}}</p>
    </div>
    <div>
      <p>refName:{{testRef.name}}</p>
      <p>refAge:{{testRef.age}}</p>
      <p>refAgeNo:{{refObj.age}}</p>
      <p>refNumber:{{numRef}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
interface ObjTs {
  name: string;
  age: number
}
export default defineComponent({
  naem: 'homePage',
  components: {},
  setup() {
    const obj: ObjTs = {
      name: 'foo',
      age: 18
    }
    const refObj = {
      name: 'ref',
      age: 16
    }
    const num = 12
    const objReact = reactive<ObjTs>(obj)
    const testRef = ref<ObjTs>(refObj)
    const numRef = ref<number>(12)
    const addAgeHandler = () => {
      objReact.age++
    }
    const addRefAgeHandler = () => {
      testRef.value.age++
      console.log(refObj)
    }
    const addRefNumHandler = () => {
      console.log(numRef)
      numRef.value++
    }
    return {
      addRefAgeHandler,
      addAgeHandler,
      addRefNumHandler,
      numRef,
      refObj,
      objReact,
      testRef
    }
  },
})
</script>
<style lang="scss" scoped>

</style>
