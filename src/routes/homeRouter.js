import Home from '@/pages/home/index'
import Commodity from '@/pages/commodity/index'
import CommodityDetail from '@/pages/commodity-detail/index'
import Cart from '@/pages/cart/index'
import Magnifier from '@/pages/magnifier/index' // 图片放大镜
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'

export default [
  { path: '/home', component: Home, name: '首页', auth: false },
  { path: '/commodity', component: Commodity, name: '商品列表', auth: false },
  { path: '/commodity-detail', component: CommodityDetail, name: '商品详情', auth: false },
  { path: '/cart', component: Cart, name: '购物车', auth: true },
  { path: '/magnifier', component: Magnifier, name: '图片放大镜', auth: false },
  { path: '/login', component: Login, name: '登录', auth: false },
  { path: '/register', component: Register, name: '注册', auth: false }
]
