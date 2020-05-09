import {
  SET_USER_INFO,
  SET_CATEGORY_LIST,
} from './action'

export default function counter(state = {}, action) {
  switch (action.type) {
  case SET_USER_INFO:
    return Object.assign({}, state, action.data)
  case SET_CATEGORY_LIST:
    return Object.assign([], state, action.data)
  default:
    return state
  }
}
