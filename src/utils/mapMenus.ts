import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { number } from 'echarts'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 加载默认所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  // routeFiles.keys
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据菜单动态添加routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapToMenus(
  userMenus: any[],
  curPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], curPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === curPath) {
      return menu
    }
  }
}
export function pathMapToBreadcrumb(userMenus: any[], curPath: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenus(userMenus, curPath, breadcrumbs)
  return breadcrumbs
}

// export function pathMapToMenus(userMenus: any[], curPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenus(menu.children ?? [], curPath)
//       if (findMenu) return findMenu
//     } else if (menu.type === 2 && menu.url === curPath) {
//       return menu
//     }
//   }
// }
// export function pathMapToBreadcrumb(userMenus: any[], curPath: string): any {
//   const breadcrumbs: IBreadcrumb[] = []
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenus(menu.children ?? [], curPath)
//       if (findMenu) {
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.path })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === curPath) {
//       return menu
//     }
//   }
// }

export function mapMenusToPermissions(userMenus: any[]): string[] {
  const permissions: string[] = []
  const _recurseGetPermissions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)
  return permissions
}

export function getMenuLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leafKeys
}

export { firstMenu }
