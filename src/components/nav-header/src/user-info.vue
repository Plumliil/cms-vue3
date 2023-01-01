<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span>{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
          <el-dropdown-item @click="handleLogoutClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = store.state.login.userInfo.name
    const handleLogoutClick = () => {
      LocalCache.deleteCache('token')
      router.push('/main')
    }
    return {
      name,
      handleLogoutClick
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      padding: 0 10px;
    }
  }
}
</style>
