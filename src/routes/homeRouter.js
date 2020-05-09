import Home from '@/pages/home/index'
import Commodity from '@/pages/commodity/index'
import CommodityDetail from '@/pages/commodity-detail/index'

export default [
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/commodity',
    name: '商品列表',
    component: Commodity
  },
  {
    path: '/commodity-detail',
    name: '商品详情',
    component: CommodityDetail
  },
]
