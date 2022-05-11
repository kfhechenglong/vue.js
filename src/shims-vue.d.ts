// import { httpOptionsType } from './http/index'
// import { HttpResopnse } from "./type/index";
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

