<template>
  <div class="pl-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <!-- <el-table-column align="center" v-bind="propItem" /> -->
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <!-- {{ scope.row[propItem.prop] }} -->
            <slot :name="propItem.slotName" :row="scope.row">{{
              scope.row[propItem.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({})
</script>

<script setup lang="ts">
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="less"></style>