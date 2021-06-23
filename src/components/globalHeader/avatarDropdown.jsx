import React, { memo } from 'react'
import { Dropdown, Menu } from 'antd'

import styles from './avatarDropdown.module.scss'

const dropdownMenus = (
  <Menu>
    <Menu.Item>
      <a>1st menu item</a>
    </Menu.Item>

    <Menu.Item>
      <a>2nd menu item</a>
    </Menu.Item>

    <Menu.Item>
      <a>3rd menu item</a>
    </Menu.Item>

    <Menu.Item>
      <a>退出</a>
    </Menu.Item>
  </Menu>
)

export default memo(function AvatarDropdown (props) {
  return (
    <Dropdown overlay={dropdownMenus}>
      <a className={`${styles.nameWrap}`}>清新悦耳的患者无病</a>
    </Dropdown>
  )
})
