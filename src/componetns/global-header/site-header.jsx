import React, { Component } from 'react';

import styles from './siteheader.module.scss'

class SiteHeader extends Component {
  render() {
    return (
      <div>
        <div className={`${styles.container} clearfix`}>
          <div className={`${styles.headerLogo}`}></div>

          <div className={`${styles.headerSearch}`}></div>

          <div className={`${styles.miniCart}`}>
            <div>
              <i className={`iconfont icon-gouwuche ${styles.gouwuche}`} />
              <span>购物车</span>
              <span>(10)</span>
            </div>
          </div>

          <div className={`${styles.myRegister}`}>
            <span>注册企业用户</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteHeader
