import { createStore, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login'
import system from './main/system/system'
import { Store } from 'element-plus/es/components/table/src/store'
const store = createStore<IRootState>({
  state: {
    curPage: {}
  },
  mutations: {
    setCurPage(state, payload) {
      state.curPage = payload
    }
  },
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore(): void {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
