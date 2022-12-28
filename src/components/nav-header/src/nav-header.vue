<template>
  <div class="nav-header">
    <el-icon :size="28" class="fold-menu" @click="handelFoldClick">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <pl-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import PlBreadcrumb from '@/base-ui/breadcrumb/index'
import { pathMapToBreadcrumb } from '@/utils/mapMenus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo,
    PlBreadcrumb
  },
  setup(props, { emit }) {
    const store = useStore()
    const route = useRoute()
    const userMenus = store.state.login.userMenus
    const breadcrumbs = computed(() => {
      return pathMapToBreadcrumb(userMenus, route.path)
    })

    const isFold = ref(false)
    const handelFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
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
