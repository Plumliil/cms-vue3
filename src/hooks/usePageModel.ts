import { ref } from 'vue'
import pageModel from '@/components/page-model'
interface IpageModeNew extends InstanceType<typeof pageModel> {
  dialogVisible: boolean
}
type CallbackFn = (item?: any) => void
// type EditCallbackFn = (item?: any) => void

export function usePageModel(newCb?: CallbackFn, editCb?: CallbackFn): any {
  const pageModelRef = ref<IpageModeNew>()
  const defaultInfo = ref<any>({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
      newCb && newCb(undefined)
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}
