
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'

// 设置用户信息
export function setUserInfo (data) {
  return { type: SET_USER_INFO, data }
}

// 设置分类信息
export function setCategoryList (data) {
  return { type: SET_CATEGORY_LIST, data }
}
