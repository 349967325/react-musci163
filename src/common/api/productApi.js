import { get } from '../utils/ajax'

// 获取产品详情
const getCommodityDetail = (params) => get('/commodity/detail', params)

export default {
  getCommodityDetail
}
