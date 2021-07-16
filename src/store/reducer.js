import { combineReducers } from 'redux'

import recommendReducer from '../pages/discoverRecommend/store/reducer'

// 多个reducer合并
const cRducer = combineReducers({
  recommend: recommendReducer
})

export default cRducer
