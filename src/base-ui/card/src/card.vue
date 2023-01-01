<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({})
</script>
<script setup lang="ts">
defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <div class="pl-card">
    <el-card>
      <div class="header">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
      </div>
      <slot name="default"></slot>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.pl-card {
  .header {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    padding-bottom: 5px;
    color: rgba(128, 128, 128, 0.8);
    font-size: 12px;
    text-align: left;
  }
}
</style>
