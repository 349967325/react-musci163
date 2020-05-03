import React, { Component } from 'react';

import logoImg from '@/assets/images/mall-logo.jpg'
import styles from './siteheader.module.scss'

class SiteHeader extends Component {
  render() {
    return (
      <div>
        <div className={`${styles.container} clearfix`}>
          <div className={`${styles.headerLogo}`}>
            <img className={`${styles.logo}`} src={logoImg} />
          </div>

          <div className={`${styles.headerSearch}`}>
            <div>
              <input type='text' className={`${styles.searchInput}`}
                placeholder='请输入要搜索的商品'
                autoComplete='off'
              />
              <a className={`${styles.searchButton}`}>
                搜索
              </a>
            </div>
          </div>

          <div className={`${styles.miniCart}`}>
            <div className={`${styles.cartHint}`}>
              <i className={`iconfont icon-gouwuche ${styles.gouwuche}`} />
              <span>购物车</span>
              <span>(10)</span>
            </div>

            <div className={`${styles.cartDrop}`}></div>
          </div>

          <div className={`${styles.myRegister}`}>
            注册企业用户
          </div>
        </div>
      </div>
    )
  }
}

export default SiteHeader
