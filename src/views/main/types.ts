export interface IPropItem {
  prop: string
  label: string
  minWidth?: string
  slotName?: string
}

export interface ITableConfig {
  title: string
  propList: IPropItem[]
  showIndexColumn: boolean
  showSelectColumn: boolean
  childrenProps?: any
  showFooter?: boolean
}
