import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, Icon } from 'antd'

import styles from './index.module.scss'

const headerLinks = [
  { title: '发现音乐' },
  { title: '我的音乐' },
  { title: '朋友' },
  { title: '商城' }
]

export default memo(function GlobalHeader (props) {
  return (
    <div className={`${styles.headerBar}`}>
      <div className={`${styles.mtop}`}>
        <div className={`${styles.topContent} clearfix`}>
          <h1 className={`${styles.logo}`} />
          <div className={`${styles.nav}`}>
            {
              headerLinks.map((navitem, i) => (
                <NavLink key={`nav-${i}`} to={{ pathname: navitem.link }} className={`${styles.navItem}`} activeClassName={`${styles.linkActive}`}>
                  <span>{navitem.title}</span>
                  <sub className={`${styles.cor}`} />
                </NavLink>
              ))
            }
          </div>

          <div className={`${styles.searchLand}`}>
            <Form>
              <Form.Item style={{ marginBottom: '0px' }}>
                <Input prefix={<Icon type='search' style={{ fontSize: '18px', color: '#333333' }} />} />
              </Form.Item>
            </Form>
          </div>

          <div className={`${styles.loginLand}`}>
            <a className={`${styles.loginBtn}`}>登录</a>
          </div>
        </div>
      </div>
    </div>
  )
})
