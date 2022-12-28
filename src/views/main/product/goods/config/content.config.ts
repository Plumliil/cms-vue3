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

const contentTableConfig: ITableConfig = {
  title: '商品列表',
  propList: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '100'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '80'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '100',
      slotName: 'state'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '240',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '240',
      slotName: 'updateAt'
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
