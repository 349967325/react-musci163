import Ajax from '../utils/ajax'

export default {
  // 获取首页banner
  getTopBanners (params) {
    return Ajax.get('/banner', { params })
  },

  // 获取热门推荐
  getHotRecommends (params) {
    return Ajax.get('/personalized', { params })
  },

  // 首页下的新碟上架
  getNewAlbums (params) {
    return Ajax.get('/album/newest', { params })
  },

  // 入驻歌手
  getSettleSinger (params) {
    return Ajax.get('/artist/list', { params })
  }
}
