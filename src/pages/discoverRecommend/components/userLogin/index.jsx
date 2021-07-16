import React, { memo } from 'react'

import styles from './index.module.scss'

export default memo(function UserLogin () {
  return (
    <div className={`${styles.userProfile}`}>
      <p className={`${styles.note}`}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className={`${styles.button}`}>用户登录</a>
    </div>
  )
})
