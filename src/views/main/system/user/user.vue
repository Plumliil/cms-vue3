<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    pageContent
  }
})
</script>
<script setup lang="ts">
import searchFormConfig from './config/search.config'
import contentTableConfig from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
  usePageSearch()
</script>
<style scoped lang="less"></style>
