import React, { Component } from 'react'

import styles from './siteheader.module.scss'

class MenuNav extends Component {
  static propTypes = {}
  state = {}

  render() {
    return (
      <div className={`${styles.menuLand}`}>
        <ul className={`${styles.menuNav} clearfix`}>
          <li>
            <div className={`${styles.categoryTitle}`}>全部商品分类</div>
            <div className={`${styles.categorys}`}>
              <ul>
                <li className={`${styles.categoryToggle}`}>
                  <div className={`${styles.categoryMenu}`} />

                  <div className={`${styles.categoryPopover}`} />
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className={`${styles.menuItem}`}>首页</div>
          </li>

          <li>
            <div className={`${styles.menuItem}`}>品牌馆</div>
          </li>

          <li>
            <div className={`${styles.menuItem}`}>快速下单</div>
          </li>

          <li>
            <div className={`${styles.menuItem}`}>公司介绍</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuNav
