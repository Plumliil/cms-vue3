import { createStore, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login'
import { Store } from 'element-plus/es/components/table/src/store'
const store = createStore<IRootState>({
  state: {
    name: 'plumli'
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
