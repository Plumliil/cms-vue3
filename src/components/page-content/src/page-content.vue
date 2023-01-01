<template>
  <div class="page-content">
    <pl-table
      :listData="dataList"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @selectionChange="selectionChange"
    >
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick" v-if="isCreate"
          >新建</el-button
        >
      </template>
      <template #state="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <el-button
          v-if="isUpdate"
          @click="handleEditClick(scope.row)"
          type="primary"
          plain
          ><el-icon><EditPen /></el-icon
        ></el-button>
        <el-button
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
          type="danger"
          plain
          ><el-icon><Delete /></el-icon
        ></el-button>
      </template>
      <!-- 组件间传递插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </pl-table>
  </div>
</template>

<script lang="ts">
interface IPropItem {
  prop: string
  label: string
  minWidth?: string
  slotName?: string
}

interface ITableConfig {
  title: string
  propList: IPropItem[]
  showIndexColumn: boolean
  showSelectColumn: boolean
}

import {
  defineComponent,
  defineProps,
  defineExpose,
  defineEmits,
  computed,
  PropType,
  ref,
  watch
} from 'vue'
import PlTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'
export default defineComponent({
  components: {
    PlTable
  }
})
</script>
<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<ITableConfig>,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})
const emit = defineEmits<{
  (e: 'newBtnClick'): void
  (e: 'editBtnClick', data: any): void
}>()
// 获取操作权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')
// 双向绑定pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
watch(pageInfo, () => getPageData())
// 请求数据
const getPageData: any = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
const dataList = computed(() =>
  store.getters['system/pageListData'](props.pageName)
)
const listCount = computed(() =>
  store.getters['system/pageListCount'](props.pageName)
)
const selectionChange = (v: any) => {
  console.log('v', v)
}

// 获取其他动态插槽
const otherPropSlots = props.contentTableConfig.propList.filter((item) => {
  if (item.slotName === 'state') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handler') return false
  return true
})
// 删除
const handleDeleteClick = (item: any) => {
  store.dispatch('system/deletePageDataAction', {
    pageName: props.pageName,
    id: item.id
  })
}
const handleNewClick = () => {
  emit('newBtnClick')
}
const handleEditClick = (item: any) => {
  emit('editBtnClick', item)
}
defineExpose({
  getPageData
})
</script>
<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
