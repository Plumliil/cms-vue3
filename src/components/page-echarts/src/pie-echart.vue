<script lang="ts">
import { defineComponent, defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echarts'

interface IDateType {
  name: string
  value: any
}

export default defineComponent({
  components: {
    BaseEchart
  }
})
</script>
<script setup lang="ts">
const props = defineProps<{
  pieData: IDateType[]
}>()
const option: any = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echart">
    <base-echart :options="option"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
