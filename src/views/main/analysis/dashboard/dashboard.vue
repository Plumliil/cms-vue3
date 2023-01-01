<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PlCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from '@/components/page-echarts/index'
export default defineComponent({
  components: {
    PlCard,
    PieEchart,
    RoseEchart,
    LineEchart
  }
})
</script>
<script setup lang="ts">
const store = useStore()
// 请求数据
store.dispatch('dashboard/getDashboardDataAction')

const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const categoryGoodsSale = computed(() => {
  const labels: string[] = []
  const values: any[] = []
  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    labels.push(item.name)
    values.push(item.goodsCount)
  }
  return {
    labels,
    values
  }
})
const categoryGoodsFavor = computed(() => {
  const labels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    labels.push(item.name)
    values.push(item.goodsFavor)
  }
  return {
    labels,
    values
  }
})
const addressGoodsSale = computed(() => {
  const labels: string[] = []
  const values: any[] = []
  let source: any[] = []
  const addressGoodsSale = store.state.dashboard.addressGoodsSale
  for (const item of addressGoodsSale) {
    source.push([
      ((item.count / 10000) * 10).toFixed(3).slice(0, -1),
      item.count,
      item.address
    ])
    labels.push(item.address)
    values.push(item.count)
  }
  return {
    labels,
    values,
    source
  }
})
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <pl-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </pl-card>
      </el-col>
      <el-col :span="10">
        <pl-card title="不同城市商品销量">
          <bar-echart v-bind="addressGoodsSale" type="y"></bar-echart>
        </pl-card>
      </el-col>
      <el-col :span="7">
        <pl-card title="分类商品数(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </pl-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="12">
        <pl-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </pl-card>
      </el-col>
      <el-col :span="12">
        <pl-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor" type="x"></bar-echart>
        </pl-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less"></style>
