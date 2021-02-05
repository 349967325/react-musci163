import axios from 'axios'
import { message } from 'antd'
import config from './config'
import configureStore from './configureStore'
import { getStore, removeStore } from './mUtils'

const { host } = config
const { store } = configureStore()
let needLoadingRequestCount = 0
console.log(needLoadingRequestCount)

function showFullLoading () {
  if (needLoadingRequestCount === 0) {
    store.dispatch({ type: 'SET_LOADING', data: { loading: true } })
  }
  needLoadingRequestCount++
}

function hideFullLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    store.dispatch({ type: 'SET_LOADING', data: { loading: false } })
  }
}

axios.defaults.timeout = 60000 // 请求60s超时
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'

// http request 拦截器
axios.interceptors.request.use(config => {
  config.headers.Token = getStore('token') || ''
  showFullLoading()

  return config
}, error => {
  hideFullLoading()

  return Promise.reject(error)
})

// http response响应器
axios.interceptors.response.use(response => {
  hideFullLoading()
  if (response.status === 200) {
    const { data } = response

    if (+data.code === 10000) {
      return data
    } else if (data.code === 'SOM_20000') {
      removeStore('token')
      window.location.href = window.location.protocol + '//' + window.location.host + '/login'
    } else {
      return message.error(data.message)
    }
  } else {
    return Promise.reject(response)
  }
}, error => {
  message.destroy()
  hideFullLoading()
  message.error('系统繁忙，请稍后！')
  return Promise.reject(error)
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/
export function get (url, params) {
  return new Promise((resolve, reject) => {
    const _url = host + url
    axios.get(_url, { params: params }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/
export function post (url, params) {
  return new Promise((resolve, reject) => {
    const _url = host + url
    axios.post(_url, params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err.data)
    })
  })
}
