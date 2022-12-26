<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    })
    const loginAction = (isKeepPassword: boolean) => {
      if (formRef.value) {
        formRef.value.validate((valid) => {
          if (valid) {
            console.log('验证通过')
            // 判断是否需要记录密码
            if (isKeepPassword) {
              localCache.setCache('name', account.name)
              localCache.setCache('password', account.password)
            } else {
              localCache.deleteCache('name')
              localCache.deleteCache('password')
            }
            // 登陆验证
            store.dispatch('login/accountLoginAction', { ...account })
          } else {
            console.log('验证失败')
          }
        })
      }
    }
    return {
      formRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
