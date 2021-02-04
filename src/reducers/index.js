import {
  SET_USER_TOKEN,
  SET_USER_INFO,
  SET_CATEGORY_LIST,
  SET_LOADING
} from './action'

export default function counter (state = {}, action) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return Object.assign({}, state, action.data)
    case SET_USER_INFO:
      return Object.assign({}, state, action.data)
    case SET_CATEGORY_LIST:
      return Object.assign([], state, action.data)
    case SET_LOADING:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
