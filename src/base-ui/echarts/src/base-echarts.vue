<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  defineProps,
  withDefaults,
  watchEffect
} from 'vue'
import * as echarts from 'echarts'
import useEchart from '../hooks/useEchart'
export default defineComponent({
  name: 'PlEcharts'
})
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    options: echarts.EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<template>
  <div class="pl-echarts">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<style scoped lang="less"></style>
