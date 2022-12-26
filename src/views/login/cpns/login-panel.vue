<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid">账号登录</i></span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-date">手机登录</i></span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">主要链接</el-link>
    </div>
    <el-button @click="handelLoginClick" type="primary" class="login-btn"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 属性定义
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')
    // 方法定义
    const handelLoginClick = () => {
      if (currentTab.value === 'account') {
        if (accountRef.value) {
          accountRef.value.loginAction(isKeepPassword.value)
        }
      } else {
        if (phoneRef.value) {
          phoneRef.value.loginAction()
        }
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handelLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .account-control {
    display: flex;
    justify-content: space-around;
  }
  .login-btn {
    margin-top: 20px;
    width: 160px;
    height: 36px;
    line-height: 36px;
  }
}
</style>
