export default [
  {
    title: '首页',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/button'
      },
      {
        title: '模态框',
        key: '/admin/ui/modal'
      },
      {
        title: '加载动画',
        key: '/admin/ui/loading'
      },
      {
        title: '通知提示框',
        key: '/admin/ui/notification'
      },
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    children: [
      {
        title: '登陆',
        key: '/admin/form/login'
      },
      {
        title: '注册',
        key: '/admin/form/register'
      },
    ]
  },
]
