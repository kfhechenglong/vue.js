
import { httpOptionsType } from './../http/index'
// 接口返回的数据类型
export  interface HttpResopnse {
  message: string;
  actionResult: string;
  data: any
}
export type HttpInterface = (options: httpOptionsType) => Promise<HttpResopnse>
