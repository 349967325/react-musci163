import MyCenter from '@/pages/myCenter/index'
import MyOrder from '@/pages/myOrder/index'
import MyAddress from '@/pages/myAddress/index'
import Home from '@/pages/home/index'

export default [
  { path: '/my/myCenter', component: MyCenter, name: '个人中心', auth: true },
  { path: '/my/myOrder', component: MyOrder, name: '我的订单', auth: true },
  { path: '/my/myAddress', component: MyAddress, name: '我的地址', auth: true },

  { path: '/home', component: Home, name: '音乐', auth: false }
]
