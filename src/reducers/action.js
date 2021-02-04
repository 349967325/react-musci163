
export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'
export const SET_LOADING = 'SET_LOADING'

// 设置用户token
export function setUserToken (data) {
  return { type: SET_USER_TOKEN, data }
}

// 设置用户信息
export function setUserInfo (data) {
  return { type: SET_USER_INFO, data }
}

// 设置分类信息
export function setCategoryList (data) {
  return { type: SET_CATEGORY_LIST, data }
}

// 设置页面loading
export function setLoading (data) {
  return { type: SET_LOADING, data }
}
