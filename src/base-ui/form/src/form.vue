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
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    v-model="formData[`${item.field}`]"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
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
import { defineComponent, PropType, watch, ref } from 'vue'
import type { IFormItem } from '../types'
export default defineComponent({
  props: {
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
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 组件间进行数据绑定
    // 父组件传入v-model 子组件用ref接收(简单拷贝)
    // 然后通过 emit('update:modelValue', newValue) 传出
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
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
