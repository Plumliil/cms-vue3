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
      label: '用户名',
      placeholder: '请输入用户名...'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名...'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码...'
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态...',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 20px'
  }
}

export default searchFormConfig
