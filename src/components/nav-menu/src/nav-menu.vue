<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.png" alt="logo" />
      <!-- <span v-if="!collapse" class="title">cms-vue3+ts</span> -->
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :unique-opened="true"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可展开标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                @click="handleItemClick(subitem)"
                :index="subitem.id + ''"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" class="item.icon"></i>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      defaul: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.login.userMenus)
    const handleItemClick = (item: any) => {
      store.commit('setCurPage', item)
      router.push({
        path: item.url ?? '/not-fount'
      })
    }
    return {
      userMenus,
      handleItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  color: white;
  .logo {
    display: flex;
    height: 30px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .img {
    height: 100%;
    margin: 0 10px;
    border-radius: 3px;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
  .el-menu {
    border-right: none;
  }
  .el-submenu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  // hover高亮
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100%-48px);
}
</style>
