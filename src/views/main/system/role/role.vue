<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { usePageModel } from '@/hooks/usePageModel'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'role',
  components: {
    pageSearch,
    pageContent,
    pageModel
  }
})
</script>
<script setup lang="ts">
import { usePageSearch } from '@/hooks/usePageSearch'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import modelConfig from './config/model.config'
import { getMenuLeafKeys } from '@/utils/mapMenus'
import { ElTree } from 'element-plus'
const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
  usePageSearch()
// 动态添加部门角色和列表
const store = useStore()
const menus = computed(() => store.state.entireMenu)
console.log(store)

// 动态数据使用 computed
const modelConfigRef = computed(() => {
  return modelConfig
})
const otherInfo = ref({})
const handelCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys

  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList: menuList }
}
// 处理useModel hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallBack = (item: any) => {
  const leafKeys = getMenuLeafKeys(item.menuList)
  console.log('leafKeys', leafKeys)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, true)
  })
  console.log('item', item.menuList)
}
const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  undefined,
  editCallBack
)
</script>

<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      title="title"
      pageName="role"
      :modelConfig="modelConfigRef"
      :defaultInfo="defaultInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          show-checkbox
          :otherInfo="otherInfo"
          :data="menus"
          node-key="id"
          @check="handelCheckChange"
          :props="{ children: 'children', label: 'name' }"
        >
        </el-tree>
      </div>
    </page-model>
  </div>
</template>

<style scoped lang="less">
.menu-tree {
  margin-left: 20px;
}
</style>
