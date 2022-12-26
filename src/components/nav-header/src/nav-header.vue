<template>
  <div class="nav-header">
    <el-icon :size="28" class="fold-menu" @click="handelFoldClick">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>{{ breadcrumbName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import { useStore } from 'vuex'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const store = useStore()
    const breadcrumbName = 'route.name'
    console.log(store.state.curPage)

    const isFold = ref(false)
    const handelFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      breadcrumbName,
      handelFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
