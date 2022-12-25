<template>
  <div class="login-phone">
    <el-form label-width="60px" :model="phone">
      <el-form-item label="手机" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code" />
          <el-button class="btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      number: '',
      code: ''
    })
    // const rules = {
    //   name: [
    //     { required: true, message: '用户名是必传内容', trigger: 'blur' },
    //     {
    //       pattern: /^[a-z0-9]{5,10}$/,
    //       message: '用户名必须是5-10个字母或数字',
    //       trigger: 'blur'
    //     }
    //   ],
    //   code: [
    //     { required: true, message: '密码是必传内容', trigger: 'blur' },
    //     {
    //       pattern: /^[a-z0-9]{3,}$/,
    //       message: '密码必须是3个以上字母或数字',
    //       trigger: 'blur'
    //     }
    //   ]
    // }
    const loginAction = () => {
      console.log('phone login')
      // 登陆验证
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
    return {
      phone,
      loginAction
      // rules
    }
  }
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
  input {
    width: 100px;
  }
  .btn {
    margin-left: 10px;
  }
}
</style>
