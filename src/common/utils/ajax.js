import axios from 'axios'
import { message } from 'antd'
import config from './config'
// import configureStore from './configureStore'

const { host } = config
// const { store } = configureStore()
// const needLoadingRequestCount = 0

// function showFullLoading () {
//   if (needLoadingRequestCount === 0) {
//     store.dispatch({ type: 'SET_LOADING', data: { loading: true } })
//   }
//   needLoadingRequestCount++
// }

// function hideFullLoading () {
//   if (needLoadingRequestCount <= 0) return
//   needLoadingRequestCount--
//   if (needLoadingRequestCount === 0) {
//     store.dispatch({ type: 'SET_LOADING', data: { loading: false } })
//   }
// }

const instance = axios.create({
  baseURL: host, // 默认基础请求url
  timeout: 60000 // 请求60s超时
})

// request 拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response响应器
instance.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  message.destroy()
  return Promise.reject(error.response.status)
})

export default instance
