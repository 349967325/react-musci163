import React, { Component } from 'react'
import { Spin } from 'antd'

import styles from './loading.module.scss'

class PageLoading extends Component {
  render () {
    return (
      <div className={`${styles.loadingWrap}`}>
        <div className={`${styles.loadContent}`}>
          <Spin size='large' />
        </div>
      </div>
    )
  }
}

export default PageLoading
