<script lang="ts">
import { defineComponent, computed, withDefaults, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echarts'
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
  }>(),
  {
    title: ''
  }
)
const options: any = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      top: '5%',
      data: ['分类销量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.labels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
