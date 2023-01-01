<template>
  <div class="department">
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

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModel } from '@/hooks/usePageModel'
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import modalConfig from './config/modal.config'

export default defineComponent({
  name: 'department',
  components: {
    PageSearch,
    PageContent,
    PageModel
  }
})
</script>
<script setup lang="ts">
const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
  usePageSearch()

// modal配置信息
const store = useStore()
const modelConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems?.find(
    (item) => item.field === 'parentId'
  )
  console.log(parentIdItem)
  parentIdItem!.options = store.state.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

// 处理modal的hook
const [pageModelRef, defaultInfo, handleNewData, handleEditData] =
  usePageModel()
</script>
<style scoped></style>
