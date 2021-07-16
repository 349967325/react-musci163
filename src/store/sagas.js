import { all } from 'redux-saga/effects'
import recommendSagas from '@/pages/discoverRecommend/store/saga'

const allAggregate = [
  ...recommendSagas
]

function * sagas () {
  yield all(allAggregate)
}

export default sagas
