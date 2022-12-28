import { IForm } from '@/base-ui/form'
const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id...'
    },
    {
      field: 'name',
      type: 'input',
      label: '商品名',
      placeholder: '请输入商品名...'
    }
    // {
    //   field: 'enable',
    //   type: 'select',
    //   label: '用户状态',
    //   placeholder: '请选择用户状态...',
    //   options: [
    //     { title: '启用', value: 1 },
    //     { title: '禁用', value: 0 }
    //   ]
    // },
    // {
    //   field: 'createAt',
    //   type: 'datepicker',
    //   label: '创建时间',
    //   otherOptions: {
    //     startPlaceholder: '开始时间',
    //     endPlaceholder: '结束时间',
    //     type: 'daterange'
    //   }
    // }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 20px'
  }
}

export default searchFormConfig
