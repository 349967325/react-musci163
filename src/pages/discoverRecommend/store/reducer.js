import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND } from './action'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNER:
      return Object.assign({}, state, action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return Object.assign({}, state, action.hotRecommends)
    default:
      return state
  }
}
