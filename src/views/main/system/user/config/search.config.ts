import { IForm } from '@/base-ui/form'
const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id...'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名...'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码...'
    },
    {
      type: 'select',
      label: '喜欢运动',
      placeholder: '请选择喜欢运动...',
      options: [
        {
          title: '篮球',
          value: 'backstball'
        },
        {
          title: '足球',
          value: 'football'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间...',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 20px'
  }
}

export default searchFormConfig
