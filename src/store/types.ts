import { ILoginState } from './login/types'
import { IDashboardState } from './main/dashboard/types'
export interface IRootState {
  curPage: any
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  dashboard: IDashboardState
}
// 类型限制
export type IStoreType = IRootState & IRootWithModule
