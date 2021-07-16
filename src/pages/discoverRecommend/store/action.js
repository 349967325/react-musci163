
export const CHANGE_TOP_BANNER = 'CHANGE_TOP_BANNER'
export const CHANGE_HOT_RECOMMEND = 'CHANGE_HOT_RECOMMEND'
export const CHANGE_NEW_ALBUMS = 'CHANGE_NEW_ALBUMS'
export const CHANGE_UP_RANKING = 'CHANGE_UP_RANKING'
export const CHANGE_NEW_RANKING = 'CHANGE_NEW_RANKING'
export const CHANGE_ORIGIN_RANKING = 'CHANGE_ORIGIN_RANKING'
export const CHANGE_SETTLE_SINGER = 'CHANGE_SETTLE_SINGER'

// 轮播图Action
export const changeTopBannerAction = (data) => ({
  type: CHANGE_TOP_BANNER,
  topBanners: data
})

// 热门推荐Action
export const changeHotRecommendAction = (data) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: data
})
