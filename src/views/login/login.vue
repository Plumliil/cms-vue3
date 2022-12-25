<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  }
})
</script>

<script lang="ts" setup></script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}
</style>
