import { IForm } from '@/base-ui/form'
const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名...'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限',
      placeholder: '请输入权限...'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 20px'
  }
}

export default searchFormConfig
