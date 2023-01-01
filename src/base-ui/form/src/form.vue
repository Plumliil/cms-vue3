<template>
  <div class="pl-form">
    <div class="pl-header"><slot name="header"></slot></div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              center
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
                v-if="item.type === 'datepicker'"
              >
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item> </el-col
        ></template>
      </el-row>
    </el-form>
    <div class="pl-footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, defineProps, defineEmits, ref } from 'vue'
import type { IFormItem } from '../types'
export default defineComponent({
  // emits: ['update:modelValue'],
  // setup(props, { emit }) {
  // 组件间进行数据绑定
  // 父组件传入v-model 子组件用ref接收(简单拷贝)
  // 然后通过 emit('update:modelValue', newValue) 传出
  // const formData = ref({ ...props.modelValue })
  // watch(
  //   formData,
  //   (newValue) => {
  //     emit('update:modelValue', newValue)
  //   },
  //   { deep: true }
  // )
  // return {
  //   formData
  // }
  // }
})
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920 4个
      lg: 8, // >1920 4个
      md: 12, // >1920 4个
      sm: 24, // >1920 4个
      xs: 24 // >1920 4个
    })
  }
})
const emit = defineEmits<{
  (e: 'update:modelValue', data: any): void
}>()
// 双向绑定 当数据发生变化时,通过emit传递到父组件 使用非v-model语法糖
const handleValueChange = (value: any, field: string) => {
  console.log('form field and value', field, value)

  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style scoped lang="less">
.pl-form {
  padding-top: 22px;
  .pl-footer {
    display: flex;
    justify-content: right;
    align-items: center;
    // padding: 0 20px 0 20px;
    padding-bottom: 10px;
    padding-right: 15px;
    // background-color: aqua;
  }
}
</style>
