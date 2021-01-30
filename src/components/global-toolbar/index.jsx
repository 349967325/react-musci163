import React, { Component } from 'react'

import styles from './toolbar.module.scss'

class GlobalToolbar extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {}

  render() {
    return (
      <div className={styles.toolBar}>
        <a className={`${styles.toolItem}`}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-shouye ${styles.icon}`} />
          </div>
          <div className={`${styles.toolText}`}>
            个人中心
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-jushoucang ${styles.icon}`} />
          </div>
          <div className={`${styles.toolText}`}>
            我的收藏
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-yijianfankui ${styles.icon}`} />
          </div>
          <div className={`${styles.toolText}`}>
            售后服务
          </div>
        </a>
        <a className={`${styles.toolItem}`}>
          <div className={`${styles.iconWrap}`}>
            <i className={`iconfont icon-gouwuche ${styles.icon}`} />
          </div>
          <div className={`${styles.toolText}`}>
            购物车
          </div>
        </a>
      </div>
    )
  }
}

export default GlobalToolbar
