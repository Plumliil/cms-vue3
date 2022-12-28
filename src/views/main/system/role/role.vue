<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      pageName="role"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'role',
  components: {
    pageSearch,
    pageContent
  }
})
</script>
<script setup lang="ts">
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
</script>
<style scoped lang="less">
.role {
}
</style>
