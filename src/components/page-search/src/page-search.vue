<template>
  <div class="page-search">
    <pl-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <el-button @click="handleResetClick">
          <el-icon><Refresh /></el-icon>
          <span>重置</span>
        </el-button>
        <el-button @click="handleSearchClick" type="primary">
          <el-icon><Search /></el-icon>
          <span>搜索</span>
        </el-button>
      </template>
    </pl-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, defineEmits } from 'vue'
import PlForm from '@/base-ui/form'
export default defineComponent({
  components: {
    PlForm
  }
})
</script>
<script setup lang="ts">
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const emits = defineEmits<{
  (e: 'resetBtnClick'): void
  (e: 'queryBtnClick', data: any): void
}>()
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
// 重置
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[`${key}`] = formOriginData[key]
  }
  // formData.value = formOriginData
  emits('resetBtnClick')
}
// 搜索
const handleSearchClick = () => {
  console.log('handleSearchClick')
  emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less"></style>
