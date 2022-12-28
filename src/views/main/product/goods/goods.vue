<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="goods"
      :contentTableConfig="contentTableConfig"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px; z-index: 999"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageSearch
  }
})
</script>
<script setup lang="ts">
import contentTableConfig from './config/content.config'
import searchFormConfig from './config/search.config'
import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
  usePageSearch()
</script>

<style scoped></style>
