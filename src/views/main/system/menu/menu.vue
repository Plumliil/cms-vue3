<template>
  <div class="menu">
    <page-content
      pageName="menu"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'pl-menu',
  components: { PageContent }
})
</script>

<script setup lang="ts">
import contentTableConfig from './config/content.config'
</script>

<style scoped></style>
