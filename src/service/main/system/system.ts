import plRequest from '@/service'
import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any): any {
  return plRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string): any {
  return plRequest.delete<IDataType>({
    url: url
  })
}
export function editPageData(url: string, editData: any): any {
  console.log('修改 editData')

  return plRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
export function createPageData(url: string, newData: any): any {
  console.log('创建 newData')

  return plRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
