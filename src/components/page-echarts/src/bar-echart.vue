<script lang="ts">
import { defineComponent, computed, withDefaults, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echarts'
import * as echarts from 'echarts'
export default defineComponent({
  components: {
    BaseEchart
  }
})
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    labels: string[]
    values: any[]
    type?: 'x' | 'y'
  }>(),
  {
    title: '',
    type: 'x'
  }
)
let options: any = []
if (props.type === 'x') {
  options = computed(() => {
    return {
      title: {
        text: props.title
      },
      xAxis: {
        data: props.labels,
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
          data: props.values
        }
      ]
    }
  })
} else {
  options = computed(() => {
    return {
      color: '#719DF7',
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none'
        }
      },
      backgroundColor: '#fff',
      xAxis: {
        show: true,
        type: 'value',
        axisLabel: {
          show: true,
          margin: 15,
          textStyle: {
            color: 'rgba(0, 0, 0, 0.45)',
            fontSize: 12,
            fontFamily: 'PingFang SC'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLabel: {
            interval: 0, //代表显示所有x轴标签显示
            show: true,
            margin: 15,
            textStyle: {
              color: 'rgba(0, 0, 0, 0.45)',
              fontSize: 12,
              fontFamily: 'PingFang SC'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#D9D9D9'
            }
          },
          data: props.labels
        }
      ],
      series: [
        {
          name: '销量',
          type: 'bar',
          zlevel: 1,
          barWidth: 13,
          data: props.values
        }
      ]
    }
  })
}
</script>

<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
