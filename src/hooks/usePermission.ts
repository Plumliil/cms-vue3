import { useStore } from 'vuex'
export function usePermission(pageName: string, handleName: string): boolean {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item: string) => item === verifyPermission)
}
