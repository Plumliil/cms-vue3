import plRequest from '@/service'

enum DashboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return plRequest.get({
    url: DashboardApi.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return plRequest.get({
    url: DashboardApi.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return plRequest.get({
    url: DashboardApi.categoryGoodsFavor
  })
}
export function getaddressGoodsSale() {
  return plRequest.get({
    url: DashboardApi.addressGoodsSale
  })
}
