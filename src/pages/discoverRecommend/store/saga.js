import { takeEvery, put } from 'redux-saga/effects'
import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND, changeTopBannerAction, changeHotRecommendAction } from './action'
import Api from '@/common/api/index'

function * getTopBannersAction () {
  try {
    const res = yield Api.getTopBanners({})
    yield put(changeTopBannerAction(res.result))
  } catch (error) {

  }
}

function * getHotRecommendsAction () {
  try {
    const res = yield Api.getHotRecommends({})
    yield put(changeHotRecommendAction(res.result))
  } catch (error) {

  }
}

const aggregate = [
  takeEvery(CHANGE_TOP_BANNER, getTopBannersAction),
  takeEvery(CHANGE_HOT_RECOMMEND, getHotRecommendsAction)
]

export default aggregate
