<script lang="ts">
import { defineComponent, computed, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echarts'
import { IDateType } from '../types/types'
export default defineComponent({
  components: {
    BaseEchart
  }
})
</script>
<script setup lang="ts">
const props = defineProps<{
  roseData: IDateType[]
}>()
const options: any = computed(() => {
  return {
    legend: {
      top: '10%'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [40, 110],
        center: ['50%', '60%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
