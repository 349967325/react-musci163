import React, { memo } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Input, Icon } from 'antd'

import AvatarDropdown from './avatarDropdown'
import { headerLinks, dicoverMenu } from '@/common/localdatas/localdatas'

import styles from './index.module.scss'

export default memo(function GlobalHeader (props) {
  // 渲染header导航
  const renderHeaderLinks = (item, index) => {
    if (item.outside) {
      return (
        <a key={`nav-${index}`} href={item.link} className={`${styles.navItem}`}>
          <span>{item.title}</span>
        </a>
      )
    } else {
      return (
        <NavLink key={`nav-${index}`} to={{ pathname: item.link }} className={`${styles.navItem}`} activeClassName={`${styles.linkActive}`}>
          <span>{item.title}</span>
          <sub className={`${styles.cor}`} />
        </NavLink>
      )
    }
  }

  return (
    <div className={`${styles.headerBar}`}>
      <div className={`${styles.mtop}`}>
        <div className={`w1100 ${styles.topContent} clearfix`}>
          <h1 className={`${styles.logo}`} />
          <div className={`${styles.nav}`}>
            {
              headerLinks.map((navitem, i) => (
                renderHeaderLinks(navitem, i)
              ))
            }
          </div>

          <div className={`${styles.searchLand}`}>
            <Input
              prefix={<Icon type='search' style={{ fontSize: '18px', color: '#333333' }} />}
              autoComplete='off'
            />
          </div>

          <div className={`${styles.loginLand}`}>
            <AvatarDropdown />
          </div>
        </div>
      </div>

      <div className={`${styles.subnav}`}>
        <div className={`w1100 ${styles.subnavWrap}`}>
          <div className={`${styles.subnavContainer}`}>
            {
              dicoverMenu.map((dicitem, index) => (
                <Link key={`subnavLink-${index}`} className={`${styles.subnavItem}`}>
                  <em>{dicitem.title}</em>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
})
