<script lang="ts">
import { defineComponent, computed } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { usePageModel } from '@/hooks/usePageModel'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'user',
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
import modelConfig from '../user/config/model.config'
const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
  usePageSearch()
const newCallBack = () => {
  const passwordItem = modelConfig.formItems.find((item) => {
    return item['field'] === 'password'
  })
  passwordItem!.isHidden = false
}
const editCallBack = () => {
  const passwordItem = modelConfig.formItems.find((item) => {
    return item['field'] === 'password'
  })
  passwordItem!.isHidden = true
}

// 动态添加部门角色和列表
const store = useStore()
// 动态数据使用 computed
const modelConfigRef = computed(() => {
  const departmentItem = modelConfig.formItems.find((item) => {
    return item.field === 'departmentId'
  })
  console.log(departmentItem)
  departmentItem!.options = store.state.entireDepartment.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  console.log('departmentItem!.options', departmentItem!.options)

  const roleItem = modelConfig.formItems.find((item) => {
    return item.field === 'roleId'
  })
  roleItem!.options = store.state.entireRole.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modelConfig
})

const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  newCallBack,
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
      pageName="users"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      ref="pageModelRef"
      title="title"
      pageName="users"
      :modelConfig="modelConfigRef"
      :defaultInfo="defaultInfo"
    ></page-model>
  </div>
</template>

<style scoped lang="less"></style>
