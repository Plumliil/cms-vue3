<template>
  <div class="user">
    <div class="search">
      <pl-form v-bind="searchFormConfig"></pl-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlForm from '@/base-ui/form'
import searchFormConfig from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    PlForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .search {
  }
}
</style>
