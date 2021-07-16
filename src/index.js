
import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import { ConfigProvider } from 'antd'

import App from './App'
import moment from 'moment'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import './index.css'

moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}><App /></ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
