import { ILoginState } from './login/types'
export interface IRootState {
  curPage: any
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
}
// 类型限制
export type IStoreType = IRootState & IRootWithModule
