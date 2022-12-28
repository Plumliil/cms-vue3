import { App } from 'vue'

import { formatUTC } from '@/utils/time-format'

export function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string): string {
      return formatUTC(value)
    }
  }
}
