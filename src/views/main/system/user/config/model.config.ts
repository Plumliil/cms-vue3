export default {
  formItems: [
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
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码...',
      isHidden: true
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码...'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门...',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色...',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '80px',
  itemStyle: {
    padding: '5px 10px'
  }
}
