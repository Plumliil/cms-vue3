import { ref } from 'vue'
import pageContent from '@/components/page-content'
interface INewPageContent extends InstanceType<typeof pageContent> {
  getPageData(queryInfo: any): void
}
export function usePageSearch(): [any, () => void, (queryInfo: any) => void] {
  const pageContentRef = ref<INewPageContent>()
  const handleResetBtnClick = (): void => {
    pageContentRef.value?.getPageData({})
  }
  const handleQueryBtnClick = (queryInfo: any) => {
    // 使用 ts extends
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetBtnClick, handleQueryBtnClick]
}
