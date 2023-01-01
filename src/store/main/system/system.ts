import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

// const pageUrlMap = {
//   users: '/users/list'
// }

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    menuList: [],
    menuCount: 0,
    goodsList: [],
    goodsCount: 0,
    departmentCount: 0,
    departmentList: [],
    storyCount: 0,
    storyList: []
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, data: any[]) {
      state.usersList = data
    },
    changeUsersCount(state, data: number) {
      state.usersCount = data
    },
    changeRoleList(state, data: any[]) {
      state.roleList = data
    },
    changeRoleCount(state, data: number) {
      state.roleCount = data
    },
    changeGoodsList(state, data: any[]) {
      state.goodsList = data
    },
    changeGoodsCount(state, data: number) {
      state.goodsCount = data
    },
    changeMenuList(state, data: any[]) {
      state.menuList = data
    },
    changeMenuCount(state, data: number) {
      state.menuCount = data
    },
    changeDepartmentCount(state, data: number) {
      state.departmentCount = data
    },
    changeDepartmentList(state, data: any[]) {
      state.departmentList = data
    },
    changeStoryTotalCount(state, data: number) {
      state.storyCount = data
    },
    changeStoryList(state, data: any[]) {
      state.storyList = data
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      const { list, totalCount } = pageResult.data
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 获取数据
      const { pageName, id } = payload
      // 配置地址
      const pageUrl = `/${pageName}/${id}`
      // 删除网络请求
      await deletePageData(pageUrl)
      // 请求新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 请求新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 编辑数据请求
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 请求新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
