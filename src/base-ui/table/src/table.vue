<template>
  <div class="pl-table">
    <div class="header">
      <h2>{{ title }}</h2>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table
      @selection-change="handleSelectChange"
      :data="listData"
      border
      style="width: 100%"
      :row-key="childrenProps.rowKey"
      :tree-props="childrenProps.treeProp"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">{{
              scope.row[propItem.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[5, 10, 20, 50]"
          :small="false"
          :disabled="false"
          :background="false"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps, PropType, defineEmits } from 'vue'
import { IPropItem } from '../types'
export default defineComponent({})
</script>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array as PropType<IPropItem[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits<{
  (e: 'selectionChange', data: any): void
  (e: 'update:page', data: any): void
}>()

const handleSelectChange = (value: any) => {
  emits('selectionChange', value)
}
const handleSizeChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  console.log(currentPage)

  emits('update:page', { ...props.page, currentPage })
}
</script>

<style scoped lang="less">
.pl-table {
  .header {
    display: flex;
    justify-content: space-between;
    .handler {
      display: flex;
      justify-content: right;
      padding: 10px 0;
    }
  }
  .footer {
    display: flex;
    justify-content: right;
    padding: 10px 0;
  }
}
</style>
