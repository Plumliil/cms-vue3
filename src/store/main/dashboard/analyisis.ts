import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { IDashboardState } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getaddressGoodsSale,
  getCategoryGoodsFavor
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      const addressSaleResult = await getaddressGoodsSale()
      commit('changeAddressGoodsSale', addressSaleResult.data)
      console.log([
        categoryCountResult.data,
        categorySaleResult.data,
        categoryFavorResult.data,
        addressSaleResult.data
      ])
    }
  }
}

export default dashboardModule
