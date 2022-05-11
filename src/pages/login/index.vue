<template>
  <div class="login">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="账户" v-bind="validateInfos.accountname">
        <a-input v-model:value="modelRef.accountname" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input v-model:value="modelRef.password" />
      </a-form-item>
      <a-form-item label="验证码" v-bind="validateInfos.authCode">
        <a-input v-model:value="modelRef.authCode" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
        <a-button style="margin-left: 10px" @click="reset">取消</a-button>
      </a-form-item>
    </a-form>
    <a-button type="primary" @click="computedHandler">计算属性</a-button>
    <div>get---: {{ testComputed }}</div>
    <div>set---: {{ setComputed }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, computed, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Form } from 'ant-design-vue'
const useForm = Form.useForm
export default defineComponent({
  name: 'loginPage',
  setup() {
    const formInitValue = {
      accountname: 'chenglong.he',
      password: 'Ac02ME',
      authCode: '666666'
    }
    const modelRef = reactive(formInitValue)
    console.log(toRaw(modelRef) === formInitValue)
    const rules = reactive({
      accountname: [
        {
          required: true,
          message: '请输入登录账户'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入登录密码'
        }
      ],
      authCode: [
        {
          required: true,
          message: '请输入验证码'
        }
      ]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rules)
    // 路由
    const route = useRouter()
    // 上下文
    const { proxy, ctx } = getCurrentInstance() as any
    // console.log(proxy.http)
    // console.log(ctx)
    onMounted(() => {})
    const store = useStore()
    const onSubmit = async () => {
      try {
        const res = await validate()
        const $http = proxy.$http
        $http({
          value: 'api/account/login',
          type: 'post',
          body: {
            ...res
          }
        }).then((res) => {
          if (res.actionResult === '1') {
            // 保存信息
            // 保存token 到本地
            localStorage.setItem('Authorization', res.data.token)
            store.commit('setUserInfo', res.data)
            // 登录成功跳转到首页
            route.push({ path: '/home', query: { name: 'test' } })
          } else {
            console.log(res.message)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    const reset = () => {
      resetFields()
    }
    // 计算属性的get
    const testComputed = computed(() => {
      return modelRef.accountname + 'userName'
    })
    // 带有set的计算属性
    const setComputed = computed({
      get: () => {
        return modelRef.accountname + 'userName'
      },
      set: (val) => {
        modelRef.accountname = val
      }
    })
    const computedHandler = () => {
      setComputed.value = 'setComputed'
    }
    return {
      computedHandler,
      testComputed,
      setComputed,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit
    }
  }
})
</script>
<style lang="scss" scoped></style>
