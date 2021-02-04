import React, { Component } from 'react'
import { Spin } from 'antd'

import styles from './loading.module.scss'

class PageLoading extends Component {
  render () {
    return (
      <div className={`${styles.loadingWrap}`}>
        <div className={`${styles.loadContent}`}>
          <Spin size='large' tip='加载中...' />
        </div>
      </div>
    )
  }
}

export default PageLoading
