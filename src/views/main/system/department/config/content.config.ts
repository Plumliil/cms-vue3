import type { ITableConfig } from '@/views/main/types'
const contentTableConfig: ITableConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '120' },
    { prop: 'leader', label: '部门领导', minWidth: '120' },
    { prop: 'parentId', label: '上级部门', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'create'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'update'
    },
    {
      prop: 'handler',
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
export default contentTableConfig
