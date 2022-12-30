<script lang="ts">
import { defineComponent, defineProps, ref, watch, defineExpose } from 'vue'
import PlForm from '@/base-ui/form'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PlForm
  }
})
</script>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  modelConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
})
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modelConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
    console.log('[props.defaultInfo, newValue]', [
      { ...props.defaultInfo },
      { ...newValue }
    ])
  }
)
const dialogVisible = ref(false)
// 确定按钮逻辑
const store = useStore()
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    console.log('编辑用户')
    // 有值编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    console.log('新建用户')

    // 无值新建
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}
defineExpose({
  dialogVisible
})
</script>

<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      title="title"
      width="20%"
      destroy-on-close
      center
    >
      <pl-form v-model="formData" v-bind="modelConfig"></pl-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="less"></style>
