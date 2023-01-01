import * as echarts from 'echarts'
import { EChartsOption } from 'echarts/types/dist/echarts'

export default function createEchartsInstance(el: HTMLElement): any {
  const echartInstance = echarts.init(el)
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
