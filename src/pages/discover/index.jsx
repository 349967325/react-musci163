import React, { memo } from 'react'

import styles from './index.module.scss'

export default memo(function Discover (props) {
  return (
    <div className={`${styles.container}`}>
      <div>这是首页</div>
    </div>
  )
})
