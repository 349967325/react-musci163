import MyCenter from '@/pages/myCenter/index'
import MyOrder from '@/pages/myOrder/index'
import MyAddress from '@/pages/myAddress/index'
import Discover from '@/pages/discover/index'
import Mine from '@/pages/mine/index'
import Friend from '@/pages/friend/index'

export default [
  { path: '/my/myCenter', component: MyCenter, name: '个人中心', auth: true },
  { path: '/my/myOrder', component: MyOrder, name: '我的订单', auth: true },
  { path: '/my/myAddress', component: MyAddress, name: '我的地址', auth: true },

  { path: '/discover', component: Discover, name: '发现音乐', auth: false },
  { path: '/mine', component: Mine, name: '我的音乐', auth: false },
  { path: '/friend', component: Friend, name: '朋友', auth: false }
]
